import { useState, useEffect } from 'react';
import { mapResult } from '../utills/mapResult';
import { getUsers } from '../service/service';
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
    const usersFromRedux = useSelector(state => state.users);
    console.log(usersFromRedux);
    const dispatch = useDispatch();

    const mapUsers = () => {
        dispatch(getUsers(page))
            .then(res => res)
            .catch(e => toast(e));
    }


    useEffect(() => {
        mapUsers();
    }, [page])


    return (
        <UserListProvider value={{ users, setUsers }}>
            <div className="users-list-container" >
                {usersFromRedux?.map((item) => <UserProvider value={{ item }}><UserList /></UserProvider>)}
            </div>
            <PaginationPage setPage={setPage} />
            <ToastContainer />
        </UserListProvider>
    )
}
