import {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Astros from './components/Astros/Astros';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import './App.css'

// Constante de login
const isLogged = true;

const userData = {
  name: 'Hiram',
  age: '29'
}

const links = [
  {
    "name": 'ASTROS',
    "link": 'astros'
  },
  {
    "name": 'APOD',
    "link": 'apod'
  }
]

// Navbar ------------

// Main --- ruta: /
// Astros --- ruta: /astros
// APOD --- ruta: /apod

function App() {
  
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(isLogged))
  }, [isLogged]);
  
  return (
    <>
      <Navbar
        links={links}
        isLogged={JSON.parse(localStorage.login)}
      />

      <Routes>
        <Route
          path='/'
          element={<Main {...userData} />}
          />
        <Route
          path='/astros'
          element={<Astros />}
        />
      </Routes>
    </>
  )
}

export default App
