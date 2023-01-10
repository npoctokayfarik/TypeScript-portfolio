import React from 'react'
import { Link, NavLink } from "react-router-dom"
import "./header.css"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to='/' className="header-logo">MyPortfolio</Link>
          <div className="header-items">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
