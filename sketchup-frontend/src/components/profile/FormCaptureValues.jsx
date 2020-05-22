import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import ProfilePageButton from './ProfilePageButton'

class FormCaptureValues extends Component {
  state = { username: '', password: '', submittedUsername: '', submittedPassword: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { username, password } = this.state

    this.setState({ submittedUsername: username, submittedPassword: password })
    this.handleLoginSubmit(this.state)
  }

  //Log In Functionality 
    //username -> Nikia    pass -> 123
    handleLoginSubmit = (e) => {
      console.log("handle submit ran with an event", this.state)
      // e.preventDefault()
      fetch('http://localhost:3000/login', {
          credentials: 'include',
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              username: this.state.username,
              password: this.state.password
          }, console.log(this.state.username))
      })
  }

  render() {
    const { username, password, submittedUsername, submittedPassword } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Username'
              name='username'
              value={username}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
            {/* <Form.Button content='Submit' /> */}
            <ProfilePageButton fix={this.state.fixed}/>
          </Form.Group>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ username, password }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedUsername, submittedPassword }, null, 2)}</pre>
      </div>
    )
  }
}

export default FormCaptureValues