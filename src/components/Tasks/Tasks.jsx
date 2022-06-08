import React, { useEffect } from "react";
import styles from "./tasks.module.css";
import info from "../../data/tasks.json"
import Task from "../Task/Task"
import { useSelector } from "react-redux";
const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  useEffect(()=>{

  })
  const todoData=useSelector((store1)=>store!.todo)
  return (
    <>

      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {info.map((e)=><Task key={e.id}/>)}
        <Task store={e} key={e.id}/>
      </ul>
      {info.length==0?<div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
          Add Task

      </div>:null}
    </>
  );
};

export default Tasks;
