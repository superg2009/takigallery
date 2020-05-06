import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Gallery from './components/Gallery';
import images from './images'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Gallery src ={images}></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
