import logo from './logo.svg';
import './App.css';
import {useRef} from "react"


function App() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  return (
    <div className="App">
      <input type="text" placeholder='username' ref={usernameRef}></input>
      <input type="password" placeholder='password' ref={passwordRef}></input>
      <button>login</button>
    </div>
  );
}

export default App;
