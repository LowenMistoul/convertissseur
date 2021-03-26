import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import "antd/dist/antd.css";
import style from './stopwatch.module.scss'
import cn from 'classnames'
import { Button, Space } from 'antd';

var min = 0;
var h = 0;
let result =[];
let ppP ;
let ppG ;
let pR;

export default function Stopwatch(){
    function useInterval(callback: () => void, delay: number | null) {
         const savedCallback = useRef<() => void | null>();
        
          // Remember the latest callback.
          useEffect(() => {
            savedCallback.current = callback
          })
        
          // Set up the interval.
          useEffect(() => {
            function tick() {
              if (typeof savedCallback?.current !== 'undefined') {
                savedCallback?.current()
              }
            }
        
            if (delay !== null) {
              const id = setInterval(tick, delay)
              return () => clearInterval(id)
            }
          }, [delay])
        }
    const [time , setTime] = useState(['00','00','00']);
    const [count, setCount] = useState<number>(0)
     // Dynamic delay
     const [delay, setDelay] = useState<number>(50)
     // ON/OFF
     const [isPlaying, setPlaying] = useState<boolean>(false)
  
     useInterval(
            () => {

            if (count >= 60){
                setCount(0)
                min++;
                if(min>=60){
                    min =0 
                    h++;
                }
            }else{
                setCount(count + 0.05 + 0.0005);
            }

            if(h<10){
                time[0] = '0' + h.toString()
            }else {
                time[0] = h.toString()
            }
            if(min<10){
                time[1] = '0' + min.toString()
            }else {
                time[1] = min.toString()
            }
            if(count < 10){
                time[2] = '0' + count.toFixed(3)
            }else {
                time[2] = count.toFixed(3)
            }
            setTime([time[0],time[1],time[2]])
           
              // Your custom logic here
            },
            // Delay in milliseconds or null to stop it
            isPlaying ? delay : null,
         )

    function reset(){
        if(isPlaying){
            var node = time[0]+':'+time[1]+':'+time[2]
            var element ;

            element = [<tr className={style.tr}>{node}</tr>]

            if(result.length<5){
                result = element.concat(result);
            }else{
                result.pop();
                result = element.concat(result);
            }
        }else{
            setCount(0);
            setTime(['00','00','00'])
            h = 0 ;
            min =0 ;
            result=[];
        }
    }

    function formatter(current : string){
        var number = Number.parseInt(current);
        return number;
    }

    /*function reformatter(current : number){
        var string = current.toString();
        var newstring;
        while(string.length <9){
            string = '0' + string;
        }
    }*/

    return(
        <>
        <p className={style.time}>{time[0]+':'+time[1]+':'+time[2]}</p>
        <div className={style.div} >
            
            <Button className={isPlaying ?style.stop : style.play} shape={'circle'} onClick={() => setPlaying(!isPlaying)}>
                {isPlaying ? 'stop' : 'start'}
            </Button>

            <Button 
                disabled={!isPlaying && count == 0 } 
                className={isPlaying ?style.reset : style.note} shape={'circle'} onClick={reset} >
                {isPlaying ? 'note' : 'reset'}
            </Button>
        </div>
        <table className={style.table}>
            {result}
        </table>
        </>

    )
}