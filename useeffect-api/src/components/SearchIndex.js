import React, { useState, useEffect } from "react";

// API List all cocktails by first letter
// https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a
// map through alphabet
// fetch each letter => display index by Letter

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

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
    <div className="Index">
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