import '../css/Signup.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './Firebase'
import {useNavigate} from 'react-router-dom'
function Signup(){
   const[username,setUsername]=useState('')
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const navigate=useNavigate()
   const SignupUser=()=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    alert('successfully registered')
    navigate('/login')
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    alert('Invalid credentials or user already exist')
    setUsername('')
    setEmail('')
    setPassword('')
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
   }
    return(
        <>
          <div className='sign_container'>
            <img src='/talkon.png' width='150' height='100' style={{borderRadius:'10px'}} />
            <div className='sign_frm'>
            <h1 style={{color:'rgb(241, 117, 0)',fontWeight:'600'}}>Signup</h1>
              
               <div style={{width:'100%'}}>
                 <label id='l1'>Username:</label>
                 <input type='text' 
                 id='uname'
                 value={username}
                 onChange={(event)=>{setUsername(event.target.value)}}/>
               </div>
               
               <div style={{width:'100%'}}>
                 <label id='l2'>Email:</label>
                 <input type='email' 
                 id='mail'
                 value={email}
                 onChange={(event)=>{setEmail(event.target.value)}}
                 />
               </div>
               <div style={{width:'100%'}}>
                 <label id='l3'>Password:</label>
                 <input type='Password' 
                 id='pwd'
                 value={password}
                 onChange={(event)=>{setPassword(event.target.value)}}
                 />
               </div>
               <button id='sign_btn' onClick={SignupUser}>SignUp</button>
               <Link to='/login' style={{textDecoration:'none',color:'gold',fontSize:'18px'}}>Already a registered user ? Login</Link>
            </div>
          </div>
        </>
    )
}
export default Signup
