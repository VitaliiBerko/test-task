
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserCardList from "./components/userCardList/userCards";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/operations";


function App() {
  const dispatch = useDispatch();  

  useEffect(()=>{dispatch(fetchUsers())}, [dispatch]);
  return (
    <>
  <Routes>
    <Route path="/" element={<UserCardList/>}/>
    <Route path="/home" element={<HomePage/>}/>

  </Routes>
      
    </>
  );
}

export default App;

{
  /* <div>
        <Link></Link>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
