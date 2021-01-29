import React, { Component } from "react";
import FilterBlock from "./components/FilterBlock/FilterBlock";
import Content from "./components/Content/Content";
import AddBlock from "./components/AddBlock/AddBlock";
import Header from "./components/Header/Header";
import style from "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, task: "Выучить React", important: false, done: false },
                { id: 2, task: "Сделать список задач", important: false, done: false },
                { id: 3, task: "Покушать", important: false, done: false },
                { id: 4, task: "Сходить в магазин", important: false, done: false }
            ],
            valueInputAdd: "",
            valueInputFilterInput: "",
            allTasks: true,
            importantTasks: false,
            doneTasks: false
        }
        this.maxId = 100
    }

    toggleImportant = (id) => {
        this.setState(state => ({
            data: state.data.map(item => {
                if (item.id === id) {
                    item.important = !item.important
                }
                return item
            })
        }))
    }

    toggleDone = (id) => {
        this.setState(state => ({
            data: state.data.map(item => {
                if (item.id === id) {
                    item.done = !item.done
                }
                return item
            })
        }))
    }

    deleteTask = (id) => {
        const el = [...this.state.data]
        const finishArr = []
        el.forEach(item => {
            if (item.id !== id) {
                finishArr.push(item)
            }
        })
        this.setState(state => ({
            data: finishArr
        }))
    }

    changeInputValueAdd = (e) => {
        this.setState({
            valueInputAdd: e.target.value
        })
    }

    changeInputValueFilter = (e) => {
        this.setState({
            valueInputFilterInput: e.target.value
        })
    }

    addTask = () => {
        if (this.state.valueInputAdd === "" || this.state.valueInputAdd === " ") {
            return
        }
        const task = { id: this.maxId++, task: this.state.valueInputAdd, important: false, done: false }
        const newArr = [task, ...this.state.data]
        this.setState(state => ({
            data: newArr,
            valueInputAdd: ""
        }))
    }

    showAllTasks = () => {
        this.setState({
            allTasks: true,
            importantTasks: false,
            doneTasks: false,
        })
    }

    showImportantTasks = () => {
        this.setState(state => ({
            importantTasks: !state.importantTasks,
            allTasks: false
        }))
    }

    showDoneTasks = () => {
        this.setState(state => ({
            doneTasks: !state.doneTasks,
            allTasks: false
        }))
    }

    render() {
        return (
            <div>
                <Header tasks={this.state.data} />
                <FilterBlock valueInput={this.state.valueInputFilterInput} changeValueInput={this.changeInputValueFilter}
                    allTasks={this.state.allTasks} importantTasks={this.state.importantTasks} doneTasks={this.state.doneTasks}
                    showAll={this.showAllTasks} showImportant={this.showImportantTasks} showDone={this.showDoneTasks} />
                <Content tasks={this.state.data} toggleImportant={this.toggleImportant} toggleDone={this.toggleDone} deleteTask={this.deleteTask}
                    valueInput={this.state.valueInputFilterInput} allTasks={this.state.allTasks} importantTasks={this.state.importantTasks}
                    doneTasks={this.state.doneTasks} />
                <AddBlock valueInput={this.state.valueInputAdd} changeInputValueAdd={this.changeInputValueAdd} addTask={this.addTask} />
            </div>
        )
    }
}

export default App;