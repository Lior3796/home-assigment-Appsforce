import { useState, useEffect } from 'react';
import { UPDATE_USERS } from '../../redux/actions/types';
import '../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { UserList } from '../features/userList/UserList';
import { useSelector, useDispatch } from 'react-redux';
import { PaginationPage } from '../features/pagination/PaginationPage';
import { UserListProvider, UserProvider } from '../../context/context';

export const Home = () => {
    const [users, setUsers] = useState([{}]);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const changeUsersPage = (num, list) => {
        const newUsers = list.splice(num * 2, 4).map((item) => {
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
        setUsers(newUsers);
        dispatch({ type: UPDATE_USERS, payload: { users: newUsers } });
    }

    const mapUsers = () => {
        return fetch(`https://randomuser.me/api/?results=100`)
            .then(users => users.json())
            .then(items => items.results)
            .then(users => changeUsersPage(page, users))
            .catch(e => console.log(e));
    }


    useEffect(() => {
        mapUsers();
    }, [page])


    return (
        <UserListProvider value={{ users, setUsers }}>
            <div className="users-list-container" >
                {users?.map((item) => <UserProvider value={{ item }}><UserList /></UserProvider>)}
            </div>
            <PaginationPage setPage={setPage} />

        </UserListProvider>
    )
}
