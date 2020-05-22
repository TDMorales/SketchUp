import React from 'react';
import  {ImageIndex } from './components/ImageIndex/ImageIndex'
import  {ImageUpload } from './components/ImageUpload/ImageUpload'
import { ImageShow}  from './components/ImageShow/ImageShow'
import { BrowserRouter, Route} from 'react-router-dom'
import { HomePage } from './components/homepage/HomePage'
import './App.css';
import { LoginPage } from './components/profile/LoginPage';
import { ProfilePage } from './components/profile/ProfilePage';
import { useUser }from './components/UseUser'


function App() {
 
  //export and import where you need it and make sure the function returns user

  let user = useUser()
  //pass as a prop or preform in each component
  
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={ HomePage } />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/users/:id" component={ProfilePage} />    
        <Route exact path='/index' component={ImageIndex}/>
        <Route exact path='/show/:id' component={ImageShow}/>
        <Route exact path='/new' component={ImageUpload}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
