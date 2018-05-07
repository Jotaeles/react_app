import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(){
        super();
        this.state = {
            title:'',
            responsible:'',
            description:'',
            priority:'low'
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){

        const { value, name} = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        console.log('sending the data');
        this.props.onAddTask(this.state);
    }
    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
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
                    <button type="submit" className="btn btn-primary mt-2">Save</button>
                </form>
            </div>
        )
    }
}

export default TaskForm;