import React, {useState, useEffect} from "react";
import SearchForm from "../components/SearchForm";

const SearchCard = () => {
  const [searchTerm, setSearchTerm] = useState("a");
  // const [loading, setLoading] = useState(false);
  // const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setLoading(true); 
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map(item => {
            const {
              idDrink,
              strDrink, i{
              strDrinkThumb,
              strAlcoholic,
              strGlass
            } = item;

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    getDrinks();
  }, [searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
    </main>
  );
}

export default SearchCard