import React, { useState} from 'react';

const Form = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    const [inputTime, setInputTime] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('Coding')

    const updateStats = () => {
        // update total time with input time
        setTime(prev => prev + parseInt(inputTime))
        // increment total entries +1
        setCount(prev => prev + 1)
    }


    return (
        <div>
            <div className="stats">
                <h2> Stats </h2>
                <h3> Total Time Spent: {time} </h3>
                <h3> Total Entries: {count}  </h3> 
            </div>
            
            <div className="form">
                <p><label>Date:</label><br/>
                <input 
                    name="date" 
                    type="date"
                    value={date} 
                    onChange={e => setDate(e.target.value)}/>
                </p>

                <label>Category:</label><br/>
                <p><input 
                    name="Coding" 
                    type="radio"
                    value="option1"
                    checked={category === 'Coding'}
                    onChange={(e) => setCategory(e.target.name)}
                /> Coding </p>
                <p><input 
                    name="Calligraphy" 
                    type="radio"
                    value="option2"
                    checked={category === 'Calligraphy'}
                    onChange={(e) => setCategory(e.target.name)}
                /> Calligraphy </p>
                <p><input 
                    name="Cycling" 
                    type="radio"
                    value="option3"
                    checked={category === 'Cycling'}
                    onChange={(e) => setCategory(e.target.name)}
                /> Cycling </p>
                
                
                <p><label>Time: </label><br/>
                <input 
                    name="time"
                    type="number"
                    min="0"
                    max="5000"
                    value={inputTime}
                    onChange={(e) => {setInputTime(e.target.value)}}
                />
                </p>

                <button onClick={ () => updateStats() } >
                    Submit 
                </button>
            </div>
        </div>
    )
}

export default Form;
