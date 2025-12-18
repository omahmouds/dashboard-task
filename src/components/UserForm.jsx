import { useState, useEffect } from 'react'

function UserForm({ onSubmit, editingUser, onUpdate, showModal, onCloseModal, isCreate = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: 'active'
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (showModal) {
      if (editingUser && !isCreate) {
        setFormData({
          name: editingUser.name,
          email: editingUser.email,
          status: editingUser.status
        })
      } else {
        setFormData({
          name: '',
          email: '',
          status: 'active'
        })
      }
      setErrors({})
    }
  }, [editingUser, isCreate, showModal])

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    if (editingUser && !isCreate) {
      onUpdate({ ...editingUser, ...formData })
    } else {
      onSubmit(formData)
      setFormData({
        name: '',
        email: '',
        status: 'active'
      })
    }
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleStatusChange = (status) => {
    setFormData(prev => ({
      ...prev,
      status: status
    }))
  }

  return (
    <>
      {/* Create/Edit Modal */}
      {showModal && (
        <div 
          className="modal show d-block" 
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isCreate ? 'Create User' : 'Edit User'}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="form-name" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="form-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="form-email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="form-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="status"
                          id="status-active"
                          checked={formData.status === 'active'}
                          onChange={() => handleStatusChange('active')}
                        />
                        <label 
                          className="form-check-label d-flex align-items-center" 
                          htmlFor="status-active"
                          style={{ cursor: 'pointer' }}
                        >
                          <span 
                            className="badge bg-success me-2"
                            style={{ 
                              width: '12px', 
                              height: '12px', 
                              borderRadius: '50%',
                              display: 'inline-block'
                            }}
                          ></span>
                          Active
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="status"
                          id="status-inactive"
                          checked={formData.status === 'inactive'}
                          onChange={() => handleStatusChange('inactive')}
                        />
                        <label 
                          className="form-check-label d-flex align-items-center" 
                          htmlFor="status-inactive"
                          style={{ cursor: 'pointer' }}
                        >
                          <span 
                            className="badge bg-danger me-2"
                            style={{ 
                              width: '12px', 
                              height: '12px', 
                              borderRadius: '50%',
                              display: 'inline-block'
                            }}
                          ></span>
                          Inactive
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={onCloseModal}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      {isCreate ? 'Create User' : 'Update User'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UserForm

