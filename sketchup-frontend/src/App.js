import React from 'react';
import { Showcase } from './components/homepage/Showcase'
import './App.css';
import { LoginPage } from './components/profile/LoginPage';
import { BrowserRouter, Route} from 'react-router-dom'
import { ProfilePage } from './components/profile/ProfilePage';


function App() {

  //call here 
  return (
    <div className="App">
      <header>User Name Login LogOut</header>
      <BrowserRouter>

        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/users/:id" component={ProfilePage} />
      </BrowserRouter>
      <footer>SketchUp</footer>
    </div>
  );
}

export default App;
