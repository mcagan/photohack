import React from "react";
import SearchResultItem from "./SearchResultItem";

export default function SearchResult(props) {
  return (
    <div className="search-results">
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
    </div>
  );
}
