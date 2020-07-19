import React, { useEffect, useState } from 'react';

const RANDOMIZE='https://www.thecocktaildb.com/api/json/v1/1/random.php'
const Cocktail = () => {
    const [state, setState] = useState([]);
    const [hasFetched, setHasFetched] = useState(false);

    useEffect( () => {
        if (hasFetched === false ) callAPI() ;
    }, [] )

    const callAPI = () => {
            fetch(RANDOMIZE)
            .then(res => res.json())
            .then(res => {
                console.log(res.drinks[0]);
                setState(res.drinks[0]);
                setHasFetched(true);
            })
    }

    const mapIngredients = () => {

    }

    return (
        <>
        <h1> Drink of the Day</h1>
        <div className="card-ui">
            <div className="media">
                <img src={state.strDrinkThumb} alt={state.strDrink}/>
            </div>
            < div className="card-body">
                <h3> {state.strDrink} </h3>
                <div className="divider"/>
                <p>Ingredients
                    <li>{state.strIngredient1}</li>
                    <li>{state.strIngredient2}</li>
                    <li>{state.strIngredient3}</li>
                    <li>{state.strIngredient4}</li>
                    <li>{state.strIngredient5}</li>
                </p>
                <button className="card-btn" onClick={ () => callAPI() }> 
                >
                </button>
            </div>
        </div>
        </>
    )
}

export default Cocktail;