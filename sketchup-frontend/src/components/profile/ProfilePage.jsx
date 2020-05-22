import React from 'react'

export class ProfilePage extends React.Component{

    state = {
        user: null
    }

    //pass state up to app to display the current user in the nav-bar
    currentUser = () => {
        
    }

    componentDidMount = () => {
        console.log("the user id is", this.props.match.params.id)
        fetch(`http://localhost:3000/users/${this.props.match.params.id}`,{
            // credentials: 'include'
        })
            .then( response => response.json())
            .then( currentUser => 
                this.setState({ 
                    user: currentUser 
                }, () => console.log(currentUser.images)) 
            )
            
        // fetch(`http://localhost:3000/airlines`,{
        //     // credentials: 'include',
        // })
        //     .then( response => response.json())
        //     .then( airlines => this.setState({ airlines: airlines }))
        // }
    }

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