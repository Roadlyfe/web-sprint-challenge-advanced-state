import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { fetchQuiz } from '../state/action-creators'


export function Quiz(props) {

  useEffect(() => {
    props.fetchQuiz()
    console.log(fetchQuiz)
  },[])

  const handleSelected = () => {
    console.log("I am selected", props)
  }

  //this.props.selectedAnswer === this.props.quiz.answer_id ? "SELECTED : 'select"

  const handleSelect = () => {
    console.log("I am select", props)
  }

  const onSubmit = () => {
   
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button onClick={handleSelected}>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button onClick={handleSelect}>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onSubmit={onSubmit} >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actionCreators)(Quiz)