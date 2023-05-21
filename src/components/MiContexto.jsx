import { createContext } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({children}) => {
    return (
        <Contexto.Provider
        value={{localStorage}}
        >
        {children}
        </Contexto.Provider>
    )
} 
console.log(localStorage.todos);