import React from 'react'
import { NavLink } from 'react-router-dom' //imbrnl

const Menu = () => {
  return (
    <div className='navbar navbar-expand-md navbar-dark bg-secondary'>
        <div className="container">
            <NavLink to={'/'} className="navbar-brand">Music Player</NavLink>

            <button className='navbar-toggler' data-bs-toggler="collapse" data-bs-target="#menu">
              <span className='navbar-toggler-icon'>Music</span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className='navbar-nav'>
                  <li className="nav-item">
            <NavLink to={'/music'} className="nav-link"></NavLink>

                    
                  </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu