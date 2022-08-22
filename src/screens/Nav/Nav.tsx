import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavContainer from "./NavContainer";
import ToolbarContainer from "./ToolBarContainer";
import Search from "../../components/Search";
import { DarkLightToggleButton } from "../../components/Buttons";
import { sanitizeString } from "../../utils/stringUtils";

export default function Nav() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onSearchInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sanitizedSearch = sanitizeString(search);
    navigate(`/${sanitizedSearch}`);
    setSearch("");
  };
  return (
    <NavContainer position="static">
      <ToolbarContainer>
        <Search
          onChange={onSearchInputChange}
          handleSubmit={handleSearchSubmit}
          value={search}
        />
      </ToolbarContainer>
      <DarkLightToggleButton />
    </NavContainer>
  );
}
