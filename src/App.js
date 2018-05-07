import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { task } from './task.json';
import TaskForm from './components/TaskForm';

class App extends Component {

    constructor(){
        super();
        
        this.state = {
            task : task
        }

        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(tsk){
        this.setState({
           task: [...this.state.task, tsk] 
        })
    }

    handleRemoveTask(index){

        if(window.confirm('Are you sure you want to delete it?')){
            this.setState({
                task : this.state.task.filter((e, i)=>{
                    return i !== index;
                })
            })
        }
    }

	render() {

        const task = this.state.task.map( (tsk, i) => {
            return  (
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{ tsk.title }</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                { tsk.priority }
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{ tsk.description }</p>
                            <p>{ tsk.responsible }</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={this.handleRemoveTask.bind(this, i)}>Delete</button>
                        </div>
                    </div>
                </div>
            );
        })

		return (
			<div className="App">
                <nav className='navbar navbar-dark bg-dark'>
                    <a className='text-white' href="">
                        Task
                        <span className="badge badge-pill badge-light ml-2">
                            { this.state.task.length }
                        </span>
                    </a>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-2">
                            <TaskForm onAddTask = {this.handleAddTask}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        { task }
                    </div>
                </div>
				<img src={logo} className="App-logo" alt="logo" />
			</div>
		);
	}
}

export default App;
