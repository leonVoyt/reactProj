import React from 'react'
class AddUser extends React.Component {
  userAdd = {}
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastName: '',
      job: '',
      age: 1,
      isHappy: false,
    }
  }
  render() {
    return (
      <form action="" ref={(el) => (this.addForm = el)}>
        <input
          type="text"
          placeholder="name"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <input
          type="text"
          placeholder="LastName"
          onChange={(event) => this.setState({ lastName: event.target.value })}
        />
        <input
          type="text"
          placeholder="Job"
          onChange={(event) => this.setState({ job: event.target.value })}
        />
        <input
          type="text"
          placeholder="age"
          onChange={(event) => this.setState({ age: event.target.value })}
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
              name: this.state.name,
              lastName: this.state.lastName,
              job: this.state.job,
              age: this.state.age,
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
