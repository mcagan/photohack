import React, { useState, useEffect, useCallback } from "react";

import Debounce from "../hooks/debounce";

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = Debounce(value, 400);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          className="image-search"
          spellCheck="false"
          placeholder="Search for Images"
          name="search"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
      <div></div>
    </section>
  );
}
