import React from "react";
import { createContext, useContext } from "react";

const ThemeContext= React.createContext({
    themeMode: "light",
    lightTheme: ()=>{},
    darkTheme: ()=>{},
})

export const ThemeProvider= ThemeContext.Provider;

export const useTheme=()=>{
    return useContext(ThemeContext);
}