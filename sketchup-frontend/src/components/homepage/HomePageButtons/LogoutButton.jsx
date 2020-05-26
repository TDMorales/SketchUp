import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { useUser } from '../../UseUser'

export default function LogOutButton(props){
     let history = useHistory()
     let currentUser = props.currentUser  

     //post request to the backend to the logout function
     //this resets the session of the user to null 
     function logItOut(){
        history.push('/login')
        
        fetch(`http://localhost:3000/logout`, {
          credentials: 'include',
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
          })
          .then(resp => resp.json())
          .then( response => {
              // console.log("this is my post request response", response)
              props.setUser({
                username: undefined,
                password: undefined
              })
          })
        }
    
    return(    
        <div>
        {(currentUser.username) ? 
        <Button 
        as='a' inverted={!props.fixed}
        onClick={
            // ()=> logItOut(),
          ()=> logItOut()
          //redirect to the home page
          
        }
        >
          Log Out
        </Button>
        :
        null
        }
        </div>
    )
}
