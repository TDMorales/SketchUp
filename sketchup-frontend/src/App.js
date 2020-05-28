import React, { useReducer } from 'react';
import  {ImageIndex } from './components/ImageIndex/ImageIndex'
import  ImageUpload  from './components/ImageUpload/ImageUpload'
import { ImageShow}  from './components/ImageShow/ImageShow'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { HomePage } from './components/homepage/HomePage'
import './App.css';
import { ProfilePage } from './components/profile/ProfilePage';
import SignUpPage from './components/profile/SignUpPage'
import SignUp from './components/auth/SignUp'
import { useUser }from './components/UseUser'
import {FormCaptureValues} from './components/profile/FormCaptureValues';
import {CaptureUserAtSignUp} from './components/profile/CaptureUserAtSignUp';
import { NavBar } from './components/homepage/NavBar'
import { SketchPad } from './components/SketchPad/SketchPad'



function App() {

  //export and import where you need it and make sure the function returns user

  let [currentUser, setUser] = useUser()

  //pass as a prop or preform in each component
  
  return (
    
    <div className="App">
      
      <BrowserRouter>
      <NavBar currentUser={currentUser} setUser={setUser}/>
        <Route exact path='/' component={ HomePage } currentUser={currentUser}/>
        <Route exact path="/login" component={() => <FormCaptureValues setUser={setUser}/>} />

        { currentUser ?
        <Route exact path='/profile' component={() => <ProfilePage currentUser={currentUser}/> } /> 
        :
        null
        }
        <Route exact path='/index' component={() => <ImageIndex currentUser={currentUser}/> } />
        {/* <Route exact path="/show/:id" component={ImageShow} /> */}
        <Route exact path='/show/:id' component={() => <ImageShow currentUser={currentUser} /> } />
        <Route exact path='/new' component={() => <ImageUpload currentUser={currentUser} /> } />
        <Route exact path="/signup" component={() => <CaptureUserAtSignUp setUser={setUser} /> } />
        <Route exact path='/create-a-design' component={ SketchPad }/>
      </BrowserRouter>
    </div>
  );
}

export default App;
