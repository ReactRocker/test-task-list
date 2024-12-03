import {
  createListCollection,
  SelectValueChangeDetails,
} from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../ui/select";
import { useAppDispatch } from "../../store/store";
import { changeTaskFilter } from "../../store/tasks/tasksSlice";

const filters = createListCollection({
  items: [
    { label: "All", value: "all" },
    { label: "Complete", value: "complete" },
    { label: "Incomplete", value: "incomplete" },
  ],
});

export const Filter = () => {
  const dispatch = useAppDispatch();

  const handleChangeFilter = ({ value }: SelectValueChangeDetails) => {
    dispatch(changeTaskFilter(value[0]));
  };

  return (
    <SelectRoot
      collection={filters}
      onValueChange={handleChangeFilter}
      size="sm"
      width="320px"
    >
      <SelectLabel>Filter</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder="Select filter" />
      </SelectTrigger>
      <SelectContent>
        {filters.items.map((movie) => (
          <SelectItem item={movie} key={movie.value}>
            {movie.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};
