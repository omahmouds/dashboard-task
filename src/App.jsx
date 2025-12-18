import { useState } from 'react'
import Navbar from './components/Navbar'
import UserForm from './components/UserForm'
import UserTable from './components/UserTable'
import UserStats from './components/UserStats'

const initialUsers = []

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [editingUser, setEditingUser] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const addUser = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData
    }
    setUsers([...users, newUser])
    setShowCreateModal(false)
  }

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ))
    setEditingUser(null)
    setShowEditModal(false)
  }

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId))
    setShowDeleteModal(false)
    setUserToDelete(null)
  }

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    ))
  }

  const handleEditClick = (user) => {
    setEditingUser(user)
    setShowEditModal(true)
  }

  const handleDeleteClick = (user) => {
    setUserToDelete(user)
    setShowDeleteModal(true)
  }

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <UserStats users={users} />
        <UserTable 
          users={filteredUsers}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
          onToggleStatus={toggleUserStatus}
          showDeleteModal={showDeleteModal}
          userToDelete={userToDelete}
          onCloseDeleteModal={() => {
            setShowDeleteModal(false)
            setUserToDelete(null)
          }}
          onConfirmDelete={deleteUser}
          onCreateClick={() => setShowCreateModal(true)}
        />
      </div>

      {/* Create User Modal */}
      {showCreateModal && (
        <UserForm 
          onSubmit={addUser}
          showModal={showCreateModal}
          onCloseModal={() => setShowCreateModal(false)}
          isCreate={true}
        />
      )}

      {/* Edit User Modal */}
      {showEditModal && editingUser && (
        <UserForm 
          editingUser={editingUser}
          onUpdate={updateUser}
          showModal={showEditModal}
          onCloseModal={() => {
            setShowEditModal(false)
            setEditingUser(null)
          }}
          isCreate={false}
        />
      )}
    </div>
  )
}

export default App

