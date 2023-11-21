import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import {addDoc, collection} from 'firebase/firestore'
import { db,auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function CreatePost({isAuth}) {
  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")

const postsCollectionRef = collection(db,"posts")
let navigate=useNavigate()

  const createPost=async ()=>{

    await addDoc(postsCollectionRef,{
      title,
      postText,
      author :{name:auth.currentUser.displayName ,id:auth.currentUser.uid },
    })
    navigate("/")

  }

  useEffect(()=>{

    if(!isAuth) {
      navigate("/login")


    }

  },[])

  return (
    <div  className='createPostPage'>

      <Container>

      {""}
      <div className='cpContainer'>
        <h1> Create A Post</h1>

        <div className='inputGp'>
          <label>Title:</label>
          <input type="text" placeholder='Title...'
            onChange={(event) => { setTitle(event.target.value) }}
          />
        </div>
        <div className='inputGp'>
          <label >Post:</label>
          <textarea placeholder='post...'
            onChange={(event) => { setPostText(event.target.value) }}
          ></textarea>
        </div>
        <Button style={{color:"#330026",fontFamily:"cursive"}} variant='primary' onClick={createPost}><b>Submit Post</b></Button>

      </div>
      </Container>
    </div>
  )
}

export default CreatePost