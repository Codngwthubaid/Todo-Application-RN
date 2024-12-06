// import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import { getCurrentUser } from "@/lib/appwrite";

// // Define the shape of the user object
// interface User {
//     id: string;
//     name: string;
//     email: string;
// }

// // Define the shape of our context
// interface GlobalContextType {
//     isLogged: boolean;
//     setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
//     user: User | null;
//     setUser: React.Dispatch<React.SetStateAction<User | null>>;
//     loading: boolean;
// }

// const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// export const useGlobalContext = (): GlobalContextType => {
//     const context = useContext(GlobalContext);
//     if (context === undefined) {
//         throw new Error("useGlobalContext must be used within a GlobalProvider");
//     }
//     return context;
// };

// interface GlobalProviderProps {
//     children: ReactNode;
// }

// const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
//     const [isLogged, setIsLogged] = useState<boolean>(false);
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         getCurrentUser()
//             .then((res: any) => {
//                 if (res) {
//                     setIsLogged(true);
//                     setUser(res);
//                 } else {
//                     setIsLogged(false);
//                     setUser(null);
//                 }
//             })
//             .catch((error: unknown) => {
//                 console.log(error);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);

//     const contextValue: GlobalContextType = {
//         isLogged,
//         setIsLogged,
//         user,
//         setUser,
//         loading,
//     };
    
//     return (
//         <GlobalContext.Provider
//         value={{
//             isLogged,
//             setIsLogged,
//             user,
//             setUser ,
//             loading,
//         }}
//     >
//         {children}
//     </GlobalContext.Provider>
//   );
// };

// export default GlobalProvider;

// import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import { getCurrentUser } from '@/lib/appwrite';
// import { GlobalContextType } from '@/types/context';
// import { User } from '@/types/user';

// export const GlobalContext = createContext<GlobalContextType>({
//     isLogged: false,
//     setIsLogged: () => {},
//     user: null,
//     setUser: () => {},
//     loading: false
//   });
  
// export const useGlobalContext = (): GlobalContextType => {
//   const context = useContext(GlobalContext);
//   if (context === undefined) {
//     throw new Error('useGlobalContext must be used within a GlobalProvider');
//   }
//   return context;
// };

// interface GlobalProviderProps {
//   children: ReactNode;
// }

// const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
//   const [isLogged, setIsLogged] = useState<boolean>(false);
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     getCurrentUser()
//       .then((res: any) => {
//         if (res) {
//           setIsLogged(true);
//           setUser(res);
//         } else {
//           setIsLogged(false);
//           setUser(null);
//         }
//       })
//       .catch((error: Error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   const contextValue: GlobalContextType = {
//     isLogged,
//     setIsLogged,
//     user,
//     setUser,
//     loading,
//   };

//   return (
//     <GlobalContext.Provider value={contextValue}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export default GlobalProvider;

import React, { createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser } from "@/lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLogged(true);
          setUser(res);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;