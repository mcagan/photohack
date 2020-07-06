import React from "react";
import LiveSearch from "./LiveSearch";

export default function Homepage(props) {
  return (
    <div className="homepage">
      <p className="description">This is going to be the description.</p>
      <LiveSearch />
    </div>
  );
}
