import React from 'react'
import './Question.css'

const Question = ({quest, ans}) => {
    return (
        <div className="question-box">
            <h2>{quest}</h2>
            <p>{ans}</p>   
        </div>
    )
}

export default Question