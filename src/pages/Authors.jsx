// import React, { useState ,useEffect} from 'react';
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import Loader from '../components/Loader'
// // import getAuthor from


// const Authors = () => {
//   const[authors,setAuthors]=useState([])
//   const [isLoading ,setIsLoading]=useState(false);

//   useEffect(()=>{
//     const getAuthors =async()=>{
//       setIsLoading(true);
//       try {
//         const response=await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
//         setAuthors(response.data)
//       } catch (error) {
//         console.log(error)
//       }
//       setIsLoading(false)
//     }
//     getAuthors();

//     if(isLoading){
//       return <Loader/>
//     }

//   },[])
//   return (
//     <section className="authors">
//       {authors.length > 0 ? <div className="container authors__container">
//       {
//         authors.map(({_id: id,avatar,name,posts})=>{
//           return <Link key={id} to={`/posts/users/${id}`} className='author'>
//             <div className="author__avatar">
//               <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt={`Image of ${name}`} />
//             </div>
//             <div className="author__info">
//               <h4>{name}</h4>
//               <p>{posts}</p>
//             </div>
//           </Link>
//         })
//       }
//       </div>: <h2 className='center'>No Users/authors found</h2>}  
//     </section>
//   )
// }

// export default Authors


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAuthors = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://blog-horizon-backend.onrender.com/users');
        setAuthors(response.data); // Assuming response.data contains the list of authors
      } catch (error) {
        console.log('Error fetching authors:', error);
      }
      setIsLoading(false);
    };
    getAuthors();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ _id: id, avatar, name, posts }) => (
            <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img
                  src={`https://blog-horizon-backend.onrender.com/uploads/${avatar}`}
                  alt={`Image of ${name}`}
                />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts} Posts</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className='center'>No Users/Authors found</h2>
      )}
    </section>
  );
};

export default Authors;
