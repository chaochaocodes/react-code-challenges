import React, { useState, useEffect } from 'react';
import './search.css'

const SEARCH_URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

const SearchAPI = () => {
    const [state, setState] = useState([])
    const [search, setSearch] = useState('')
    // const [hasFetched, setHasFetched] = useState(false);

    // useEffect( () => {
    //     if (hasFetched === false ) searchAPI() ;
    // })

    const searchAPI = () => {
        fetch(SEARCH_URL) /* + `${search}` */
        .then(res => res.json())
        .then(res => {
            // console.log(res.drinks);
            setState(res.drinks);
            // setHasFetched(true);
        })
    }

    const searchList = (state) => {
        for (let i = 0; i < state.length; i++) {
            return (
            <div className="search-list">
                <img src={state[i].strDrinkThumb}/>
                <h3>{state[i].strDrink}</h3>
            </div>)
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
        <div>
            <input 
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleChange}
            />
            {/* <button onClick={searchAPI()} >
                Search
            </button> */}
        </div>
        <div className="search-card">
            {searchList(state).map(item => (
                <div>{item}</div>
            ))}
            {/* <img src={state.strDrinkThumb} alt={state.strDrink} />
            <h3>{state.strDrink} </h3> */}
        </div>
        </>
    )
}

export default SearchAPI;
