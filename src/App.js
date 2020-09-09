import React, { useState, useEffect } from 'react';
import "./assets/style.css"
import quizService from "./quizService/index"
import Deneme from './components/deneme';
import QuestionBox from "./components/QuestionBox";


function App() {
  const [questionBank,setQuestionBank] = useState()
  const [score,setScore] = useState(0)
  const [response,setResponse] = useState(0)

  useEffect(()=>{
    getQuestions()

  },[]);

 

  const getQuestions = () =>
  {
     quizService().then(question => {
      setQuestionBank(question)
    });
  }

  const checkAnswer = (answer,correct) => {
    if (answer === correct)
    {
      setScore(score + 1)
    }
    setResponse(response < 5 ? response + 1 : 5)
  }

  console.log(questionBank,"out scope")

  return (
    <div className="container">
      <div className="title">Quiz</div>
      
    
     {(typeof questionBank != "undefined") && 
     response < 5 &&
     questionBank.map(question =>
       (<QuestionBox question={question.question} options={question.answers} key={question.questionId} 
       selected={answer => checkAnswer(answer,question.correct)}/>))}

       

    </div>
  );
}

export default App;
