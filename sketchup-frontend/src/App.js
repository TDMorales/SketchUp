import React from 'react';
import { Showcase } from './components/homepage/Showcase'
import { ImageIndex } from './components/ImageIndex/ImageIndex'
import { ImageUpload } from './components/ImageUpload/ImageUpload'
import { ImageShow } from './components/ImageShow/ImageShow'
import { BrowserRouter, Route} from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <header>User Name Login LogOut</header>
        <Showcase />
        <ImageUpload/>
      <BrowserRouter>
        <Route exact path='/index' component={ImageIndex}/>
        <Route exact path='/show/:id' component={ImageShow}/>
        <Route exact path='/new' component={ImageUpload}/>

      </BrowserRouter>
      <footer>SketchUp</footer>
    </div>
  );
}

export default App;
