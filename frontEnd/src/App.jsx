import React from "react";
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import DeleteBook from "./pages/deleteBook";
import CreateBook from "./pages/createBook";
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import NevBar from "./componets/NevBar";



const App = () =>{
  return(

        <Routes>
        <Route path='/' element={<NevBar/>}>
        <Route index element={<Home/>}/>
        <Route path='/books/create' element={<CreateBook/>}/>
        <Route path='/books/details/:id' element={<ShowBook/>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
        </Route>
        </Routes>
    
  )
}
export default App;