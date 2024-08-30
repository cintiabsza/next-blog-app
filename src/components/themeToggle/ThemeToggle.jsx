"use client"

import React from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import moon from '../../../public/moon.png'
import sun from '../../../public/sun.png'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'


const ThemeToggle = () => {

   const {toggle, theme}= useContext(ThemeContext)

   console.log(theme)

  return (
	<div  className={styles.container} onClick={toggle}
    style={theme === "dark" 
    ? {background: "white"}
    : {background: "black" }
    }
  >
    <Image  
      src={moon}
      alt='moon'
      width={16}
      height={16}
    />
    <div className={styles.ball}
      style={theme === "dark" ? {left: 1, background: "#0f172a"}
      : {left: 30, background: "white" }
      }
    ></div>
    <Image  
      src={sun}
      alt='sun'
      width={18}
      height={18}
    />
  </div>
  )
}

export default ThemeToggle