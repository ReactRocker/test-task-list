import { Badge, Card } from "@chakra-ui/react";
import { Task } from "../../interfaces/Task";
import { Button } from "../ui/button";
import { useAppDispatch } from "../../store/store";
import { changeTaskStatus, deleteTask } from "../../store/tasks/tasksSlice";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(task));
  };

  const handleChangeTaskStatus = () => {
    dispatch(changeTaskStatus(task));
  };

  return (
    <Card.Root width="320px" cursor="pointer" onClick={handleChangeTaskStatus}>
      <Card.Body gap="2">
        <Card.Title mt="2">{task.name}</Card.Title>
        <Badge
          colorPalette={task.status === "complete" ? "green" : "red"}
          maxW="90px"
        >
          {task.status.toLocaleUpperCase()}
        </Badge>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline" onClick={handleDeleteTask}>
          Delete
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
