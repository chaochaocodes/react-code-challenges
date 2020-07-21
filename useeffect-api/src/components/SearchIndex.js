import React, { useState, useEffect } from "react";

// test data
const name = [
  "Margarita",
  "Blue Margarita",
  "Whitecap Margarita",
  "Gin and Tonic",
  "Vodka Tonic",
  "Shirley Temple",
  "Pina Colada"
];

const Index = () => {
 const [searchTerm, setSearchTerm] = useState("");
 const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  
  useEffect(() => {
    const results = name.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="search-function">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Index;