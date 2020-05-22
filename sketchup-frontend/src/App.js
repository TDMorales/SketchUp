import React from 'react';
import { Showcase } from './components/homepage/Showcase'
import './App.css';
import { LoginPage } from './components/profile/LoginPage';
import { BrowserRouter, Route} from 'react-router-dom'
import { ProfilePage } from './components/profile/ProfilePage';
import { useUser} from './components/UseUser'

function App() {
 
  //export and import where you need it and make sure the function returns user

  let user = useUser()
  //pass as a prop or preform in each component
  
  return (
    <div className="App">
      <header>{user.username} Login LogOut</header>
      <BrowserRouter>

        <Route exact path="/login" component={LoginPage} />
        {/* wrap in ternary depending on logged in */}
        <Route exact path="/users/:id" component={ProfilePage} />
      </BrowserRouter>
      <footer>SketchUp</footer>
    </div>
  );
}

export default App;
