import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { useState } from 'react'
import { useHistory, useParams} from 'react-router'

export function FormCaptureValues (props){

  let history = useHistory()

  const [user, changeUser] = useState({
    username: '',
    password: ''
})

  //validation

  // state = { username: '', password: '', submittedUsername: '', submittedPassword: '' }

  // handleChange = (e, { name, value }) => this.setState({ [name]: value })



    //Log In Functionality 
    //username -> Bibi    pass -> 123
    async function handleLoginSubmit(e){
      e.preventDefault()
      let response = await fetch('http://localhost:3000/login', {
          credentials: 'include',
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              username: e.target.username.value,
              password: e.target.password.value
          })
      })
      let { success, id } = await response.json()
      if(success){
          history.push(`/users/${id}`)
          console.log("i am logged in as ", user)
      }
  }


  
    // const { username, password, submittedUsername, submittedPassword } = this.state

    return (
      <div>
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Username'
              name='username'
              // value={username}
              onChange={(e) => changeUser({...user, username: e.target.value})}
            />
            <Form.Input
              placeholder='Password'
              name='password'
              // value={password}
              onChange={(e) => changeUser({...user, password: e.target.value})}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
        <strong>onChange:</strong>
        {/* <pre>{JSON.stringify({ username, password }, null, 2)}</pre> */}
        <strong>onSubmit:</strong>
        {/* <pre>{JSON.stringify({ submittedUsername, submittedPassword }, null, 2)}</pre> */}
      </div>
    )
}


export default FormCaptureValues