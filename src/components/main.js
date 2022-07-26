import React from 'react';
import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';
import '../services/style.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Details from './details.js';
import Search from './search.js';

export default function Main()
{
  return(
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/search/:title" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}
