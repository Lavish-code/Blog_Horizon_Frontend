// import React,{useContext,useEffect, useState} from 'react'
// import { useNavigate ,Link,useLocation} from 'react-router-dom';
// import { UserContext } from '../context/userContext';
// import axios from 'axios'
// import Loader from '../components/Loader';

// const DeletePost = ({postId:id}) => {
//   const navigate=useNavigate();
//   const location =useLocation()
//   const [isLoading,setIsLoading]=useState(false);

//   const{currentUser} =useContext(UserContext)
//   const token=currentUser?.token;

//   //redirect  to login page for any user who is isn't logged in

//   useEffect(()=>{
//     if(!token){
//       navigate('/login')
//     }
//   },[])

//   const removePost=async()=>{
//     setIsLoading(true)
//     try {
//       const response=await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`,{withCredentials:true,headers:{Authorization: `Bearer ${token}`}})
//       if(response.status= 200){
//         if(location.pathname==`/myposts/${currentUser.id}`){
//           navigate(0)
//         }else{
//           navigate('/')
//         }
//       }
//       setIsLoading(false)
//     } catch (error) {
//       console.log("Could'nt delete post.")
//     }
//   }
//   if(isLoading){
//     return <Loader/>
//   }

//   return (
//     <Link  className='btn sm danger' onClick={()=>removePost(id)}>Delete</Link>
//   )
// }

// export default DeletePost


import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import axios from 'axios';
import Loader from '../components/Loader';

const DeletePost = ({ postId: id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  // Redirect to login page if the user is not logged in
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const removePost = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `https://blog-horizon-backend.onrender.com/posts/${id}`,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      
      if (response.status === 200) {
        // Reload the current page if the user is on their dashboard
        if (location.pathname === `/myposts/${currentUser.id}`) {
          navigate(0); // Force page refresh
        } else {
          navigate('/'); // Redirect to homepage
        }
      }
    } catch (error) {
      console.error("Couldn't delete the post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Link className='btn sm danger' onClick={removePost}>
      Delete
    </Link>
  );
};

export default DeletePost;
