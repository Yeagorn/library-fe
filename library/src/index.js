import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import LoginPage from './Login/Login';
import {Library} from './Library/Library';
import Register from './Register/Register';
import Settings from './Settings/Settings';
import reportWebVitals from './reportWebVitals';
import SpecLibrary from './Library/SpecLibrary';
import Logout from "./Logout/Logout"

const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/library' element={<Library/>} />
      <Route path='/settings' element={<Settings/>} />
      <Route path='/library/:bookid' element={<SpecLibrary/>} />
      <Route path='/logout' element={<Logout/>} />
    </Routes>
  </BrowserRouter>,
  rootElement);

reportWebVitals();