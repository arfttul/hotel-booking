import './App.css'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Image360 from './Components/Image360'
import Login from './Login/Login'
import Register from './Login/Register'
// import ShowSingleRoom from './Components/ShowSingleRoom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='rooms' element={<Rooms />}>
          <Route path=':slug' element={<SingleRoom />}>
            <Route path=':img' element={<Image360 />}></Route>
          </Route>
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
