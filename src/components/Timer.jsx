import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from "./Timer.module.css"

const Timer = () => {
    const [starttime,setStarttime]=useState("")
    const [endtime,setEndtime]=useState("")
    const [timer,setTimer]=useState("")

    useEffect(()=>{

        let id=setInterval(()=>{
            setTimer((prev)=>prev+1)
        },1000)

      if(timer==endtime){
          clearInterval(id)
          
         
         
      }

      return()=>{
        clearInterval(id)
        
      }
      
    },[timer])





const handlestart=()=>{
    setTimer(+starttime)
    setEndtime(+endtime)
}

const handlerestart=()=>{
    setTimer("")
    setEndtime("")
    setStarttime("")

}

  return (
    <div>
       
        <h1 className={styles.time}>{timer}</h1>
     <br/>
    <input className={styles.input}
     type="text"
     placeholder='Enter start time.....'
     onChange={(e)=>setStarttime(e.target.value)}
    value={starttime}
     />
   
    <input  className={styles.input}
    type="text" 
    placeholder='Enter end time.....'
    onChange={(e)=>setEndtime(e.target.value)}
    value={endtime}
    />
    <br/>

    <button className={styles.btn}
     onClick={handlestart}>Start</button>
    <button className={styles.btn}
    onClick={handlerestart}>Reset</button>
    </div>
   
  )
}

export default Timer