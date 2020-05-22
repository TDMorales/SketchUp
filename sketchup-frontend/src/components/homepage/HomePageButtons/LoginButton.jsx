import React from 'react'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

export default function LoginButton(props){
     let history = useHistory()

    return(    
        
        <Button 
        as='a' inverted={!props.fixed}
        onClick={
          // ()=>console.log(history)
          ()=> history.push('/login')
        }
        >
          Log in
        </Button>
    )
}
