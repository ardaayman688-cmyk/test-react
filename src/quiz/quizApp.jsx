
import React, { useState, useRef } from 'react';
import './quizApp.css';
import { data } from '../assets/data';
import Navbar from "./nav";

function QuizApp({ user, setUser }) {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);
  const Option5 = useRef(null);
  const option_array = [Option1, Option2, Option3, Option4 ,Option5];

  const question = data[index];

  function checkAns(e, ans) {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  }

  const next = () => {
    if (lock) {
      option_array.forEach((option) => {
        if (option.current) {
          option.current.classList.remove("correct");
          option.current.classList.remove("wrong");
        }
      });

      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return newIndex < data.length ? newIndex : prevIndex;
      });

      setLock(false);
    }
  };

  return (
    <div className='container'>
      <Navbar user={user} setUser={setUser} />
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.Option1}</li>
        <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.Option2}</li>
        <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.Option3}</li>
        <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.Option4}</li>
        
      </ul>
      <button onClick={next}>Next</button>
      <div className='index'>{index + 1} of {data.length} questions</div>
      <div className='score'>Score: {score}</div>
    </div>
  );
}

export default QuizApp;