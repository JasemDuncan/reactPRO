import React, { useReducer } from 'react'

interface CounterState {
    counter :number;
    previous:number;
    changes :number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

type CounterAction = 
    | { type: 'increaseBy', payload: {value: number;}}
    | { type: 'reset' };

const counterReducer =  (state: CounterState, action: CounterAction): CounterState => {

    const { counter, changes } = state

    switch (action.type){
        case 'increaseBy':
            return {
                counter: counter + action.payload.value,
                changes: changes+1,
                previous: counter,
            };

        case 'reset':
            return {
                counter:0,
                changes:0,
                previous:0,
            };
        default:
            return state;
    }
}

export const CounterReducerComponent = () => {
    
    const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset=() =>{
        dispatch({type: 'reset'})
    }

    const increaseBy = (value: number) => {
        dispatch({type: 'increaseBy', payload:{value:value}})
    }

  return (
    <>
        <h1>Counter Reducer: {counter}</h1>
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




