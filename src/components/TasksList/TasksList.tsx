import { Box } from "@chakra-ui/react";
import { useAppSelector } from "../../store/store";
import { selectFilteredTasks } from "../../store/tasks/tasksSelectors";
import { TaskCard } from "../TaskCard/TaskCard";

export const TasksList = () => {
  const filteredTasks = useAppSelector(selectFilteredTasks);

  return (
    <Box as="ul" width="100%" mt="7" display="flex" flexWrap="wrap" gap="5">
      {filteredTasks &&
        filteredTasks.map((task) => {
          return (
            <Box as="li" key={task.id} _marker={{ color: "red" }}>
              <TaskCard task={task} />
            </Box>
          );
        })}
    </Box>
  );
};
