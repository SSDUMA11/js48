import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Main from './components/Main';
import Posts from './components/Posts';
import Login from './components/Login';
import SinglePosts from './components/SinglePosts';

function App() {
  return (
    <div className="wrapper">
         <BrowserRouter>
         <div className="wrapper">
            <nav className="menu">
              <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/">Main</NavLink>
              <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/posts">Posts</NavLink>
              <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/login">Login</NavLink>
            </nav>

            <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/login' element={<Login />} />
            <Route path='/posts/:id' element={<SinglePosts />}/>
            <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>

          </div>
        </BrowserRouter>


    </div>
  );
}

export default App;
