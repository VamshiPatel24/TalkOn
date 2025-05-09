import {useState,useEffect} from 'react'
import '../css/Chat.css'
import {db,auth} from './Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {collection,addDoc, onSnapshot, query,orderBy, serverTimestamp} from 'firebase/firestore'
function Chat(){
  const[user]=useAuthState(auth)
  const[users,setUsers]=useState([])
  const[messages,setMessages]=useState([])
  const[newMessage,setNewMessage]=useState('')
  useEffect(()=>{
     const fetchUsers=async ()=>{
     const userCollection=collection(db,'users')
     const userSnapshot=await onSnapshot(userCollection,(snapshot)=>{
      const userList=snapshot.docs.map(doc=>doc.data())
      setUsers(userList )
     })
     };
     fetchUsers();
  },[])
  const handleSendMessage=async (e)=>{
     e.preventDefault();
     if(newMessage.trim()==='') return;
     const messageRef=collection(db,'chats','room1','messages')
     await addDoc(messageRef,{
      sender:user.uid,
      message:newMessage.trim(),
      timestamp:serverTimestamp()
     });
     setNewMessage('')
  }
  useEffect(()=>{
    const msgRef=collection(db,'chats','room1','messages');
    const q=query(msgRef,orderBy('timestamp'))

    const unSubscribe=onSnapshot(q,(snapshot)=>{
      const msgs=snapshot.docs.map((doc)=>doc.data());
      setMessages(msgs)
    })
    return()=> unSubscribe()
  },[])
   return(
    <>
      <div className='chat_container'>
      <h1 style={{fontSize:'36 px',color:'blue',letterSpacing:'1px'}}>Your Chat Room</h1>
        <div className='chats'>
            {messages.length===0?(<p>No message available</p>):(
              messages.map((msg,index)=>{
                  const sender = users.find((u)=>u.uid.trim()===msg.sender.trim());
                const senderName=sender?sender.name:'Unknown'
                return(
                  <div key={index} style={{textAlign:user.uid===msg.sender?'right':'left',width:'100%',paddingLeft:user.uid===msg.sender?'45%':'2px',paddingRight:user.uid===msg.sender?'2px':'45%' }} >
                      <strong>{senderName} : </strong>
                      {msg.message}
                   </div>
                )
              })
            )}
        </div>

        <form onSubmit={handleSendMessage} style={{display:"flex", columnGap:"5px", flexWrap:"wrap"}}>
             <input 
             id='usr-inp'
             style={{fontSize:'20px',borderRadius:'8px',paddingLeft:'5px'}}
             placeholder="Enter Your Message"
             value={newMessage}
             onChange={(event)=>{setNewMessage(event.target.value)}}
             />
             <button type="submit" style={{color:'white',background:'blue',fontSize:'22px',padding:'8px',borderRadius:'6px',border:'none',outline:'none',cursor:'pointer'}}>Send</button>
        </form>
      </div>
    </>
   )
}
export default Chat