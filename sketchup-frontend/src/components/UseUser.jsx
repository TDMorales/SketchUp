import React, {useState, useEffect} from 'react'
// ! * * * ! //
//--figure out how to use this function
//--and its return variable in other places
//--without have to redo the fetch request


export function useUser() {
  //define user variable and a setUser set state function
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
