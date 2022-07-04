import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import Inicio from './pages/Inicio'
import NotFound404 from './pages/NotFound404'
import Post from './pages/Post'


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />}/>
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<Post />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  </BrowserRouter>
);
