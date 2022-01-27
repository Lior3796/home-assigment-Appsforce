import React, { useEffect, useState } from 'react'
import '../../styles/style.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_THEME } from '../../../redux/actions/types';
export const Navbar = () => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        setTheme(!theme);
        dispatch({ type: CHANGE_THEME, payload: { toggleTheme: theme } });
    }
    return (
        <nav className="navbar-container">
            <Button onClick={() => changeTheme()}>{theme ? "Dark" : "Light"}</Button>
            <h1>Lior app</h1>

            <ul className="navbar-ul">
                <li className="navbar-li">
                    <Link className="navbar-link" to="/"> Home </Link>
                </li>
                <li className="navbar-li">
                    <Link className="navbar-link" to="/AddUser"> Add user </Link>
                </li>
            </ul>

        </nav>
    )
}
