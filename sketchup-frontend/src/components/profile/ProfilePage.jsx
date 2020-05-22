import React from 'react'

export class ProfilePage extends React.Component{


    render() {
        if(this.state.user == null){
            return <h1>Not Signed in</h1>
        }
        return (
            <div>
                <h1>Logged in As:</h1>
                <h1>{this.state.user.username}</h1>
                <h2>Image Gallery:</h2>
           
                {this.state.user.images.map( image => 
                <img src={image.image}/>
                )}
            </div>
        )
    }
}