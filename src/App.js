import React from 'react'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: 1,
          name: 'leon',
          lastName: 'voyt',
          age: 20,
          job: 'javascript developer',
          isHappy: true,
        },
        {
          id: 2,
          name: 'Max',
          lastName: 'voyt',
          age: 44,
          job: 'python developer',
          isHappy: false,
        },
      ],
    }
    this.AddUserToForm = this.AddUserToForm.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }

  render() {
    return (
      <div className="name">
        <Header title="список пользователей" />
        <div className="mainUsers">
          <Users
            users={this.state.users}
            onDelete={this.deleteUser}
            onEdit={this.editUser}
          />
        </div>
        <aside>
          <AddUser onAdd={this.AddUserToForm} />
        </aside>
      </div>
    )
  }

  AddUserToForm(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, { id, ...user }] })
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user
    this.setState({ users: [] }, () => {
      this.setState({ users: [...allUsers] })
    })
  }
}
export default App
