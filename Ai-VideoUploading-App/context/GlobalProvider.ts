import { getCurrentUser } from "@/lib/appwrite";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeContextType = "light" | "dark"
const GlobalContext = createContext<ThemeContextType>("dark")
export const useGlobalCotext = () => useContext(GlobalContext)

interface ChildTypes {
    children: ReactNode
}

const GlobalProvider = ({ children }:ChildTypes) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getCurrentUser()
            .then((response: any) => {
                if (response) {
                    setIsLoggedIn(true);
                    setUser(response)
                } else {
                    setIsLoggedIn(false)
                    setUser(null)
                }
            })
            .catch((error: any) => {
                console.log(error);
                throw new Error(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])


    return (
        <GlobalContext.Provider 
        value = {{
        isLoggedIn,
            setIsLoggedIn,
            user,
            setUser,
            isLoading
    }
}
        >
    { children }
    </GlobalContext.Provider>
    )
}
