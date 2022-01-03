import { useEffect, useState } from "react"
const useDarkMode = () => {
    const storedTheme = localStorage['color-theme']
    const [theme, setTheme] = useState(storedTheme)
    const colorTheme = theme === 'light' ? 'dark' : 'light'
    localStorage['color-theme'] = theme

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}

export default useDarkMode