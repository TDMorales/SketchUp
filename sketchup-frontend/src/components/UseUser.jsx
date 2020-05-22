import React, {useState, useEffect} from 'react'

export function useUser() {
    let [user, setUser] = useState({})
  
    //fetch request to users
    useEffect( () => {
    fetch(`http://localhost:3000/get_user`, {
      credentials: 'include'
    })
      .then(resp => resp.json())
      .then( user => {
          setUser(user)
      })
    }, [] )
    return user
  }
