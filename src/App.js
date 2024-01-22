import './App.css';
import Nav from './Components/Nav';
import {Routes,Route } from 'react-router-dom';
import Banners from './Components/Banners';
import BlogData from './Components/BlogData';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Banners/>}/>
        <Route path='blogdata/:id' element={<BlogData/>}/>
      </Routes>
    </>
  );
}

export default App;
