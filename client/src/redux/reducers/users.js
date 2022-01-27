import { FILTER_EDIT_USERS, UPDATE_USERS } from "../actions/types";
import { mapResult } from "../../components/utills/mapResult";
export const users = (usersList = [{}], action) => {
    switch (action.type) {
        case UPDATE_USERS:
            const { users, page } = action.payload;
            const mapUsers = mapResult(page, users);
            return mapUsers;
        case FILTER_EDIT_USERS:
            const { editedUser, newUser, contextUsers } = action.payload;
            const updatedUsers = contextUsers.map(user => user.id !== newUser.id ? user : newUser);
            return updatedUsers;
        default:
            return usersList;
    }
};