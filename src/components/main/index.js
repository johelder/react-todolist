import React, { Component } from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa' 

import { Container, Form, Button, TodoList } from './styles'

export default class Main extends Component {
    state = {
        newTask: '',
        taskList: []
    }

    componentDidMount() {
        const list = localStorage.getItem('taskList')

        this.setState({ taskList: JSON.parse(list) })
    }

    componentDidUpdate(_, prevState) {

        const { taskList } = this.state


        if(prevState !== this.state) {
            localStorage.setItem('taskList', JSON.stringify(taskList))
        }
    }

    handleInput = e => {
        this.setState({ newTask: e.target.value })
    }

    handleSubmit = e => {

        e.preventDefault()

        if(this.state.newTask === '') {
            alert('Por favor, preecha o campo de tarefa')
            return
        }

        this.setState({ taskList: [...this.state.taskList, this.state.newTask],  newTask: '' })
    }

    deleteTask = task => {
        const newList = this.state.taskList.filter(taskToExlude => taskToExlude !== task)

        this.setState({ taskList: newList, newTask: '' })
    }
    

    render() {

        const { taskList } = this.state

        return (
            <Container>
                <h1>React TodoList</h1>

                <Form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInput} type="text" value={this.state.newTask} placeholder="Adicionar tarefa"/>
                    <Button>
                        <FaPlus />
                    </Button>
                </Form>

                <TodoList> 
                    {taskList.map(task => (
                        <li key={task}>
                            <span>{task}</span>
                            <Button onClick={() => {this.deleteTask(task)}}>
                                <FaTrash />
                            </Button>
                        </li>
                    ))}
                </TodoList>
            </Container>    
        )
    }
}