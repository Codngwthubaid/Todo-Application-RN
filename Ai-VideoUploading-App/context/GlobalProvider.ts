import { getCurrentUser } from "@/lib/appwrite";
import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";

type ThemeContextType = "light" | "dark";
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};

// Define the shape of the user object
interface User {
    id: string;
    email: string;
    name: string;
    [key: string]: any; // Extendable for other properties
}

interface GlobalContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    user: User | null ;
    setUser: Dispatch<SetStateAction<User | null>>;
    isLoading: boolean;
}

interface ChildTypes {
    children: ReactNode;
}

const GlobalProvider: React.FC<ChildTypes> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
            .then((response: User | null) => {
                if (response) {
                    setIsLoggedIn(true);
                    setUser(response);
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            })
            .catch((error: unknown) => {
                console.error(error);
                throw new Error(String(error));
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <GlobalContext.Provider
          value= {{
        isLoggedIn,
            setIsLoggedIn,
            user,
            setUser,
            isLoading,
          }
}
        >
    { children }
    </GlobalContext.Provider>
      );
    };

export default GlobalProvider;