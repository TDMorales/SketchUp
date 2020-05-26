import React from 'react'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { useUser } from '../../UseUser'

export default function ShowUser(props){
    let history = useHistory()
    let currentUser = useUser()
    // console.log(currentUser)
    
    return(    
      <div>
        {(currentUser.username) ? 
        <Button 
        as='a' inverted={!props.fixed}
        onClick={
           
          
          //redirect to the home page
          ()=> history.push(`/profile`)
        }
        >
          {currentUser.username}
        </Button>
        :
        null}
        </div>
    )
}
