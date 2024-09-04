import React, { useContext } from 'react';
import { MyContext } from '../mycontext/Mycontext';
import './Upcoming.css';

const Unassigned = () => {
    const { upcoming } = useContext(MyContext);

    return (
        <div className="unassigned-container">
            {upcoming.map((contest, index) => (
                <div className="card" key={`contest-${index}`}>
                    <p className="title">{contest['name']}</p>
                    <p className="text">{Object(contest['questions']).length} Questions</p>
                    <p className="info-text">{contest.date}</p>
                    <p className="info-text">{contest.time}</p>
                    <p className="info-text">{contest.mode}</p>
                </div>
            ))}
        </div>
    );
};

export default Unassigned;
