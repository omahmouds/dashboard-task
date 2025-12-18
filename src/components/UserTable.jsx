import UserRow from './UserRow'

function UserTable({ 
  users, 
  searchTerm,
  onSearchChange,
  onEdit, 
  onDelete, 
  onToggleStatus,
  showDeleteModal,
  userToDelete,
  onCloseDeleteModal,
  onConfirmDelete,
  onCreateClick
}) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <h5 className="mb-0">User List</h5>
            <div className="d-flex gap-2 flex-grow-1" style={{ maxWidth: '500px' }}>
              <div className="input-group flex-grow-1">
                <span className="input-group-text">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
              <button 
                className="btn btn-primary p-1 w-100 rounded-2 hover:bg-primary-dark"
                onClick={onCreateClick}
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="me-1"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Create User
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          {users.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">
                {searchTerm ? 'No users found matching your search.' : 'No users found. Create your first user to get started!'}
              </p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <UserRow
                      key={user.id}
                      user={user}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      onToggleStatus={onToggleStatus}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && userToDelete && (
        <div 
          className="modal show d-block" 
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onCloseDeleteModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Are you sure you want to delete user <strong>{userToDelete.name}</strong>?
                  This action cannot be undone.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onCloseDeleteModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onConfirmDelete(userToDelete.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UserTable

