function UserStats({ users }) {
  const totalUsers = users.length
  const activeUsers = users.filter(user => user.status === 'active').length
  const inactiveUsers = users.filter(user => user.status === 'inactive').length

  return (
    <div className="row mb-4">
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: '#e3f2fd' 
                  }}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" 
                      stroke="#2196F3" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" 
                      stroke="#2196F3" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="text-muted mb-0">Total Users</h6>
                <h3 className="mb-0">{totalUsers}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: '#e8f5e9' 
                  }}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke="#4CAF50" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="text-muted mb-0">Active Users</h6>
                <h3 className="mb-0">{activeUsers}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: '#ffebee' 
                  }}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M15 9L9 15M9 9L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke="#f44336" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="text-muted mb-0">Inactive Users</h6>
                <h3 className="mb-0">{inactiveUsers}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserStats

