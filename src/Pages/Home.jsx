import { useEffect, useState } from 'react'
import '../css/Home.css'
import {useNavigate} from 'react-router-dom'
function Home(){
    const navigate=useNavigate() 
    const [condition,setCondition]=useState(false)
    useEffect(()=>{
       setTimeout(()=>{
               setCondition(true)
            },1500)
    },[])
    return(
      <>
         <div className='talk_main'>
              {condition && <>
              <div className='logo'>
                  <img src='talkon.png' width='180px' height='100px' style={{borderRadius:'10px'}}/>
                 <h3 id="head">TALKON TO YOUR SPECIAL ONE</h3>
                 <h3 id="quote">Connect without Fear</h3>
                 <button id='talk_btn' onClick={()=>{navigate('/login')}}>Continue</button>
               </div>
         
         </>}
         </div>
      </>
    )
  }
  export default Home