import React,{createContext,useContext,useState,type ReactNode} from 'react';

export interface AuthType{
    isLoggedIn:boolean;
    login:()=>void;
    logout:()=>void;
}


const AuthContext=createContext<AuthType|undefined>(undefined);

interface AuthProviderProps{
    children:React.ReactNode;
}
 const AuthProvider=({children}:AuthProviderProps)=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    
    const login=()=>{
        setIsLoggedIn(true)
    }
    const logout=()=>{
        setIsLoggedIn(false);
    }
    return(
            <AuthContext.Provider value={{isLoggedIn,login,logout}} >
            {children}
            </AuthContext.Provider>
    )
}
export { AuthContext , AuthProvider};