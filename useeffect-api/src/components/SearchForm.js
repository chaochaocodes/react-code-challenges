import React, { useEffect, useRef} from "react";

const SearchForm = ({ setSearchTerm }) => {
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className="section">
      <h2 className="section-title">search cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;