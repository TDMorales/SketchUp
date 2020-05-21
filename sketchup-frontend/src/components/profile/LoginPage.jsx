import React, { useState } from 'react'
import { useHistory, useParams} from 'react-router'


export function LoginPage(props){

    let history = useHistory()

    const [user, changeUser] = useState({
        username: '',
        password: ''
    })

    //Log In Functionality 
    //username -> Nikia    pass -> 123
    async function handleLoginSubmit(e){
        e.preventDefault()
        let response = await fetch('http://localhost:3000/login', {
            // credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })
        })
        let { success, id } = await response.json()
        if(success){
            history.push(`/users/${id}`)
            console.log("i am logged in as ", user)
        }
    }

        return (
        <div>
            <h1>LoginPage</h1>
            <form onSubmit={handleLoginSubmit}>
                <label>UserName:</label>
                    <input name="username" 
                    onChange={ e => changeUser({ ...user, username: e.target.value })}
                    ></input>
                <br/>
                <label>Password:</label>
                    <input name="password" 
                    type="password"
                    onChange={ e => changeUser({ ...user, password: e.target.value })}></input>
                    <button type="submit">Login</button>
            </form>
        </div>
        )
}

