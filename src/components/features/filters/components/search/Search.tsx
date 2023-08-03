import { Flex, Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./search.scss";

interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Search: React.FC<SearchProps> = ({ onChange, value }) => {
  return (
    <>
      <Flex>
        <Input
          placeholder="Search..."
          type="text"
          value={value}
          onChange={onChange}
        />
        <FontAwesomeIcon icon={faSearch} />
      </Flex>
    </>
  );
};
