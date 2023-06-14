import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={`${styles.nav} main`} >
        <Link to="/products">Our Catalogue</Link>
        <Link to="/contact">Contact us</Link>
    </div>
  )
}

export default Header