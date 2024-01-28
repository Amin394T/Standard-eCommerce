import { PropsWithChildren, createContext, useState } from "react"

export const ThemeContext = createContext({theme: 'light', toggleTheme: () => {}})

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState('light')
    
    const toggleTheme = () => {
       setTheme(theme === 'light' ? 'dark' : 'light')
    }
 
    return (
       <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
       </ThemeContext.Provider>
    )
 }