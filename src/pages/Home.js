import React, { useEffect, useState } from 'react'
import { getDocs, collection, deleteDoc,doc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { Trash2 } from 'react-feather'
import { Button, Container } from 'react-bootstrap'



function Home({isAuth}) {



  const [postLists, setPostLists] = useState([])
  const postsCollectionRef = collection(db, "posts")


  const deletePost =async(id)=>{
    const postDoc = doc(db,"posts",id)
      await deleteDoc(postDoc)
  
    }
  

  useEffect(() => {

    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts()

  } ,[deletePost])



  
  return (
    <div  className='homePage container w-50 text-center'>

      <Container>
      {postLists.map((post) => {
        return (
          <div className='post' key={post.id}>
            <div className='postHeader'>
              <div className='title'>
                <h1  style={{color:"#330026"}}>{post.title}</h1>
              </div>
              <div  className='deletePost'>
                {isAuth && post.author && post.author.id === auth.currentUser.uid && (
                  <Button style={{color:"#330026"}} onClick={() => { deletePost(post.id) }} variant='outline-danger' >
                    <Trash2 />
                  </Button>
                )}
              </div>
            </div>
            <div style={{color:"#330026"}} className='PostTextContainer'> {post.postText}</div>
            <h5 style={{color:"#330026"}}>{post.author?.name}</h5>
          </div>
        );
      })}
      
      </Container>
    </div>
  )};



export default Home