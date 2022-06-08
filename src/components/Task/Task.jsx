import React from "react";
import styles from "./task.module.css";
// import remove from "../../assets/remove.svg"

const Task = ({store}) => {
  // NOTE: do not delete `data-testid` key value pair
  const {id,text,done,count}=store
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{store.text}</div>
      {/* Counter here */}
      <Counter/>
      <button data-testid="task-remove-button"></button>
    </li>
  );
};

export default Task;
