import React from 'react';
function Roster(props) {
    const { roster } = props;

    return (
        <div className='roster container'>
        <h2>Current team members</h2>
        {roster.map(elem => <RosterCard user={elem}/>)}
        </div>
)};

function RosterCard(props) {
    const {user} = props;

        return (
        <div className='roster-card'>    
            <div>Name: {user.first_name} {user.last_name}</div>
            <div>Email: {user.email}</div>
        </div>
)};


export default Roster;