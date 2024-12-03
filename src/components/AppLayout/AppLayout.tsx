import { Box } from "@chakra-ui/react";
import { AddNewTaskForm } from "../AddNewTaskForm/AddNewTaskForm";
import { Filter } from "../Filter/Filter";
import { TasksList } from "../TasksList/TasksList";

export const AppLayout = () => {
  return (
    <Box as="section" maxW="1200px">
      <AddNewTaskForm />
      <Filter />
      <TasksList />
    </Box>
  );
};
