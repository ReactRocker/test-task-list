import React, { useState } from "react";
import { Input, Button, Box } from "@chakra-ui/react";
import { useAppDispatch } from "../../store/store";
import { addTask } from "../../store/tasks/tasksSlice";
import { uid } from "uid";

export const AddNewTaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(addTask({ id: uid(), name: taskName, status: "incomplete" }));
      setTaskName("");
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      //   flexWrap="wrap"
      gap="8px"
      mb="7"
    >
      <Input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
        size="md"
        maxW="300px"
      />
      <Button type="submit" colorScheme="blue" color="white">
        Add Task
      </Button>
    </Box>
  );
};
