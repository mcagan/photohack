import React from "react";
import SearchResultItem from "./SearchResultItem";

export default function SearchResult({ results }) {
  return results.map((image) => {
    return (
      <SearchResultItem
        key={image.key}
        photographer={image.photographer}
        src={image.src}
      />
    );
  });
}
