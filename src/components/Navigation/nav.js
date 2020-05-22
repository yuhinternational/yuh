import React from 'react'
import { Link, Router, NavLink } from 'react-router-dom'
import '../css/mystyles.css'

export default function Navigation() {

  const [isActive, setisActive] = React.useState(false);


  
  return (

    <nav className="navbar is-white is-fixed-top has-shadow">
    <div className="container">
        <div className="navbar-brand">
            <a className="navbar-item brand-text" href="/">yuhentertainment</a>
            <div role='button'onClick={() => setisActive(!isActive)}className={`navbar-burger burger ${isActive ? "is-active" : ""}`} data-target="navbarMenu" >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-end">
                <NavLink to='/'className="navbar-item">Home</NavLink>
                <NavLink to='/game'className="navbar-item">Projects</NavLink>
                <NavLink to='/entertainment'className="navbar-item">Entertainment</NavLink>
                <NavLink to='/docs'className="navbar-item">Documentation</NavLink>
                <NavLink to='/donate'className="navbar-item">Contact</NavLink>

  
            </div>

        </div>
    </div>
</nav>
   


  )
}