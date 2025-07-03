'use client'

import { useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

const themes = {
	light: 'light',
	dark: 'dark',
}

const ThemeToggle = () => {
	const [theme, setTheme] = useState<string>(themes.light)

	const toggleThemes = () => {
		const newTheme = theme === themes.light ? themes.dark : themes.light

		document.documentElement.setAttribute('data-theme', newTheme)

		setTheme(newTheme)
	}

	return (
		<button onClick={toggleThemes} className='btn btn-sm btn-outline'>
			{theme === 'lofi' ? (
				<BsMoon className='h-4 w-4' />
			) : (
				<BsSun className='h-4 w-4' />
			)}
		</button>
	)
}

export default ThemeToggle
