import { ChangeEvent, useRef, useState } from "react";
import { debounce } from "lodash";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "../Search/components/DropdownItem";
import { searchAll } from "../../utils/api/get";
import { Movie, Actor } from "../../typescript/interfaces";
import "./Search.scss";

export default function Search() {
  const [searchResult, setSearchResult] = useState<(Actor | Movie)[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const search = async (query?: string) => {
    if (!query) {
      setSearchResult([]);
      return;
    }
    const response = await searchAll(query);
    console.log(response);
    setSearchResult(response);
  };

  const onChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    search(event.target.value);
  }, 500);

  const preNavigate = () => {
    setSearchResult([]);
    if (!inputRef.current) return;
    inputRef.current.value = "";
  };

  return (
    <Dropdown
      className="search-bar"
      onToggle={() => {}}
      show={searchResult?.length > 0}
    >
      <input
        className="form-control"
        placeholder="Search"
        onChange={onChange}
        ref={inputRef}
      />
      <Dropdown.Menu>
        {searchResult.map((searchResult: Movie | Actor) => (
          <DropdownItem
            key={searchResult.id}
            item={searchResult}
            preNavigate={preNavigate}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
