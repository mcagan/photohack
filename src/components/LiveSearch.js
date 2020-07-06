import React, { useState } from "react";
import SearchResult from "./SearchResult";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const handleChange = (t) => {
    setTimeout(setTerm(t), 700);
  };
  return (
    <React.Fragment>
      <div className="search_bar">
        <input
          className="search_input"
          name="search-term"
          type="text"
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </div>
      <p>{term}</p>
    </React.Fragment>
  );
}
