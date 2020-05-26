import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { useState } from 'react'
import { useHistory } from 'react-router'

export function SignUpPage (props){

    // console.log("sign up page") 

  let history = useHistory()

  const [user, changeUser] = useState({
    username: '',
    password: '',
    errorMessage: ''
})

    //write a fetch that gets all the users
    //if the username doesnt match, 

    //Log In Functionality 
    //username -> Bibi    pass -> 123
    function handleLoginSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/signUp', {
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
        .then(resp => resp.json())
        .then( newUser => {
            console.log(newUser)
            let {success, id } = newUser
            if(success){
                history.push(`/users/${id}`)
            }else{
                console.log("username taken")
                changeUser({
                    errorMessage: 'Username Taken'
                })
            }
        })
    }
  
  
    
      // const { username, password, submittedUsername, submittedPassword } = this.state
  
      return (
        <div>
           {user.errorMessage.length > 0 ?
        <div class="ui error message">
        {/* <i class="close icon"></i> */}
         <div class="header">
         Someone else already has this username
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
          {/* <strong>onCha[nge:</strong> */}
          {/* <pre>{JSON.stringify({ username, password }, null, 2)}</pre> */}
          {/* <strong>onSubmit:</strong> */}
          {/* <pre>{JSON.stringify({ submittedUsername, submittedPassword }, null, 2)}</pre> */}
        </div>
      )
  }
  
  
  export default SignUpPage