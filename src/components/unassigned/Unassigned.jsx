import React, { useContext } from 'react';
import './Unassigned.css'; 
import { MyContext } from '../mycontext/Mycontext';
import { useForm } from 'react-hook-form';

const Unassigned = () => {
    const { crequiz, crecontest, upcoming, setupcoming, setcrecontest } = useContext(MyContext);
    const { register, handleSubmit } = useForm(); 

    function fun(contest, newass){
        contest['date'] = newass.date;
        contest['time'] = newass.time;
        contest['mode'] = newass.mode;
        setupcoming([...upcoming, contest]);
        setcrecontest(crecontest.filter((item) => item !== contest));
    }

    return (
        <div className="unassigned-container">
            {crecontest.map((contest, index) => (
                <div className="card" key={`contest-${index}`}>
                    <h3 className="title">Contest</h3>
                    <p className="text">{contest['name']}</p>
                    <p className="text">{Object(contest['questions']).length} Questions</p>
                    <form onSubmit={handleSubmit((data) => fun(contest,data))}>
                        <input 
                            type="date"
                            {...register('date')}
                            placeholder="dd:mm:yyyy"
                        />
                        <input 
                            type="time"
                            {...register('time')}
                        />
                        <input type="text"
                        placeholder='mode of display' 
                         {...register('mode')}
                         />
                        <div className="button-container">
                            <button className="assign-button" type="submit">Assign</button>
                        </div>
                    </form>
                </div>
            ))}
            {crequiz.map((contest, index) => (
                <div className="card" key={`contest-${index}`}>
                    <h3 className="title">Quiz</h3>
                    <p className="text">{contest['name']}</p>
                    <p className="text">{Object(contest['quiz']).length} Questions</p>
                    <form onSubmit={handleSubmit((data) => fun(contest, data))}>
                        <input 
                            type="date"
                            {...register('date')}
                            placeholder="dd:mm:yyyy"
                        />
                        <input 
                            type="time"
                            {...register('time')}
                        />
                        <div className="button-container">
                            <button className="assign-button" type="submit">Assign</button>
                        </div>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default Unassigned;
