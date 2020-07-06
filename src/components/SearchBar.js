import React from "react";
import Debounce from "../hooks/debounce";
import Form from "react-bootstrap/Form";

export default function SearchBar(props) {
  return (
    <div className="search-bar">
      <Form>
        <Form.Control type="search" placeholder="Search for an image" />
      </Form>
    </div>
  );
}
