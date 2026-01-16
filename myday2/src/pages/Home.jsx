export default function Home() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">Dashboard</h1>
      </div>

      {/* Stats Row */}
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="stat-card primary">
            <h6>Total Users</h6>
            <h4>1,234</h4>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="stat-card success">
            <h6>Revenue</h6>
            <h4>$12,456</h4>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="stat-card warning">
            <h6>Orders</h6>
            <h4>567</h4>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="stat-card info">
            <h6>Growth</h6>
            <h4>+23%</h4>
          </div>
        </div>
      </div>

      {/* Content Row */}
      <div className="row">
        <div className="col-lg-8">
          <div className="card dashboard-card">
            <div className="card-header bg-white border-bottom">
              <h5 className="mb-0">Recent Activity</h5>
            </div>
            <div className="card-body">
              <p className="text-muted">Welcome to your dashboard! Start by exploring your analytics and metrics.</p>
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">New user registered</h6>
                    <small>Just now</small>
                  </div>
                  <p className="mb-1">John Doe joined the platform</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Order completed</h6>
                    <small>2 hours ago</small>
                  </div>
                  <p className="mb-1">Order #12345 has been shipped</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">System update</h6>
                    <small>5 hours ago</small>
                  </div>
                  <p className="mb-1">Database optimization completed</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card dashboard-card">
            <div className="card-header bg-white border-bottom">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <button className="btn btn-primary w-100 mb-2">
                <i className="bi bi-plus-circle me-2"></i>New Project
              </button>
              <button className="btn btn-outline-primary w-100 mb-2">
                <i className="bi bi-download me-2"></i>Export Data
              </button>
              <button className="btn btn-outline-primary w-100">
                <i className="bi bi-gear me-2"></i>Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
