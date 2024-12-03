import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../interfaces/Task";
import { TaskFilterType } from "../../interfaces/FilterType";

export interface TasksState {
  tasksList: Task[];
  taskFilter: TaskFilterType;
}

const initialState: TasksState = {
  tasksList: [],
  taskFilter: "all",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const taskExists =
        state.tasksList &&
        state.tasksList.some((task) => task.id === action.payload.id);

      if (taskExists) {
        throw new Error(`Task with id ${action.payload.id} already exists`);
      }
      state.tasksList.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskIndex = state.tasksList.findIndex(
        (task) => task.id === action.payload.id
      );

      if (taskIndex === -1) {
        throw new Error(`Task with id ${action.payload.id} does not exist`);
      }

      state.tasksList.splice(taskIndex, 1);
    },
    changeTaskStatus: (state, action) => {
      const task = state.tasksList.find(
        (task) => task.id === action.payload.id
      );

      if (task) {
        task.status = task.status === "incomplete" ? "complete" : "incomplete";
      }
    },
    changeTaskFilter: (state, action) => {
      state.taskFilter = action.payload;
    },
  },
});

export const { addTask, deleteTask, changeTaskStatus, changeTaskFilter } =
  tasksSlice.actions;
const tasksReducer = tasksSlice.reducer;
export default tasksReducer;
