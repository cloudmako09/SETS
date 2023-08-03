import { Button } from "@chakra-ui/react";

interface ClearButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ClearButton = ({ onClick }: ClearButtonProps) => {
  return (
    <>
      <Button onClick={onClick}>Clear</Button>
    </>
  );
};
