export default function About() {
  return (
    <div>
      <h1 className="h3 mb-4">About Us</h1>
      
      <div className="row">
        <div className="col-lg-8">
          <div className="card dashboard-card mb-4">
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                We are dedicated to providing excellent service and innovative solutions to our customers.
                Our team is committed to delivering high-quality products that make a difference.
              </p>
            </div>
          </div>

          <div className="card dashboard-card mb-4">
            <div className="card-body">
              <h5 className="card-title">Our Values</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Innovation:</strong> Constantly pushing boundaries and embracing new technologies
                </li>
                <li className="list-group-item">
                  <strong>Quality:</strong> Delivering excellence in every aspect of our work
                </li>
                <li className="list-group-item">
                  <strong>Integrity:</strong> Conducting business with honesty and transparency
                </li>
                <li className="list-group-item">
                  <strong>Collaboration:</strong> Working together to achieve common goals
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card dashboard-card">
            <div className="card-header bg-white border-bottom">
              <h5 className="mb-0">Company Stats</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <p className="text-muted mb-1">Founded</p>
                <h6>2020</h6>
              </div>
              <hr />
              <div className="mb-3">
                <p className="text-muted mb-1">Team Members</p>
                <h6>50+</h6>
              </div>
              <hr />
              <div>
                <p className="text-muted mb-1">Clients</p>
                <h6>200+</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
