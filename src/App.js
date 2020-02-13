import React, {useEffect, useState} from 'react';
import './App.css';
import  Question from './Question'

const App = () => {

  // Вот это -- стейт
  const [questions, setQuestions] = useState([])

  // Это вроде как происходит один раз при загрузке страницы 
  // и остальные разы, когда что-то перерендеривается
  useEffect(() => {
    getQuestions()
  }, [])

  const getQuestions = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=5")
    const data = await response.json()
    console.log(data.results)
    setQuestions(data.results)
  }

  return (
    <div className="wrapper">
      <div className="App">
        <h1> 5 random questions </h1>
        {questions.map(question => (
          <Question quest={question.question} ans={question.correct_answer}/>
        ))}
      </div>
    </div>
  );
}

export default App;
