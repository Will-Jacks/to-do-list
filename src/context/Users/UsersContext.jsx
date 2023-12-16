import { createContext, useContext } from "react";

const UserContext = createContext();

const useUsersContext = () => {
    return useContext(useUsersContext);
}

export const UsersProvider = ({ children }) => {

    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}