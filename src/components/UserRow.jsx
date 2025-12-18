function UserRow({ user, onEdit, onDelete, onToggleStatus }) {
  const getStatusBadge = (status) => {
    return status === 'active' 
      ? <span className="badge bg-success">Active</span>
      : <span className="badge bg-danger">Inactive</span>
  }

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{getStatusBadge(user.status)}</td>
      <td>
        <div className="btn-group" role="group">
          <button
            className="btn btn-sm btn-outline-primary bg-primary text-white m-1 p-2 rounded-2 hover:bg-primary-dark"
            onClick={() => onEdit(user)}
            title="Edit"
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-outline-warning bg-warning text-white m-1 p-2 rounded-2 hover:bg-warning-dark"
            onClick={() => onToggleStatus(user.id)}
            title="Toggle Status"
          >
            {user.status === 'active' ? 'Deactivate' : 'Activate'}
          </button>
          <button
            className="btn btn-sm btn-outline-danger bg-danger text-white m-1 p-2 rounded-2 hover:bg-danger-dark"
            onClick={() => onDelete(user)}
            title="Delete"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}

export default UserRow

