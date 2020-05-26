import React from 'react'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { useUser } from '../../UseUser'

export default function SignUp (props){
     let history = useHistory()
     let currentUser = useUser()

    return(
      <div>
      {(!currentUser.username) ? 
        <Button
        as='a' inverted={!props.fixed}
        onClick={

          ()=> history.push('/signup')

        }
        >
          Sign Up
        </Button>
        : 
        null }
      </div>
    )
}
