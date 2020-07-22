import React, { useEffect } from 'react'

const CATEGORY_URL="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="

const Category = () => {
    const[category, setCategory] = useState('')

    // LIST: https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
    // SEARCH: https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
    const options = ['cocktail', 'shake', 'cocoa', 'shot', 'coffee', 'punch', 'beer']

    useEffect(() => {
        fetch(CATEGORY_URL+`{filterCategory}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setCategory(res)});
    })

    return(
        <div>
            {category}
        </div>
    )

};

export default Category;
