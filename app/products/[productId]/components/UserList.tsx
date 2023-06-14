import React from 'react';
import Link from "next/link";

const UserList = async ({promise}) => {
    const users = await promise
    return (
        <table>
            <thead>
            <tr>
                <td>SI</td>
                <td>name</td>
                <td>user</td>
                <td>phone</td>
                <td>email</td>
                <td>Action</td>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user) => {
                    return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link href={`/users/${user.id}`}>Users Post</Link>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
};

export default UserList;