import React from 'react'
import AddUser from './AddUser'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false,
    }
  }
  user = this.props.user
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp
          className="deleteIcon"
          onClick={() => this.props.onDelete(this.user.id)}
        />
        <IoHammerSharp
          onClick={() => this.setState({ editForm: !this.state.editForm })}
          className="editIcon"
        />
        <h3>
          {this.user.first_name} {this.user.last_name}
        </h3>
        <img src={this.user.avatar} alt="" />
        <p>{this.user.email}</p>
        <b>{this.user.isHappy ? 'Happy :)' : 'Sad :('}</b>
        {this.state.editForm && (
          <AddUser onAdd={this.props.onEdit} user={this.user} />
        )}
      </div>
    )
  }
}
export default User
