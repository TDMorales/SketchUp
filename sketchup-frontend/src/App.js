import React, { useReducer } from 'react';
import  {ImageIndex } from './components/ImageIndex/ImageIndex'
import  ImageUpload  from './components/ImageUpload/ImageUpload'
import { ImageShow}  from './components/ImageShow/ImageShow'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage'
import './App.css';
import { ProfilePage } from './components/profile/ProfilePage';
import SignUpPage from './components/profile/SignUpPage'
import SignUp from './components/auth/SignUp'
import { useUser }from './components/UseUser'
import {FormCaptureValues} from './components/profile/FormCaptureValues';
import {CaptureUserAtSignUp} from './components/profile/CaptureUserAtSignUp';



function App() {

  //export and import where you need it and make sure the function returns user

  let currentUser = useUser()
  console.log(currentUser)
  //pass as a prop or preform in each component

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={ HomePage } />
        <Route exact path="/login" component={FormCaptureValues} />
        { currentUser ?
        <Route exact path='/profile' component={ProfilePage} /> 
        :
        null
        }
        <Route exact path='/index' component={ImageIndex}/>
        <Route exact path='/show/:id' component={ImageShow}/>
        <Route exact path='/new' component={ImageUpload}/>
        <Route exact path="/signup" component={CaptureUserAtSignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
