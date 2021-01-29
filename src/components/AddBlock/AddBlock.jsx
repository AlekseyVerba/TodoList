import React from "react";
import style from "./AddBlock.module.css";

function AddBlock(props) {
    return (
        <div className={style.addBlock}>
            <input className={style.input} value={props.valueInput} onChange={(e) => props.changeInputValueAdd(e)} />
            <button className={style.addTask} onClick={props.addTask}>Добавить задание</button>
        </div>
    )
}

export default AddBlock;