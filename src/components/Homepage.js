import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

export default function Homepage(props) {
  return (
    <div className="homepage">
      <p className="description">This is going to be the description.</p>
      <SearchBar />
      <SearchResult />
    </div>
  );
}
