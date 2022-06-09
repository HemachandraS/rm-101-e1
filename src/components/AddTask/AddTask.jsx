import React, { useContext, useState } from "react";
import styles from "./addTask.module.css";
import  {storeData} from '../ContextAPI'
import { v4 } from "uuid";

  
const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const {addData}= useContext(storeData)
  const [formData,setFormData]=useState({done:false,count:1,text:""})
  function handler(e){
    const {name,value}=e.target
    setFormData({...formData,id:v4(),[name]:value})
  }
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" name="text" onChange={handler}/>
      <button data-testid="add-task-button" onClick={()=>{
        if(formData.text==""){
          return
        }
        addData(formData)
      }}>Add</button>
    </div>
  );
};

export default AddTask;
