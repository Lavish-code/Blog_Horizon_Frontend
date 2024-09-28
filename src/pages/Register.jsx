// import React, { useState } from 'react'
// import { Link,useNavigate } from 'react-router-dom'
// import axios from 'axios'

// const Register = () => {
//   const [userData,setUserdata]=useState({
//     name: '',
//     email:'',
//     password:'',
//     password2:''
//     })

//     const[error ,setError]=useState('')
//     const navigate=useNavigate()


//     const ChangeInputHandler=(e)=>{
//       setUserdata(prevState=>{
//         return{
//           ...prevState,[e.target.name]:e.target.value
//         }
//       })
//     }

//     const registerUser= async(e)=>{
//       e.preventDefault()
//       setError('')
//       try {
//         const response =await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`,userData)
//         const newUser =await response.data;
//         console.log(newUser);
//         if(!newUser){
//           setError("Could'nt register user. please try again")
//         }
//         navigate('/login')
//       } catch (err) {
//         setError(err.response.data.message)
//       }
//     }

//   return (
//     <section className='register'>
//       <div className="container">
//         <h2>Sign Up</h2>
//         <form  className="form register__form" onSubmit={registerUser}>
//          {error && <p className="form__error-message">{error}</p>}
//           <input type="text"placeholder='Full Name'name='name' value={userData.name} onChange=
//           {ChangeInputHandler} autoFocus/>
//           <input type="text"placeholder='Email'name='email' value={userData.email} onChange=
//           {ChangeInputHandler} />
//           <input type="password"placeholder='Password'name='password' value={userData.password} onChange=
//           {ChangeInputHandler} />
//           <input type="password"placeholder='Confirm Password'name='password2' value={userData.password2} onChange=
//           {ChangeInputHandler} />
//           <button type='submit' className='btn primary'>Register</button>
//         </form>
//         <small>Already have an account <Link to='/login'>sign in</Link></small>
//       </div>
//     </section>
//   )
// }
// export default Register

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [userData, setUserdata] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const ChangeInputHandler = (e) => {
    setUserdata(prevState => {
      return {
        ...prevState, [e.target.name]: e.target.value
      };
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('https://blog-horizon-backend.onrender.com/users/register', userData);
      const newUser = await response.data;
      console.log(newUser);
      if (!newUser) {
        setError("Couldn't register user. Please try again.");
      } else {
        navigate('/login');
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <section className='register'>
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register__form" onSubmit={registerUser}>
          {error && <p className="form__error-message">{error}</p>}
          <input
            type="text"
            placeholder='Full Name'
            name='name'
            value={userData.name}
            onChange={ChangeInputHandler}
            autoFocus
          />
          <input
            type="text"
            placeholder='Email'
            name='email'
            value={userData.email}
            onChange={ChangeInputHandler}
          />
          <input
            type="password"
            placeholder='Password'
            name='password'
            value={userData.password}
            onChange={ChangeInputHandler}
          />
          <input
            type="password"
            placeholder='Confirm Password'
            name='password2'
            value={userData.password2}
            onChange={ChangeInputHandler}
          />
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Already have an account? <Link to='/login'>Sign in</Link></small>
      </div>
    </section>
  );
}

export default Register;

