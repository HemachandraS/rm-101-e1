import React, { useContext } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import {icon} from "../../assets/remove.svg"
// import remove from "../../assets/remove.svg"
import  {storeData} from '../ContextAPI'


const Task = ({store}) => {
  const {deleteData}= useContext(storeData)
  // NOTE: do not delete `data-testid` key value pair
  const {id,text,done,count}=store
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" checked={done?true:false}/>
      <div data-testid="task-text" className={done?styles.line:null}>{store.text}</div>
      {/* Counter here */}
      <Counter store={store}/>
      <button data-testid="task-remove-button" onClick={()=>{
        deleteData(id)
      }}>
      <svg
    height="21"
    viewBox="0 0 21 21"
    width="21"
    xmlns="http://www.w3.org/2000/svg"
    >
    <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5 5)"
    >
        <path d="m10.5 10.5-10-10z" />
        <path d="m10.5.5-10 10" />
    </g>
</svg>
      </button>
    </li>
  );
};

export default Task;
