import React, { useContext } from "react";
import styles from "./taskHeader.module.css";
// import info from '../../data/tasks.json'
import  {storeData} from '../ContextAPI'
const TaskHeader = () => {
  const {flowData}= useContext(storeData)
  console.log(flowData)
  // sample values to be replaced
  let len=flowData.filter((e)=>e.done==false)
  let totalTask =flowData.length
  let unCompletedTask =len.length
  
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
     You have  <b data-testid="header-remaining-task">{unCompletedTask}</b>of
      <b data-testid="header-total-task">{totalTask}</b>tasks remaining
    </div>
  );
};

export default TaskHeader;
