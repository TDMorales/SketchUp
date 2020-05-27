import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { useUser } from '../../UseUser'

export default function LoginButton(props){
    let history = useHistory()
    // let [currentUser, setUser] = useUser()
    let currentUser = props.currentUser
   
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
