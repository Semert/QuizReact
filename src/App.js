import React, { useState, useEffect } from 'react';
import "./assets/style.css"
import quizService from "./quizService/index"
import Deneme from './components/deneme';
import QuestionBox from "./components/QuestionBox";


function App() {
  const [questionBank,setQuestionBank] = useState()

  useEffect(()=>{
    getQuestions()

  },[]);

 

  const getQuestions = () =>
  {
     quizService().then(question => {
      setQuestionBank(question)
    });
  }


  console.log(questionBank,"out scope")

  return (
    <div className="container">
      <div className="title">Quiz</div>
      
    
     {(typeof questionBank != "undefined") && questionBank.map(question =>
       (<QuestionBox question={question.question} options={question.answers} key={question.questionId}/>))}

       

    </div>
  );
}

export default App;
