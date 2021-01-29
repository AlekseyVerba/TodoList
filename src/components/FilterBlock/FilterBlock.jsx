import React from "react";
import style from "./FilterBlock.module.css";

function FilterBlock(props) {
    return (
        <div className={style.filterBlock}>
            <input className={style.input} value={props.valueInput} onChange={props.changeValueInput} />
            <button className={`${style.btn} ${props.allTasks ? style.active : ""}`} onClick={props.showAll}>Все</button>
            <button className={`${style.btn} ${props.importantTasks ? style.active : ""}`} onClick={props.showImportant}>Важные</button>
            <button className={`${style.btn} ${props.doneTasks ? style.active : ""}`} onClick={props.showDone}>Выполненные</button>
        </div>
    )
}

export default FilterBlock;

