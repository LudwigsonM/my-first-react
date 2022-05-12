import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount]= useState(0)
  const [firstName, setFirstName] =  useState("*")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginLogout = () => setIsLoggedIn(!isLoggedIn)
  return (
    <div className="App">
      <header className="App-header">
      <h1>You clicked the button {count} times!.</h1>
      <button onClick={()=>setCount(count + 1)}>+</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>setCount(Math.max(count - 1,0))}>-</button>
      <button onClick={()=>setCount(count ? count - 1: 0)}>-</button>
      
      <h2 onClick={loginLogout}>
        {isLoggedIn ?'Hello Guest': 'Have a Great Day !'}
      </h2>
      <button onClick={loginLogout}>{isLoggedIn ?'Logout': 'Login'}</button>
      
      <section>
        <h2 onClick={()=>setFirstName(firstName +'*')}>Hello {firstName}. </h2>
      </section>
      </header>
    </div>
  );
}

export default App;
