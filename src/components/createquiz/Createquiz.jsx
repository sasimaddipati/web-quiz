import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Createquiz.css';
import { MyContext } from '../mycontext/Mycontext';
function Createquiz() {
    const [countque, setCountQue] = useState(1);
    const [countopt, setCountOpt] = useState(0);
    const [options, setOptions] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [quizname,setquizname]=useState("");
    const { register, handleSubmit, reset } = useForm();
    const {crequiz,setcrequiz}=useContext(MyContext);
    function handleOptionsChange(event) {
        const newCountOpt = parseInt(event.target.value, 10);
        setCountOpt(newCountOpt);
        const newOptions = Array.from({length:newCountOpt });
        setOptions(newOptions);
    }
    function onSubmit(formState) {
        const newQuestion = {
            question: formState.question,
            options: options.map((_, index) => formState[`option ${index + 1}`])
        };
        setQuestions([...questions, newQuestion]);
        console.log("New Question Added:", newQuestion);
        setCountQue(countque + 1);
        setCountOpt(0);
        setOptions([]);
        reset();
    }
    function funsavequizname(x){
           setquizname(x.target.value);
    }
    function handleSaveQuiz() {
        setcrequiz([...crequiz,{name:quizname,quiz:questions}])
        console.log(crequiz);
        console.log("Quiz saved:", questions);
    }
    return (
        <div className="quiz-container">
            <input type="text" placeholder='Quiz Name' value={quizname} onChange={funsavequizname}/>
            <button type='button' className='btn1' onClick={handleSaveQuiz}>Save Quiz</button>

            <form onSubmit={handleSubmit(onSubmit)}>   
                <h1>Question: {countque}</h1>
                <textarea
                    type="text"
                    className='textarea-quiz'
                    placeholder='Question'
                    {...register("question")}
                />
               <div className='nooptions'>
                <h3>Number of options required</h3>
                <input
                    className='optionsinput'
                    type="number"
                    value={countopt}
                    onChange={handleOptionsChange}
                />
                </div>
                {
                    options.map((item, index) => (
                        <input
                            key={index}
                            type="text"
                            placeholder={`Option ${index + 1}`}
                            {...register(`option ${index + 1}`)} 
                        />
                    ))
                }
                <button className='btn'>Add</button>
            </form>

        </div>
    );
}
export default Createquiz;
