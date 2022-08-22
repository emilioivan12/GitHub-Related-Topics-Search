import { ChangeEvent, FormEvent } from "react";
import { FaSearch } from "react-icons/fa";

import SearchButton from "./SearchButton";
import SearchContainer from "./SearchContainer";
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./SearchInputBase";

interface SearchProps {
  handleSubmit: (event:FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Search: React.FC<SearchProps> = ({ handleSubmit, value, onChange }) => {
  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchIconWrapper>
        <FaSearch />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search by topic"
        inputProps={{ "aria-label": "search" }}
        onChange={onChange}
        value={value}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchContainer>
  );
};

export default Search;
