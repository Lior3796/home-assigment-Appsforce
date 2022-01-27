export const getUsers = () => {
    return fetch("https://randomuser.me/api/?results=5")
        .then(users => users.json())

}