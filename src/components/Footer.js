import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
         <p>Copyrights &copy; 2024</p>
         <Link className = 'btn' to='/about'>About</Link>
    </footer>
    )
}

export default Footer