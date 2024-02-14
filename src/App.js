import './App.css';
import Nav from './Components/Nav';
import {Routes,Route } from 'react-router-dom';
import Banners from './Components/Banners';
import BlogData from './Components/BlogData';
import Form from './Components/Form';
import EditPost from './Components/EditPost';





function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Banners/>}/>
        <Route path='/readmore/:id/' element={<BlogData/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/Editpost/:id/' element={<EditPost/>}/>
      </Routes>
      
    </>
  );
}

export default App;
