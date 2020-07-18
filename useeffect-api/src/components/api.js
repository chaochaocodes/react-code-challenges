import React, { useEffect, useState } from 'react';

const RANDOMIZE="https://www.thecocktaildb.com/api/json/v1/1/random.php"

const API = () => {
    const [state, setState] = useState([]);

    useEffect( () => {
        console.log('useEffecting');
        fetch(RANDOMIZE)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            // setState(res)
        })
    })

    return (
        <div>
            {/* {state.strDrink} */}
        </div>
    )
}

export default API;