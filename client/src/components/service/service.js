import { UPDATE_USERS } from '../../redux/actions/types';
export const getUsers = (page) => (dispatch) => {
    return fetch(`https://randomuser.me/api/?results=100`)
        .then(users => users.json())
        .then(items => {
            dispatch({ type: UPDATE_USERS, payload: { users: items.results, page } })
        })
        .catch(e => "Cant get users")

}