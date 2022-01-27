import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Navbar } from '../navbar/Navbar';
import '../../styles/style.css';
import { Footer } from '../footer/Footer';

import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";
import { Home } from '../../pages/Home';
import { NewUser } from '../../pages/NewUser';


export const AppRouter = () => {

    return (
        <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/AddUser" element={<NewUser />} />
                    <Route path="/home-assigment-Appsforce" element={<Home />} />
                </Routes>
                <Footer />
            </>
        </Router >
    )
}
