import React, {useEffect, useState} from 'react';
const UsersTable = (props) => {
    console.log(props.users)
    return (
        <div>
            <h3>Все пользователи</h3>
            <table className={"table"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Login</th>
                    <th>Phone</th>
                    <th>Email</th>   
                </tr>
                </thead>
                <tbody>
                {props.users.map(({...props}, index) => {
                    console.log(props)
                    return <UsersTableItem props={props} key={index}/>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable

const UsersTableItem = ({props}) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.username}</td>
            <td>{props.login}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
        </tr>
    )
}