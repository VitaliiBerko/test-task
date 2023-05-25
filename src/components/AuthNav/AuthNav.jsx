import { NavLink } from "react-router-dom"
import "./AuthNav.scss"

export const AuthNav =()=> {
    return (

        <ul className="wrapper shadowLine">
            <li><NavLink to='/' className='link'>Home</NavLink></li>
            <li><NavLink to='/tweets' className='link'>Tweets</NavLink></li>
        </ul>
    )
}