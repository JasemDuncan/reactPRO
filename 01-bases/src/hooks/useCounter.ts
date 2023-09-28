import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {gsap} from 'gsap'



export const useCounter = ({maxCount = 10 }) => {

    const [counter,setCounter] = useState(8)

    const elementToAnimate = useRef<any>(null);

    const tl=useRef(gsap.timeline())

    const handleClick=() =>{
        setCounter(prev => Math.min(prev+1, maxCount));
    }

    useLayoutEffect(() => {

        console.log(elementToAnimate.current);

        if (!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current,{y:-10, duration: 0.2, ease: 'ease.out'})
        tl.current.to(elementToAnimate.current,{y:0, duration: 0.4, ease: 'ease.bounce.out'})
        tl.current.pause();

    }, [])

    useEffect(() => {
        //if(counter < maxCount) return;
        tl.current.play(0);
    }, [counter]) //Arreg;p de dependencia
    
    
    return {
        counter,
        elementToAnimate,
        handleClick,
    }
}
