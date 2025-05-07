import '../css/Login.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './Firebase'
import {useNavigate} from 'react-router-dom'
function Login(){
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
  const loginUser=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    alert('Logged in successfully')
     navigate('/chat')
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    alert('user does not exist or bad credentials')
    setEmail('')
    setPassword('')
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
    return(
        <>
           <div className='lgn_container'>
             <img src="/talkon.png" width='150px' height='100px' style={{borderRadius:'10px'}}/>
             <div className="lgn_frm">
              <h1 style={{color:'rgb(241, 117, 0)',fontWeight:'600'}}>Login</h1>
                <div style={{width:'100%'}}>
                <label  id='lbl'>Email:</label>
                <input type='email' 
                id='mail'
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}}
                />
                </div>
                <div style={{width:'100%'}}>
                <label id='lbl'>Password:</label>
                <input type='password ' 
                id='pwd'
                value={password}
                onChange={(event)=>{setPassword(event.target.value)}}
                />
                </div>
                <button id='lgn_btn' onClick={loginUser}>Login</button>
                <Link to='/register' style={{textDecoration:'none',color:'gold',fontSize:'18px'}}>Not a registered user ? Signup</Link>
             </div>
           </div>
        </>
    )
}
export default Login