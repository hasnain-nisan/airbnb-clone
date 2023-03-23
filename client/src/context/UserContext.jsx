import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if(!user){
            axios.get('/profile').then((data) => {
                setUser(data.data)
                setFetching(false)
            })
        }
    }, [])
    return (
        <UserContext.Provider value={{user, setUser, fetching}}>
            {children}
        </UserContext.Provider>
    )
}