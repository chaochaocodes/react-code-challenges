import React from 'react';
import './recipe.css';

const RecipeCard = ({data, getIngredients, getMeasurements}) => {

    const ingredientList = getIngredients(data).map((item, index) =>
        <li key={index}> {item.charAt(0).toUpperCase() + item.slice(1)}</li>);

    const measurementList = getMeasurements(data).map((item, index) => 
        <li key={index}> {item} </li> );

    return (
        <>
        <div className="recipe-card">
            <div className="recipe-body">
                <h2> Recipe </h2>
                <h3> Ingredients </h3>
                <div className="ingredients-list">
                    <div className="recipe-quantity">
                        {measurementList}
                    </div>
                    <div className="recipe-ingredient">
                        {ingredientList}
                    </div>
                </div>
                <p className="glass"> Glass: {data.strGlass} </p>
                <h3> Directions </h3>
                {data.strInstructions}
            </div>
        </div>
        </>
    )
}

export default RecipeCard;
