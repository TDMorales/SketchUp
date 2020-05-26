import React from 'react'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { useUser } from '../../UseUser'

export default function LoginButton(props){
    let history = useHistory()
    let currentUser = useUser()

    return(    
      <div>
      {(!currentUser.username) ? 
        <Button 
        as='a' inverted={!props.fixed}
        onClick={
          ()=> history.push('/login')
        }
        >
          Log in
        </Button>
        : 
        null}
      </div>
    )
}
