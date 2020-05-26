import React from 'react'
import { Form } from 'semantic-ui-react'
import { Button,   Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useState } from 'react'
import { useHistory } from 'react-router'

  //log in page
export function FormCaptureValues (props) {

  const history = useHistory()

  const [user, changeUser] = useState({
    username: '',
    password: '',
    errorMessage: ''
  })

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
        history.push(`/profile`)
    }else {
        changeUser({
          errorMessage: 'Invalid Username or Password'
        })
        //render an error message to the front end
      }
  }

  return (
    <div>
      {user.errorMessage.length > 0 ?
        <div class="ui error message">
         <div class="header">
         You entered an invalid username or password
        </div>
      </div>
       :
       null}
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='' /> Log-in to your account
        </Header>
        <Form size='large' onSubmit={handleLoginSubmit}>
          <Segment stacked>

            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              name='username'
              placeholder='Username'
              onChange={(e) => changeUser({...user, username: e.target.value})}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              name='password'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Don't have an Account?   <a href='/signUp'>Sign Up Here</a>
        </Message>
      </Grid.Column>
    </Grid>
   </div>
  )

}
