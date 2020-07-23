import React, { useState, useEffect, useRef } from 'react';
import './learn.css'

const API_URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?i=pineapple"

const Learn = () => {
    // set initial state for SEARCH and RESULTS
    // create REF for search input
    const [query, setQuery] = useState('')
    const [desc, setDesc] = useState({})
    const focusSearch = useRef(null)
    
    // FOCUS (user's cursor) on search input, run on initial render
    useEffect(() => {focusSearch.current.focus()}, [])

    // FETCH API data using async/await
    // const getDesc = async (query) => {
    //     const results = await fetch(API_URL+`${query}`, {
    //         headers: {'accept' : 'application/json'}
    //     })
    //     const descData = await results.json()
    //     console.log('---- API RESULTS', descData.results)
    //     return descData.results
    // }

    // FETCH with promises
    // const getDesc = (query) => {
    //     fetch(API_URL) //+`${query}`
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log('-----learn results', res.ingredients[0])
    //         setDesc(res.ingredients[0])
    //     })
    // }
    

    useEffect(() => {
        fetch(API_URL) //+`${query}`
        .then(res => res.json())
        .then(res => {
            console.log('-----learn results', res.ingredients[0])
            setDesc(res.ingredients[0])
        })
    }, [setDesc])

    // PREVENTS RERENDER flickering as user types in search
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve,ms))
    }

    // // useEffect - ONLY rerenders when query is changed
    // useEffect(() => {
    //     // prevent a promise from running on each character change in input field
    //     let currentQuery = true
    //     const controller = new AbortController()
    //     // listening for changes to query variable
    //     const loadDesc = async () => {
    //         if (!query) return setDesc({})
    //         // waits 350 milliseconds before passing the search term
    //         // and resolves the promise to fetch data from the API
    //         await sleep(350)
    //         if (currentQuery) {
    //             // once getDesc runs, setDesc(updates with desc)
    //             const desc = await getDesc(query, controller)
    //             setDesc(desc)
    //         }
    //     }
    //     loadDesc()
    //     // cleanup this useEffect hook from previous render before running effects again
    //     // effects run for every render, not just once
    //     return () => {
    //         currentQuery = false
    //         controller.abort()
    //     }
    // }, [query]) // only run this useEffect when query variable changes


    // RENDER COMPONENT 
    return (
        <div className="learn-card">
            <form id="search-form"> 
                <h2> Drinks Dictionary </h2>
                <input type="text" name="search"
                    placeholder="Search for an ingredient, name, etc..."
                    ref={focusSearch}
                    value={query} 
                    onChange={e => setQuery(e.target.value)} />
            </form>

            <div className="learn-body">
                <h2> {desc.strIngredient} </h2>
                {desc.strABV !== null && 
                    <div><strong>ABV:</strong>{desc.strABV}%</div>}
                <h3> Description </h3>                
                <p>{desc.strDescription}</p>
            </div>            
        </div>
    )
}

export default Learn;
