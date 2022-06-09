import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({store}) => {
  // sample value to be replaced
  // let count = 0;
  const [count , setCount]= useState(store.count)
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={()=>{
        setCount(count+1)
      }}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={()=>{
        if(count==0){
          return
        }
        setCount(count-1)
      }}>-</button>
    </div>
  );
};

export default Counter;
