import React, { useState,useContext } from 'react'
import {Link} from "react-router-dom"
import Loogo from '../images/loogo.jpg'
import { FaBars } from "react-icons/fa";
import { TbSquareLetterXFilled } from "react-icons/tb";

import { UserContext } from '../context/userContext';



const Header = () => {

  const[isNavShowing,setIsNavShowing]=useState(window.innerWidth > 800 ? true:false);
  const{currentUser} = useContext(UserContext);

  const closeNavHandle=()=>{
    if(window.innerWidth<800){
      setIsNavShowing(false);
    }else{
      setIsNavShowing(true);
    }
  }

  return (

    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__logo' onClick={closeNavHandle}>
          <img src={Loogo}  alt="" />
        </Link>
        { currentUser?.id && isNavShowing && <ul className='nav__menu'>
          <li><Link to={`/profile/${currentUser.id}`} onClick={closeNavHandle}>{currentUser?.name}</Link></li>
          <li><Link to="/create" onClick={closeNavHandle}>Create Post</Link></li>
          <li><Link to="/authors" onClick={closeNavHandle}>Authors</Link></li>
          <li><Link to="/logout" onClick={closeNavHandle}>Logout</Link></li>
        </ul>}
        { !currentUser?.id &&isNavShowing && <ul className='nav__menu'>
          <li><Link to="/authors" onClick={closeNavHandle}>Authors</Link></li>
          <li><Link to="/login" onClick={closeNavHandle}>Login</Link></li>
        </ul>}
        <button className="nav__toggle-btn" onClick={()=>setIsNavShowing(!isNavShowing)}>
        {isNavShowing?<TbSquareLetterXFilled />:<FaBars/>}
        
        </button>
      </div>
    </nav>
  )
}

export default Header
