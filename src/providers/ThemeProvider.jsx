"use client"

import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '@/context/ThemeContext'


const ThemeProvider = ({children}) => {
	const {theme} = useContext(ThemeContext);
	const [mounted, setMounted] = useState(false);
// conditional rendering to avoid problems with localStoarage versus server side rendering. useState to see if the component is mounted or not. Making shure is a client component first. If the component is ready, return the children.

	useEffect(() => {
		setMounted(true);
	}, []);		
	
	if (mounted) {
	return <div className={theme}>{children}</div>
  }
}

export default ThemeProvider