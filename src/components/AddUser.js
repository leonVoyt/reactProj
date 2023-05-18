import React from 'react'
class AddUser extends React.Component {
  userAdd = {}
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      enail: '',
      avatar: '',
      isHappy: false,
    }
  }
  render() {
    return (
      <form action="" ref={(el) => (this.addForm = el)}>
        <input
          type="text"
          placeholder="name"
          onChange={(event) =>
            this.setState({ first_name: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="LastName"
          onChange={(event) => this.setState({ last_name: event.target.value })}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(event) => this.setState({ email: event.target.value })}
        />
        <input
          type="text"
          placeholder="avatar"
          onChange={(event) => this.setState({ avatar: event.target.value })}
        />
        <label htmlFor="isHappy">Happy?</label>
        <input
          type="checkbox"
          id="isHappy"
          placeholder="name"
          onChange={(event) => this.setState({ isHappy: event.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            this.addForm.reset()
            this.userAdd = {
              first_name: this.state.first_name,
              last_Name: this.state.last_Name,
              email: this.state.email,
              avatar: this.state.avatar,
              isHappy: this.state.isHappy,
            }
            if (this.props.user) this.userAdd.id = this.props.user.id
            this.props.onAdd(this.userAdd)
          }}
        >
          add
        </button>
      </form>
    )
  }
}
export default AddUser
