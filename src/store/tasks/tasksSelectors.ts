import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Task } from "../../interfaces/Task";
import { TaskFilterType } from "../../interfaces/FilterType";

export const selectTasks = (state: RootState) => state.tasks.tasksList;

export const selectTaskFilter = (state: RootState) => state.tasks.taskFilter;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectTaskFilter],
  (tasks: Task[], filter: TaskFilterType) => {
    console.log(tasks, filter);
    if (filter === "all") {
      return tasks;
    }
    return tasks.filter((task) => task.status === filter);
  }
);
