import { useState } from 'react'

export default function CreateUser() {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  })
  const [users, setUsers] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name.trim() && formData.description.trim()) {
      const newUser = {
        id: Date.now(),
        ...formData
      }
      setUsers(prev => [...prev, newUser])
      setFormData({ name: '', description: '' })
    }
  }

  return (
    <div>
      <h1 className="h3 mb-4">Create User</h1>
      
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter user name"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Enter user description"
                    required
                  />
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Create User
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-3">Created Users</h5>
              {users.length === 0 ? (
                <p className="text-muted">No users created yet.</p>
              ) : (
                <div className="list-group">
                  {users.map(user => (
                    <div key={user.id} className="list-group-item">
                      <h6 className="mb-1">{user.name}</h6>
                      <p className="mb-0 text-muted small">{user.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
