import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='text-center bg-black bg-opacity-60 text-neutral-200'>
          <div className='flex items-center justify-center gap-4'>
              <Link to='/'>About</Link>
              <Link to='/'>Contact</Link>
          </div>
        <p>Created by Dynamic coding with fend_verse</p>
    </footer>
  )
}

export default Footer