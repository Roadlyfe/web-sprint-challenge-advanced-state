import React from 'react'
import { connect } from 'react-redux'
import * as creators from '../state/action-creators'



export function Wheel(props) {
  
 


  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={props.wheel.move === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{props.wheel.move === 0 && "B"}</div>
        <div className={props.wheel.move === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}>{props.wheel.move === 1 && "B"}</div>
        <div className={props.wheel.move === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}>{props.wheel.move === 2 && "B"}</div>
        <div className={props.wheel.move === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>{props.wheel.move === 3 && "B"}</div>
        <div className={props.wheel.move === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>{props.wheel.move === 4 && "B"}</div>
        <div className={props.wheel.move === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>{props.wheel.move === 5 && "B"}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={evt => props.moveCounterClockwise(-1)}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={evt => props.moveClockwise(1)}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, creators )(Wheel)