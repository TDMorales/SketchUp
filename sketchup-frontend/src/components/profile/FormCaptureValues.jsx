import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { useState } from 'react'
import { useHistory } from 'react-router'


export function FormCaptureValues (props){
  // console.log("form capture page")
  let history = useHistory()

  const [user, changeUser] = useState({
    username: '',
    password: '',
    errorMessage: ''
})

  //validation

  // state = { username: '', password: '', submittedUsername: '', submittedPassword: '' }

  // handleChange = (e, { name, value }) => this.setState({ [name]: value })




    //Log In Functionality 
    //username -> Bibi    pass -> 123
    //define async func handeLogin pass it defent
    async function handleLoginSubmit(e){
      //prevent page refresh
      e.preventDefault()
      //set variable response to fetch request to users login
      let response = await fetch('http://localhost:3000/login', {
          //user authentication
          credentials: 'include',
          //post this request
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          //post the typed in username and password(what is entered in the form)
          body: JSON.stringify({
              username: e.target.username.value,
              password: e.target.password.value
          })
      })
      //destructure success and id from the repsonse
      let {success, id} = await response.json()
      console.log("im the response object", {success, id})
      // if there is a success, add users/id to the history show page
      if(success){
          history.push(`/users/${id}`)
          console.log("i am logged in as ", user)
      } 
      else {
        changeUser({
          errorMessage: 'Invalid Username or Password'
        })
        console.log("i am an invalid user")
        //render an error message to the front end
      }
  }


  
    // const { username, password, submittedUsername, submittedPassword } = this.state

    return (
      <div>
       {user.errorMessage.length > 0 ?
        <div class="ui error message">
        {/* <i class="close icon"></i> */}
         <div class="header">
         You entered an invalid username or password
        </div>
      </div>
       :
       null}
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
        {/* <strong>onChange:</strong> */}
        {/* <pre>{JSON.stringify({ username, password }, null, 2)}</pre> */}
        {/* <strong>onSubmit:</strong> */}
        {/* <pre>{JSON.stringify({ submittedUsername, submittedPassword }, null, 2)}</pre> */}
      </div>
    )
}


export default FormCaptureValues