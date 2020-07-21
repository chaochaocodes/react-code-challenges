import React from 'react';
import './cardui.css'

const CardUI = ({data, getIngredients, callAPI, toggleRecipe}) => {

    const ingredientList = getIngredients(data).map((item, index) =>
        <li key={index.toString()}> {item.charAt(0).toUpperCase() + item.slice(1)}</li>);
    
    return (
        <>
        <h1> Drink of the Day</h1>
        <div className="card-ui">
            <div className="media">
                <img src={data.strDrinkThumb} alt={DataTransfer.strDrink}/>
            </div>
            <div className="card-body">
                <h2> {data.strDrink} </h2>
                <div className="divider"/>
                <p> Ingredients </p>
                {ingredientList}
                <button className="card-btn" onClick={ () => callAPI() }> 
                    {'>'}
                </button>
                <button className="card-btn" 
                    onClick={toggleRecipe}>
                    Recipe 
                </button>
            </div>
        </div>
        </>
    )
}

export default CardUI;



