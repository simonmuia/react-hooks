import React, { useReducer } from 'react'
/**
 * Alters two different actions: increment value and value of 
 * text visibility.
 *
 */
const reducer = (state, action) =>{
  switch (action.type) {
    case "INCREMENT":
      return {count: state.count + 1, showText: state.showText}
    case "toggleShowText":
      return {count: state.count, showText: !state.showText}
    case "reset":
      return {count:0, showText:true}
  
    default:
      return state;
  }
}


const UseReducerPage = () => {

  const [state, dispatch] = useReducer(reducer, 
    {count: 0, showText:true}
    )

  return (
	<div className='wrapper'>
      <h2>UseReducer</h2>
      <div className="card btn-wrapper">
        <p>
          An alternative to <mark>useState</mark>. Accepts a reducer of type (state, action)
          ={'>'} newState, and returns the current state paired with a dispatch
          method. (If you’re familiar with Redux, you already know how this
          works.) <mark>useReducer</mark> is usually preferable to useState when you have
          complex state logic that involves multiple sub-values or when the next
          state depends on the previous one. <mark>useReducer</mark>  also lets you optimize
          performance for components that trigger deep updates because you can
          pass dispatch down instead of callbacks.
        </p>
      </div>

      <div className='inputForm card'>
        <h2>{state.count}</h2>
        <div className='buttons'>
        <button
        className='btn btn-outline-success'
        onClick={()=>{
          dispatch({type:"INCREMENT"});
          dispatch({type:"toggleShowText"})
        }}        
        >
          Power with Reducer
        </button>
        <button
        className='btn btn-outline-primary'
        onClick={()=>{
          dispatch({type:"reset"})
        }}>Reset</button>
        </div>
        {state.showText && <p>This is a text</p>}
		</div>
       
    </div>
  )
}

export default UseReducerPage