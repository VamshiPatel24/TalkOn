import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Chat from './Pages/Chat'
import Protected from './Pages/Protected'
function App(){

  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Signup/>}></Route>
            <Route path='/chat' element={<Protected Component={Chat}/>}></Route>
          </Routes>
        </BrowserRouter> 
    </>
  )
}
export default App