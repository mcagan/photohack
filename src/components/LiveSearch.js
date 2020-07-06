import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";
import axios from "axios";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (term.length > 0) {
      axios
        .get(`https://api.pexels.com/v1/search?query=${term}`, {
          headers: {
            authorization:
              "563492ad6f9170000100000187910c68e50a479f8187c5380c5f4d6e",
          },
        })
        .then((response) => {
          console.log(response.data.photos);
          setResults(response.data.photos);
          setSearched(true);
        });
    } else {
      setSearched(false);
    }
  }, [term]);

  return (
    <React.Fragment>
      <SearchBar onSearch={(term) => setTerm(term)} />
      {searched && (
        <div className="search-results">
          <SearchResult results={results} />
        </div>
      )}
    </React.Fragment>
  );
}
