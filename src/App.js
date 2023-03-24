import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/slices/userSlice";

function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { username, password } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {username ? <button
        onClick={() => {
          dispatch(
            logout()
          );
        }}
      >
        logout
      </button>:
      <div>
      <input type="text" placeholder="username" ref={usernameRef}></input>
      <input type="password" placeholder="password" ref={passwordRef}></input>
      <button
        onClick={() => {
          dispatch(
            login({
              username: usernameRef.current.value,
              password: passwordRef.current.value,
            })
          );
        }}
      >
        login
      </button>
    </div>
      }
      
      
      <div>Username is {username}</div>
    </div>
  );
}

export default App;

// state: {
//   user:{username:""},
//   counter:{}
// }
