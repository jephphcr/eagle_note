import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register';
import UsersEditScreen from './screens/users/edit';
import NotesIndexScreen from './screens/notes/index';
import Login from './screens/auth/login';


const myRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path= "/" element=  {<HomeScreen />} />;
            <Route exact path= '/register' element=  {<RegisterScreen />} />;
            <Route exact path= '/users/edit' element=  {<UsersEditScreen />} />;
            <Route exaxt path= '/notes' element=  {<NotesIndexScreen />} />;
            <Route exact path= '/login' element=  {<Login />} />;
        </Routes>
    </BrowserRouter>
)

export default myRoutes;
