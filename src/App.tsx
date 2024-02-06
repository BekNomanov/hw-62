import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css'

const App: React.FC = () => {
  return (
    <>
      <header className='container'>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <NavLink to="/">Домашняя</NavLink>
            <NavLink to="/about">Пилоты</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
          </div>
        </nav>
      </header>
      <main className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;