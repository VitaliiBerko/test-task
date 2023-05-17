import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  
  const startFollowers = `${100500+count}`.split("")
  startFollowers.splice(-3, 0, ",")

  const numberFollowers = (startFollowers.join(""))
  

  return (
    <>
      {<h2>{numberFollowers} FOLLOWERS</h2>}
      <button onClick={() => setCount((count) => count + 1)}>
          FOLLOW
        </button>
    </>
  )
}

export default App


{/* <div>
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
      </p> */}
