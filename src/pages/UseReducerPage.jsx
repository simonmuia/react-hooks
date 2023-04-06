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
      <p>Uses to handle different states of a program</p>

      <div className='inputForm'>
        <h2>{state.count}</h2>
        <button
        onClick={()=>{
          dispatch({type:"INCREMENT"});
          dispatch({type:"toggleShowText"})
        }}        
        >
          Click Here
        </button>
        {state.showText && <p>This is a text</p>}
		</div>
       
    </div>
  )
}

export default UseReducerPage