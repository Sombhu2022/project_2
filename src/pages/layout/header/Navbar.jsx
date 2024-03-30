import { Link, NavLink} from 'react-router-dom'

import { AiFillHome } from "react-icons/ai";

import './header.scss'
const Navbar = () => {
  return (
    <header className='navbar-container'>
       <img/>


        <nav>
        <NavLink className="link" to="/"> <AiFillHome/> Home</NavLink>
        <NavLink className="link" to="/about">About</NavLink>
        <NavLink className="link" to="/product">product</NavLink>

        <Link to={"/login"}>
           <button >Login</button>
        </Link>
        </nav>
       
    </header>
  )
}

export default Navbar