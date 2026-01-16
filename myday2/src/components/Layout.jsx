import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import './Layout.css'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`sidebar bg-dark text-white ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header p-4 border-bottom">
          <h5 className="mb-0">MyApp</h5>
        </div>
        <nav className="sidebar-nav">
          <Link to="/" className="nav-item">
            <i className="bi bi-house-door me-2"></i>
            <span>Dashboard</span>
          </Link>
          <Link to="/about" className="nav-item">
            <i className="bi bi-info-circle me-2"></i>
            <span>About</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content w-100">
        {/* Header */}
        <header className="header bg-white border-bottom shadow-sm">
          <div className="container-fluid px-4 py-3 d-flex justify-content-between align-items-center">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <i className="bi bi-list"></i>
            </button>
            <div className="d-flex align-items-center gap-3">
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Search..."
                style={{ width: '250px' }}
              />
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-circle"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li><a className="dropdown-item" href="#profile">Profile</a></li>
                  <li><a className="dropdown-item" href="#settings">Settings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#logout">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          <div className="container-fluid px-4 py-4">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="footer bg-light border-top mt-auto">
          <div className="container-fluid px-4 py-3">
            <p className="text-muted text-center mb-0">
              &copy; 2026 MyApp. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
