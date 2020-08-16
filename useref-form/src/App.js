import React, {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [button, setButton] = useState(null);

  const onClick = (e) => {
    e.preventDefault();
    setButton(true)
  }

  const showInfo = () => {
    return (
    <ul>
      <li>Name: {name}</li>
      <li>Phone: {phone}</li>
      <li>Email: {email}</li>
    </ul>
    )
  }
  return (
    <>
    <div className="App">
      <h1> Contact List</h1>
      <h3> Enter your Information</h3>
      <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)}
        name="name" 
        placeholder="name"/><br/>
      <input 
        type="text" 
        value={phone} 
        onChange={e => setPhone(e.target.value)}
        name="phone" 
        placeholder="phone"/><br/>
      <input 
        type="text" 
        value={email}
        onChange={e => setEmail(e.target.value)}
        name="email"
        placeholder="email"/><br/>
      <button type="submit" onClick={onClick}>
          Submit
      </button>
    </div>
    <div>
      {button ? showInfo() : null }
    </div>
    </>
  )
}

export default App;
