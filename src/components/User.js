import React from 'react'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
class User extends React.Component {
  user = this.props.user
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp className="deleteIcon" />
        <IoHammerSharp className="editIcon" />
        <h3>
          {this.user.name} {this.user.lastName}
        </h3>
        <p>{this.user.job}</p>
        <b>{this.user.isHappy ? 'Happy :)' : 'Sad :('}</b>
      </div>
    )
  }
}
export default User
