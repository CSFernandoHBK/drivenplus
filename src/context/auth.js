import React, {createContext, useState} from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const [infoUser, setInfoUser] = useState({});

    return(
        <AuthContext.Provider value={{infoUser, setInfoUser}}>
            {children}
        </AuthContext.Provider>
    )
}