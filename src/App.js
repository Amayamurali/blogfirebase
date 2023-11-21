import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from "firebase/auth"
import { auth } from "./firebase"



function App() {


  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname="/login"
    })

  }


  return (
<div style={{fontFamily:"cursive"}}>
    <Router >
      <nav>
        <Link style={{ textDecoration: "none", color: "#ffb3ec"}}  to='/'>Home</Link>
        {!isAuth ? (<Link style={{ textDecoration: "none", color: "#ffb3ec" }} to='/login'>Login</Link>) :
         (
          <>
          <Link style={{ textDecoration: "none", color: "#ffb3ec" }} to='/createpost'>Create-post</Link>

         <Button className='p-5' style={{ color:  "#330026",borderRadius:"5px"}}  variant='outline-light'  
          onClick={signUserOut}><b style={{fontFamily:"cursive"}}>Logout</b></Button>
         </>
         )}

      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}></Home>} ></Route>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}></CreatePost>} ></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}></Login>} ></Route>

      </Routes>
    </Router>
    </div>
  );
}

export default App;