import React from 'react';
import UserCard from './UserCards';

const UserList = ({ users, handleRemove }) => {
    return (
        <div className="container">
            <div className='row gap-3 d-flex'>
                {users.map((user) => (
                    <UserCard
                        key={user.uid}
                        user={user}
                        handleRemove={handleRemove} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
