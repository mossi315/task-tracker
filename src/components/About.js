import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <p style={{marginBottom:20}}>This is an Task Tracker Application where you can add your tasks and on double click task you can set reaminder</p>
        <h4 style={{marginBottom:10}}>Version 1.0.0</h4>
        <Link className='btn' to="/task-tracker">Go Back</Link>
    </div>
  )
}

export default About