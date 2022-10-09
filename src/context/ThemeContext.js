import { createContext, useReducer } from 'react'

export const ThemeContext = createContext();

export const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload1, bgColor: action.payload2 }
        default:
            return state
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        color: 'black',
        bgColor: 'red'
    });

    const changeColor = (color, bgColor) => {
        dispatch({ type: "CHANGE_COLOR", payload1: color, payload2: bgColor })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeColor }}>
            {children}
        </ThemeContext.Provider>
    )
}