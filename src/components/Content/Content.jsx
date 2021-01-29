import React from "react";
import style from "./Content.module.css";

function Content(props) {
    const value = props.valueInput

    const items = props.tasks.map(item => {

        if (item.task.toLowerCase().indexOf(value.toLowerCase()) === -1) {
            return
        }
        if (props.importantTasks && !item.important) {
            return
        }
        if (props.doneTasks && !item.done) {
            return
        }

        return (
            <div className={style.item}>
                <span onClick={() => props.toggleDone(item.id)} className={`${style.task} ${item.important ? style.importantTask : ""}
                                ${item.done ? style.doneTask : ""}`}>{item.task}</span>
                <div>
                    {item.important ?
                        <button className={`${style.btns} ${style.noImportant}`} onClick={() => props.toggleImportant(item.id)}>Не важно</button> :
                        <button className={`${style.btns} ${style.important}`} onClick={() => props.toggleImportant(item.id)}>Важно</button>}
                    <button className={`${style.btns} ${style.delete}`} onClick={() => props.deleteTask(item.id)}>Удалить</button>
                </div>
            </div>
        )
    })


    return (
        <div className={style.content}>
            { items}
        </div>
    )
}

export default Content;