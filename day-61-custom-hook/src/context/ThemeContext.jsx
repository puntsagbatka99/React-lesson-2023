import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ThemeContext = createContext(null);
export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext)
    return {theme, setTheme}
}
export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

