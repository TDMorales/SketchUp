import React from 'react'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

export default function SignUp (props){
     let history = useHistory()

    return(

        <Button
        as='a' inverted={!props.fixed}
        onClick={
          ()=> history.push('/signUp')
        }
        >
          Sign Up
        </Button>
    )
}
