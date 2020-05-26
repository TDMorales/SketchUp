import React from 'react'
import { Form } from 'semantic-ui-react'
import { Button,   Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useState } from 'react'
import { useHistory, useParams} from 'react-router'

export function CaptureUserAtSignUp (props) {

  const history = useHistory()

  const [user, changeUser] = useState({
    username: '',
    password: '',
    errorMessage: ''
  })

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
            history.push(`/profile`)
            props.setUser({
              username: user.username,
              password: user.password
            })
        }else{
            console.log("username taken")
            changeUser({
                errorMessage: 'Username Taken'
            })
        }
    })
}

  return (
    <div>
      {user.errorMessage.length > 0 ?
        <div class="ui error message">
          <div class="header">
          Someone else already has this username
        </div>
        </div>
        :
        null}
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='' /> Create A new Account
        </Header>
        <Form size='large' onSubmit={handleLoginSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              name='username'
              placeholder='Enter A Username'
              onChange={(e) => changeUser({...user, username: e.target.value})}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              name='password'
              placeholder='Password'
              type='password'
              onChange={(e) => changeUser({...user, password: e.target.value})}
            />
            {/* comeback to this as a stretch goal */}
            {/* <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              name='password'
              placeholder='Confirm Password'
              type='password'
            /> */}

            <Button color='teal' fluid size='large'>
              Submit
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an Account?   <a href='/login'>Log in Here</a>
        </Message>
      </Grid.Column>
    </Grid>
    </div>
  )
}
