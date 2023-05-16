import React, {useEffect, useState} from 'react';
import AdminService from "./services/AdminService";
import UsersTable from "./components/UsersTable";
import {useSelector} from "react-redux";
import AuthService from './services/Auth.service';

function Admin() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        AuthService.takeUsers().then((response) => setUsers(response.data))
    }, [])

    return (

        <div>
            <h1>Админ-панель</h1>
            <UsersTable users={users}/>
        </div>
    )

}

export default Admin;