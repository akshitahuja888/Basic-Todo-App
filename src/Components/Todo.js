import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[{task:'Solve LeetCode',id:1},
            {task:'Check for Opportunities',id:2}],
            currTask:''
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            currTask:e.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:''
        })
    }
    handleDelete = (id) => {
        let narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id!==id
        })
        this.setState({
            tasks:[...narr]
        })
    }
    render() {
        return (
            <div class="container my-4">
                <div class="input-group mb-3 justify-content-center">
                    <input type="text" placeholder="Enter task" aria-describedby="button-addon2" value={this.state.currTask} onChange={this.handleChange}/>
                    <button class="btn btn-success"  id="button-addon2" onClick={this.handleSubmit}>SAVE</button>
                </div>
                <ul class="list-group my-3 ">
                {
                    this.state.tasks.map(function(taskObj){
                        return(
                            <li class="list-group-item">
                            {/* key={taskObj.id} */}
                            <h3>{taskObj.task}</h3>
                            <button class="btn btn-danger justify-content-center" onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
                            </li>
                        )
                    }.bind(this)
                    )
                }
                </ul> 
            </div>
        )
    }
}
