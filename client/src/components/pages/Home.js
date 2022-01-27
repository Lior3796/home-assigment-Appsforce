import { useState, useEffect } from 'react';
import { UPDATE_USERS } from '../../redux/actions/types';
import { mapResult } from '../utills/mapResult';
import '../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { UserList } from '../features/userList/UserList';
import { useSelector, useDispatch } from 'react-redux';
import { PaginationPage } from '../features/pagination/PaginationPage';
import { UserListProvider, UserProvider } from '../../context/context';

export const Home = () => {
    const [users, setUsers] = useState([{}]);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const changeUsersPage = (users) => {
        const mapUsers = mapResult(page, users);
        setUsers(mapUsers);
        dispatch({ type: UPDATE_USERS, payload: { users: mapUsers } });
    }

    const mapUsers = () => {
        return fetch(`https://randomuser.me/api/?results=100`)
            .then(users => users.json())
            .then(items => items.results)
            .then(users => changeUsersPage(users))
            .catch(e => toast("Cant get users"));
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
            <ToastContainer />
        </UserListProvider>
    )
}
