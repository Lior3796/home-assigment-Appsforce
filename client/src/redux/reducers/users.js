import { FILTER_EDIT_USERS, UPDATE_USERS } from "../actions/types";

export const users = async (usersList = [{}], action) => {
    switch (action.type) {
        case UPDATE_USERS:
            const { users } = action.payload;
            return users;
        case FILTER_EDIT_USERS:
            const { editedUser, newUser, contextUsers } = action.payload;
            const updatedUsers = contextUsers.map(user => user.id !== newUser.id ? user : newUser);
            return updatedUsers;
        default:
            return usersList;
    }
};