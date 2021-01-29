import React from "react";
import style from "./Header.module.css"

function Header(props) {

    const allTasks = props.tasks.length;
    const doneTasks = props.tasks.filter(item => item.done === true).length

    return (
        <div className={style.header}>
            <div className={style.myTask}>
                Мой список задач
            </div>
            <div className={style.doneTask}>
                Выполнено {doneTasks} задача из {allTasks}
            </div>
        </div>
    )
}

export default Header