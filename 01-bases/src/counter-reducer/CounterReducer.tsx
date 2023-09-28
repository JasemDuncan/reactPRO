import React, { useReducer } from 'react'
import { CounterState } from './interfaces/interfaces';
import * as actions from './actions/actions';
import { counterReducer } from './state/counterReducer';



const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

export const CounterReducerComponent = () => {
    
    const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset=() =>{
        dispatch(actions.doReset())
    }

    const increaseBy = (value: number) => {
        // dispatch({type: 'increaseBy', payload:{value:value}})
        dispatch(actions.doIncreaseBy(value))
    }

  return (
    <>
        <h1>Counter Reducer Segmentado: {counter}</h1>
        <h1>Previous Reducer: {previous}</h1>
        <h1>Changes Reducer: {changes}</h1>
        <pre>
            {JSON.stringify(counter,null,2)}
        </pre>
        
        <button onClick={()=>increaseBy(1)}>
            +1
        </button>
        <button onClick={()=>increaseBy(5)}>
            +5
        </button>
        <button onClick={()=>increaseBy(10)}>
            +10
        </button>
        <button onClick={handleReset}>
            Reset
        </button>
    </>
  )
}




