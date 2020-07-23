import React from 'react';
import './menu.css'

const Menu = ({toggleIndexButton, toggleLearnButton}) => {

    return(
        <div className="menu-btn">
            <button onClick={toggleIndexButton}> INDEX </button>
            <button > CATEGORY </button>
            <button > SEARCH </button>
            <button onClick={toggleLearnButton}> LEARN </button>
        </div>
    )
}

export default Menu;