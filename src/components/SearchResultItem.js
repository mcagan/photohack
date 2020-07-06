import React from "react";

export default function SearchResultItem(props) {
  return (
    <div className="search-result-item" key={props.id}>
      <img src={props.src.medium} />
      <p>
        Taken by {props.photographer} on{" "}
        <a href="https://www.pexels.com">Pexels</a>
      </p>
    </div>
  );
}
