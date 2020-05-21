import React from 'react';
import { Showcase } from './components/homepage/Showcase'
import { ImageIndex } from './components/ImageIndex/ImageIndex'

function App () {
  return (
    <div className="App">
      <header>User Name Login LogOut</header>
        <Showcase />
        <ImageIndex/>
      <footer>SketchUp</footer>
    </div>
  );
}

export default App;
