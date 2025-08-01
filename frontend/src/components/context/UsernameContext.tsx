import React,{ Children, createContext, useContext, useState } from "react";


interface UsernameContextType {
    username : string;
    setUsername: (name: string) => void;
}

const defaultValue: UsernameContextType = {
  username: "",
  setUsername: () => {},
};

// création du contexte
export const UsernameContext = createContext<UsernameContextType>(defaultValue);

// Provider
export function UsernameProvider({ children }: { children: React.ReactNode}) {
    const [username, setUsername] = useState("")
    
    return (
        <UsernameContext.Provider value={{ username, setUsername}}>
        {children}
    </UsernameContext.Provider>
)
}

export function useUsername() {
    return useContext(UsernameContext);
}