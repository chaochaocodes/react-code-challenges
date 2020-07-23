import React, { useEffect, useState } from 'react';
import CardUI from './CardUI'
import RecipeCard from './RecipeCard'

const RANDOMIZE='https://www.thecocktaildb.com/api/json/v1/1/random.php'

const Cocktail = () => {
    const [state, setState] = useState([]);
    const [hasFetched, setHasFetched] = useState(false);
    const [recipe, setRecipe] = useState(false);

    const toggleRecipe = () => {
        setRecipe(!recipe);
    }

    useEffect( () => {
        if (hasFetched === false ) callAPI() ;
    }, [setState])

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

    const getMeasurements = (state) => {
        var allMeasurements = []
        for (const [key, value] of Object.entries(state)) {
            if ((key.includes('Measure')) && (value !== null) && (value !== ""))
            allMeasurements.push(value)
        }
        return allMeasurements
    }
    
    return (
        <>
        <CardUI 
            toggleRecipe={toggleRecipe}
            data={state} 
            getIngredients={()=> getIngredients(state)}
            callAPI={callAPI}
        />
        {recipe && <RecipeCard
            data={state}
            getIngredients={()=> getIngredients(state)}
            getMeasurements={()=> getMeasurements(state)}
        />}
        </>
    )
}

export default Cocktail;

// export const Cocktail = {
//     callAPI,
//     getIngredients,
//     getMeasurements
// };