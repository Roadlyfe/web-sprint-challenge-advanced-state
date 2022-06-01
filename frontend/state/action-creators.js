// ❗ You don't need to add extra action creators to achieve MVP
import axios from 'axios'
import * as types from './action-types'

export function moveClockwise(amount) { 
  return { 
    type: types.MOVE_CLOCKWISE, 
    payload: amount,
   }
}

export function moveCounterClockwise(amount) {
  return { 
    type: types.MOVE_COUNTERCLOCKWISE,
    payload: amount,
  }
 }

export function selectAnswer(initialSelectedAnswerState) {
  return (dispatch) => {
    dispatch({type: types.SET_SELECTED_ANSWER,
    payload: initialSelectedAnswerState}) 
  }
 }

export function setMessage(initialMessageState) {
  return (dispatch) => {
    dispatch({type: types.SET_INFO_MESSAGE,
    payload: initialMessageState}) 
  }
 }

export function setQuiz(initialQuizState) {
  return ({ type: types.SET_QUIZ_INTO_STATE,
  payload: initialQuizState})
 }

export function inputChange(name, value) {
  return{ type: types.INPUT_CHANGE,
  payload: { name, value }}
 }

export function resetForm(initialFormState) {
  ({ type: types.RESET_FORM,
  payload: initialFormState})
 }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      dispatch(setQuiz(res.data))
    })
    .catch(err => {
      console.log({ err })
    })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', addAnswer)
    .then(res => {
      dispatch(selectAnswer(null))
      dispatch(setMessage(res.data.message))
      dispatch(fetchQuiz())
    })
    .catch(err => {
      console.log({ err })
    })
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {

    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
