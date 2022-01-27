export const mapResult = (num, users) => {
    const newUsers = users.splice(num * 2, 4).map((item) => {
        return {
            name: `${item.name.title} ${item?.name?.first} ${item?.name?.last} `,
            location: `${item?.location?.street.name}
                ${item?.location?.street.number}
                ${item?.location?.city}
                ${item?.location?.country}`,
            email: `${item?.email}`,
            id: `${item?.login?.uuid}`,
            picture: `${item?.picture?.medium}`
        }
    });
    return newUsers;

}