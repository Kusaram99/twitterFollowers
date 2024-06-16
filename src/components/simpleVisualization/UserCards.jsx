import React from 'react';


const UserCard = ({ user, handleRemove }) => {
  const joinDate = new Date(user.join_date * 1000).toLocaleDateString();

  return (
    <div
      className="card my-2 shadow flex-grow-1"
      style={{ width: "320px" }} >
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <div className='d-flex align-items-center mb-4'>
            <img
              src={user.image}
              alt={user.username}
              className="rounded-circle me-3"
              width="50"
              height="50" />
            <div>
              <h5
                className="card-title mb-0">
                {user.fullname}</h5>
              <h6
                className="card-subtitle text-muted">
                @{user.username}</h6>
            </div>
          </div>
          <h6
            className="card-subtitle text-muted justify-self-end mb-4'>">
            ({user.twubric.total})</h6>
        </div>
        <div className="row mb-2">
          <div className="col">Friends</div>
          <div className="col d-flex justify-content-between">
            <span>:</span>
            {user.twubric.friends}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">Influence</div>
          <div className="col d-flex justify-content-between">
            <span>:</span>
            {user.twubric.influence}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">Chirpiness</div>
          <div className="col d-flex justify-content-between">
            <span>:</span>
            <span>{user.twubric.chirpiness}</span>
          </div>
        </div>
        <p className="card-text">Joined: {joinDate}</p>
        <button
          className="btn btn-danger"
          onClick={_ => handleRemove(user.uid)}>
          Remove</button>
      </div>
    </div>
  );
};

export default UserCard;
