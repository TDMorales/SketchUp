import React from 'react';
import { ImageIndex } from './components/ImageIndex/ImageIndex'
import { ImageUpload } from './components/ImageUpload/ImageUpload'
import { ImageShow } from './components/ImageShow/ImageShow'
import { BrowserRouter, Route} from 'react-router-dom'
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
      <header>User Name Login LogOut</header>
        <Showcase />
        <ImageUpload/>
      <BrowserRouter>
        <Route exact path="/login" component={LoginPage} />
        {/* wrap in ternary depending on logged in */}
        <Route exact path="/users/:id" component={ProfilePage} />    
        <Route exact path='/index' component={ImageIndex}/>
        <Route exact path='/show/:id' component={ImageShow}/>
        <Route exact path='/new' component={ImageUpload}/>

      <header>{user.username} Login LogOut</header>
      <BrowserRouter>
      <footer>SketchUp</footer>
    </div>
  );
}

export default App;
