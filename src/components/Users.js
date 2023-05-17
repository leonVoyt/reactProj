import React from 'react'
class Users extends React.Component {
  user = [
    {
      id: 1,
      name: 'leon',
      lastName: 'voyt',
      job: 'javascript developer',
      isHappy: true,
    },
    {
      id: 2,
      name: 'Max',
      lastName: 'voyt',
      job: 'python developer',
      isHappy: false,
    },
  ]
  render() {
    if (this.user.length > 0)
      return (
        <div>
          {this.user.map((el) => (
            <div className="user" key={el.id}>
              <h3>
                {el.name} {el.lastName}
              </h3>
              <p>{el.job}</p>
              <b>{el.isHappy ? 'Happy :)' : 'Sad :('}</b>
            </div>
          ))}
        </div>
      )
    else
      return (
        <div className="user">
          <h3>No users</h3>
        </div>
      )
  }
}
export default Users
