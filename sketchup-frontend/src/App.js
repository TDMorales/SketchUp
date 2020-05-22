import React from 'react';
import  {ImageIndex } from './components/ImageIndex/ImageIndex'
import  {ImageUpload } from './components/ImageUpload/ImageUpload'
import { ImageShow}  from './components/ImageShow/ImageShow'
import { BrowserRouter, Route} from 'react-router-dom'
import { HomePage } from './components/homepage/HomePage'
import './App.css';
import { ProfilePage } from './components/profile/ProfilePage';
import { useUser }from './components/UseUser'
import {FormCaptureValues} from './components/profile/FormCaptureValues';



function App() {

  //export and import where you need it and make sure the function returns user

  let user = useUser()
  //pass as a prop or preform in each component

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={ HomePage } />
        <Route exact path="/login" component={FormCaptureValues} />
        <Route exact path="/users/:id" component={ProfilePage} />
        <Route exact path='/index' component={ImageIndex}/>
        <Route exact path='/show/:id' component={ImageShow}/>
        <Route exact path='/new' component={ImageUpload}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
