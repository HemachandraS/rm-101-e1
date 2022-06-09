import React, { useContext, useEffect } from "react";
import styles from "./tasks.module.css";
import info from "../../data/tasks.json"
import Task from "../Task/Task"
import  {storeData} from '../ContextAPI'


const Tasks = () => {
  const {flowData}= useContext(storeData)
  // NOTE: do not delete `data-testid` key value pair
  useEffect(()=>{

  },[])
 
  return (
    <>

      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {flowData.map((e)=><Task store={e} key={e.id}/>)}
        
      </ul>
      {flowData.length==0?<div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
          Add Task

      </div>:null}
    </>
  );
};

export default Tasks;
