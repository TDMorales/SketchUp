import React from 'react'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

export default function ProfilePageButton(props){
     let history = useHistory()

    return(    
        
        <Button 
        as='a' inverted={!props.fixed}
        onClick={
          ()=>console.log(props.user.id)
        //   ()=> history.push(`/users/${props.user.id}`)
        }
        >
          Sign In
        </Button>
    )
}