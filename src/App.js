import React from 'react'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'
import axios from 'axios'
const baseUrl = 'https://reqres.in/api/users?page=1'
class App extends React.Component {
  constructor(props) {
    super(props)
    axios.get(baseUrl).then((response) => {
      this.setState({ users: response.data.data })
    })
    this.state = {
      users: [],
    }
    this.AddUserToForm = this.AddUserToForm.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }

  render() {
    return (
      <div className="name">
        <Header title="User list" />
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
