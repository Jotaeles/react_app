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
    }

	render() {

        const task = this.state.task.map( (tsk, i) => {
            return  (
                <div className="col-md-4">
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
                            <TaskForm/>
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
