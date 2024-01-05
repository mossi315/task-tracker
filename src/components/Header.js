import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({title, showAdd, showAddTask}) => {
  const location = useLocation();
  return (
   <header className='header'>
    <h1>{title}</h1>
    {location.pathname==='/' &&(
    <Button text = {showAddTask ? 'close': 'Add'} color = {showAddTask ? 'red' :'green'} onClick = {showAdd}/>
    )}
   </header>
  )
}

export default Header