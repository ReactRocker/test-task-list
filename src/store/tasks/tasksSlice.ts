import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../interfaces/Task";

export interface TasksState {
  tasksList: Task[];
}

const initialState: TasksState = {
  tasksList: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

// export const {} = tasksSlice.actions;
const tasksReducer = tasksSlice.reducer;
export default tasksReducer;
