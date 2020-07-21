import React, { useState, useEffect } from 'react';
import './drinkindex.css'

const INDEX_URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?f="

const DrinkIndex = () => {
    const [index, setIndex] = useState([]);
    
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    // const allDrinks = []
    // const getAllDrinks = () => abc.forEach(letter => {
    //     fetch(INDEX_URL+`${letter}`)
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log('------ LETTER', letter);
    //         if (res.drinks !== null) allDrinks.push(res.drinks)
    //         console.log('------- setINDEX', allDrinks)
    //         setIndex(allDrinks)
    //     })
    // })

    const getAllDrinks = () => abc.forEach(letter => {
        let APICall = fetch(INDEX_URL+`${letter}`);

        Promise.all([APICall])
        .then(response => Promise.all(response.map(res => res.json())))
        .then(result => {
            if (result[0].drinks !== null) index.push(result[0].drinks)
            setIndex(index)
            console.log('==== setIndex', index)
        })
    })

    useEffect(() => {
        getAllDrinks()
    },[])

    const indexList = (index) => {
        console.log('WHERE IS INDEX??? ----', index)
    }

    // const indexList = () => {
    //     index.map( (subarray) => {
    //         return subarray.map( (item)=> {
    //             return <div>{item.strDrink}</div>
    //         })
    //     })
    // }
    
    // const indexList = (index).map(function(subarray) => 
    //     <a href="" > {item.strDrink} </a>)

    return (
        <div className="drink-index">
            <h3>{abc[0].toUpperCase()}</h3>
            {indexList(index)}
        </div>
    )
    
}

export default DrinkIndex;