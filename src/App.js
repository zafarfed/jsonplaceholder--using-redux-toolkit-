import './App.css';
import { Header } from './components/Header/Index';
import Home from './components/Home/Index';
import Posts from './pages/Posts/Posts'
import Users from './pages/Users/Index'
import { Routes, Route } from 'react-router-dom';
import Todos from './pages/Todos/Index';
import Footer from './components/Footer/Index';

function App() {
  return (
    <div>
      <Header/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/todos' element={<Todos/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
