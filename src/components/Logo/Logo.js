import React from 'react'
import style from './Logo.module.css'
import logo from '../../assets/images/logo.webp'

const Logo = () => {
  return (
    <div>
        <img src={logo} alt="Brand_Logo" className={style.logo}/>
    </div>
  )
}

export default Logo