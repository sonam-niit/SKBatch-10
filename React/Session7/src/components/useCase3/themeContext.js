const { createContext, useState, useContext } = require("react");

const ThemeContext= createContext();

const ThemeContextProvider=({children})=>{
    const [theme,setTheme]= useState('light');

    const toggleTheme=()=>{
        setTheme((prevTheme)=>prevTheme==='light'?'dark':'light');
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;

export const useThemeContext=()=>{
    return useContext(ThemeContext);
}