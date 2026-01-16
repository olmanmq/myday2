import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MyApp</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
          </div>
        </div>
      </nav>
      
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div>
              <a href="https://vite.dev" target="_blank" className="me-3">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1 className="mt-4">Vite + React</h1>
            <div className="card mt-4">
              <div className="card-body">
                <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p className="mt-3">
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
            </div>
            <p className="text-muted mt-4">
              Click on the Vite and React logos to learn more
            </p>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  )
}

export default App
