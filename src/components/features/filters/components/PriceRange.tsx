import { useState } from "react";
import Slider from "rc-slider";
import { Input, Flex } from "@chakra-ui/react";
import "rc-slider/assets/index.css";

interface PriceRangeProps {
  value: number | number[];
  min: number;
  max: number;
  onChange: (value: number | number[]) => void;
}

export const PriceRange = ({ onChange, min, max }: PriceRangeProps) => {
  const [value, setValue] = useState<number | number[]>(min);

  // As user drags slider, API value changes
  const handleValueChange = (newValue: number | number[]) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      <Flex direction="column">
        <Input
          value={value.toLocaleString()}
          onChange={(e) => handleValueChange(parseFloat(e.target.value))}
        />
        <Slider
          range
          value={value}
          onChange={handleValueChange}
          min={min}
          max={max}
        />
      </Flex>
    </>
  );
};
