"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();


const getFromLocalStorage = () => {
	if (typeof window !== "undefined") {
		const value = localStorage.getItem("theme");
		return value || "light";
	};
};

// when I click to change for the dark mode, the page will reload and change for light mode again. To prevent this, you can store this state in a local storage. 

//visiting for the first time, the storage is gona be empity.  If is empity, make it light

//Next JS use server side rendering by default. There is no browser on server. Even using a cliente side component, to prevent problems; if (typeof window !== undefined) {}

//strict inequality (!==) operator checks whether its two operands are not equal, returning a Boolean result.

export const ThemeContextProvider = ({children}) => {
	const [theme, setTheme] = useState (() => {
		return getFromLocalStorage()
	});

	const toggle = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	useEffect( () => {
	localStorage.setItem("theme", theme)
	}, [theme]);

	//when the theme are changed, whe are update the local storage with useState
	
	return <ThemeContext.Provider value={{theme, toggle}}>
		{children}
		</ThemeContext.Provider>;
};
