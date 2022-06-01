import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { fetchQuiz } from '../state/action-creators'


export function Quiz(props) {

  useEffect(() => {
    props.fetchQuiz()
  },[])


 

  const onSubmit = (e) => {
   e.preventDefault()
   props.postAnswer({quiz_id: props.quiz.quiz_id, answer_id: props.selectedAnswer})
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
           <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={props.quiz.answers[0].answer_id === props.selectedAnswer ? "answer selected" : "answer"}>
                {props.quiz.answers[0].text}
                <button onClick={() => props.selectAnswer(props.quiz.answers[0].answer_id)}>
                {props.quiz.answers[0].answer_id === props.selectedAnswer ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={props.quiz.answers[1].answer_id === props.selectedAnswer ? "answer selected" : "answer"}>
              {props.quiz.answers[1].text}  
                <button onClick={() => props.selectAnswer(props.quiz.answers[1].answer_id)}>
                {props.quiz.answers[1].answer_id === props.selectedAnswer ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={!props.selectedAnswer ? true : false } onClick={onSubmit} >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actionCreators)(Quiz)