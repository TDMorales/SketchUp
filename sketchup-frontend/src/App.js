import React from 'react';
import { ImageIndex } from './components/ImageIndex/ImageIndex'
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
      <Showcase />
      <BrowserRouter>
        {/* <Route exact path="/" component={Showcase} /> */}
        <Route exact path="/image_index" component={ImageIndex} />
        <Route exact path="/login" component={LoginPage} />
        {/* wrap in ternary depending on logged in */}
        
        <Route exact path="user/:id" component={ProfilePage} />
      
      </BrowserRouter>
      <footer>SketchUp</footer>
    </div>
  );
}

export default App;
