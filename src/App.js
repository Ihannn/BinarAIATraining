import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Categories from './components/Categories';

function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path='/Profile' element={<Profile />} /> 
        <Route path='/categories' element={<Categories />} />
      </Routes> 
    </div>
  );
}

export default App;
