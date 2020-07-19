import React, { useEffect, useState } from 'react';
import './recipe.css'

const RANDOMIZE='https://www.thecocktaildb.com/api/json/v1/1/random.php'

const Cocktail = () => {
    const [state, setState] = useState([]);
    const [hasFetched, setHasFetched] = useState(false);

    useEffect( () => {
        if (hasFetched === false ) callAPI() ;
    })

    const callAPI = () => {
        fetch(RANDOMIZE)
        .then(res => res.json())
        .then(res => {
            console.log(res.drinks[0]);
            setState(res.drinks[0]);
            setHasFetched(true);
        })
    }

    // regex for 'Ingredient' => object of ingredients
    // "map" through objects !== null
    // return values! (existing ingredients!)
    const getIngredients = (state) => { 
        // console.log('inside ingredients', state)
        var allIngredients = []
        for (const [key, value] of Object.entries(state)) {
        //   console.log(`${key}: ${value}`);
          if ((key.includes('Ingredient')) && (value !== null) && (value !== "")) 
            allIngredients.push(value)
        }
        return allIngredients
    }

    const ingredientList = getIngredients(state).map((item, keyNum) =>
        <li key={keyNum.toString()}> {item}</li>);

    const getMeasurements = (state) => {
        var allMeasurements = []
        for (const [key, value] of Object.entries(state)) {
            if ((key.includes('Measure')) && (value !== null) && (value !== ""))
            allMeasurements.push(value)
        }
        return allMeasurements
    }

    const measurementList = getMeasurements(state).map((item, keyNum) => 
        <li key={keyNum.toString()}> {item} </li> );

    const keyNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    
    return (
        <div>
        <h1> Drink of the Day</h1>
        <div className="card-ui">
            <div className="media">
                <img src={state.strDrinkThumb} alt={state.strDrink}/>
            </div>
            <div className="card-body">
                <h2> {state.strDrink} </h2>
                <div className="divider"/>
                <p> Ingredients </p>
                {ingredientList}
                <button className="card-btn" onClick={ () => callAPI() }> 
                >
                </button>
                <button className="card-btn"> Show Recipe </button>
            </div>
        </div>

        {/* RECIPE CARD -------------------------------------- */}
        <div className="recipe-card">
            <div className="recipe-body">
                <h2> Recipe</h2>
                <h3>Ingredients</h3>
                <div className="ingredients-list">
                    <div className="recipe-quantity">
                        {measurementList}
                    </div>
                    <div className="recipe-ingredient">
                        {ingredientList}
                    </div>
                </div>
                <h3>Directions</h3>
                {state.strInstructions}
            </div>
        </div>
    </div>
    )
}

export default Cocktail;