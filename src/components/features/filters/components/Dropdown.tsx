import { Select } from "@chakra-ui/react";
import { Data } from "../../../../types/types";
import { getCustomPlaceholder } from "../../../../helpers/customPlaceholders";

interface DropdownProps {
  data: Data[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  filterType: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  data,
  onChange,
  value,
  filterType,
}) => {
  const filteredData = data[0].equipments;

  // Filter the data based on the filterType
  const filteredOptions = filteredData.filter((i) => {
    if (filterType === "manufacturer") {
      return i.manufacturer;
    }
    if (filterType === "state") {
      return i.state;
    }
    if (filterType === "city") {
      return i.city;
    }

    return false;
  });

  // Remove duplicate values to show each value only once (e.g., "TX", "Los Angeles") instead of fetching every instance from the API.

  const uniqueValues = new Set<string>();

  for (let i = 0; i < filteredOptions.length; i++) {
    uniqueValues.add(filteredOptions[i][filterType] as string);
  }

  return (
    <>
      <Select
        placeholder={getCustomPlaceholder(filterType)}
        value={value}
        onChange={onChange}
      >
        {Array.from(uniqueValues).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </Select>
    </>
  );
};
