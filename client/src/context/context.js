import { createContext, useContext } from "react";

export const UserListContext = createContext();
export const UserListProvider = UserListContext.Provider;

export const useUserListContext = () => {
    return useContext(UserListContext);
}
// 
export const UserContext = createContext();
export const UserProvider = UserContext.Provider;

export const useUserContext = () => {
    return useContext(UserContext);
}