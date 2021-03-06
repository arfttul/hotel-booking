import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useAuth from './../hooks/useAuth'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  const { user, logOut } = useAuth()

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='resort logo' />
          </Link>
          <button type='button' className='nav-btn' onClick={handleToggle}>
            <FaAlignRight className='nav-icon'></FaAlignRight>
          </button>
        </div>
        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <HashLink to='/'>Home</HashLink>
          </li>
          <li>
            <HashLink to='rooms#rooms'>Rooms</HashLink>
          </li>

          {user ? (
            <li>
              <>
                {' '}
                <HashLink to='stuff#stuff'>Our Stuff</HashLink>
              </>{' '}
            </li>
          ) : (
            ''
          )}
          {user ? (
            <li>
              <>
                {' '}
                <HashLink to='food-service#food-service'>Food Service</HashLink>
              </>{' '}
            </li>
          ) : (
            ''
          )}

          {!user ? (
            <li>
              <Link to='login'>Login</Link>
            </li>
          ) : (
            <>
              <li>
                {user.emailVerified ? (
                  <Link to='profile '>
                    <button
                      className='btn-primary'
                      style={{ fontWeight: '900' }}
                    >
                      {user.displayName}
                    </button>
                  </Link>
                ) : (
                  <Link to='email-verification'>user</Link>
                )}
              </li>
              <li>
                <Link to=''>
                  <button onClick={logOut} className='btn-book'>
                    Log out
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
