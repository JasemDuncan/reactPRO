import React, { useState, useEffect, useRef } from 'react';
import {gsap} from 'gsap'

const MAXIMUN_COUNT=10;

export const CounterEffect = () => {

    const [counter,setCounter] = useState(8)

    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick=() =>{
       
            setCounter(prev => Math.min(prev+1, MAXIMUN_COUNT));
        
        
    }

    useEffect(() => {
        if (counter < 10) return;

        console.log('%cCounter es llego al valor maximo que  es 10','color: red; background-color: black;')

        const tl=gsap.timeline();

        tl.to(counterElement.current,{y:-10, duration: 0.2, ease: 'ease.out'})
        tl.to(counterElement.current,{y:0, duration: 0.4, ease: 'ease.bounce.out'})

    }, [counter]) //Arreg;p de dependencia
    

  return (
    <>
        <h1>Counter Effect: </h1>
        <h2 ref={ counterElement }>{counter}</h2>
        <button onClick={handleClick}>
            +1
        </button>
    </>
  )
}




