import React, { useContext, useState } from 'react';
import './Createcontest.css';
import { useForm } from 'react-hook-form';
import { MyContext } from '../mycontext/Mycontext';

function Createcontest() {
    const [contestname,setcontestname]=useState('');
    const [questions, setQuestions] = useState([]);
    const [inputs, setInputs] = useState([]);
    const { register, handleSubmit, resetField } = useForm();
    const {crecontest,setcrecontest}=useContext(MyContext)
    function addQuestion(data) {
        setQuestions([...questions,{discription:data.description,testcases:inputs}]);
         setInputs([]);
        resetField("description")
    }
    function addInputOutput(data){
        setInputs([...inputs, {input: data.input, output: data.output }]);
        resetField("input");  
        resetField("output");
    }

    function handleSave() {
            console.log(questions)
             setcrecontest([...crecontest,{name:contestname,questions:questions}])
             console.log(crecontest);
    }
    function handlecontestname(e){
          setcontestname(e.target.value);
    }

    return (
        <div className="compiler-container">
            <header className="compiler-header">
                <input
                    type="text"
                    className='contest-name'
                    placeholder='Contest Name'
                    value={contestname}
                    onChange={handlecontestname}
                />
            </header>
            <form onSubmit={handleSubmit(addQuestion)}>
                <div>
                <button type="submit" className="prev-btn">Add Problem</button>
                </div>
                <div className="problem-statement">
                    <label htmlFor="problem-statement">Problem Statement:</label>
                    <textarea
                        id="problem-statement"
                        rows="10"
                        placeholder="Describe the problem here..."
                        {...register("description")}
                    ></textarea>
                </div>
            </form>
            <form onSubmit={handleSubmit(addInputOutput)}>
                <div className="io-section">
                    <div className="input-output">
                        <label htmlFor="input">Input:</label>
                        <textarea
                            id="input"
                            rows="5"
                            placeholder="Enter input here..."
                            {...register("input")}
                        ></textarea>
                    </div>
                    <div className="input-output">
                        <label htmlFor="output">Output:</label>
                        <textarea
                            id="output"
                            rows="5"
                            placeholder="Enter desired output here..."
                            {...register("output")}
                        ></textarea>
                    </div>
                </div>
                <button type="submit" className="prev-btn">Add Input/Output</button>

            </form>
            <button type="button" className="add-btn" onClick={handleSave}>Save</button>
        </div>
    );
}

export default Createcontest;
