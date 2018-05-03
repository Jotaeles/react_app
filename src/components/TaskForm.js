import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(){
        super();
        this.state = {
            title:'',
            responsible:'',
            description:'',
            priority:'low'
        }
    }

    handleInput(e){
        console.log(e.target.value, e.target.name);
    }
    render(){
        return(
            <div className="card">
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" className="form-control" name="title" placeholder="Title" onChange={ this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="responsible" placeholder="Responsible" onChange={ this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="description" placeholder="Description" onChange={ this.handleInput}/>
                    </div>
                    <select className="form-control" name="priority" onChange={ this.handleInput}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default TaskForm;