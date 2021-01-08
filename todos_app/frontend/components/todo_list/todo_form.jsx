import React from "react";

export default class TodoForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: "",
            body: ""
        };

        this.handleTodoClick = this.handleTodoClick.bind(this);
        this.handleTodoChange = this.handleTodoChange.bind(this);
    }

    handleTodoChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleTodoClick(e){
        e.preventDefault();
        this.props.addTodo({
            title: this.state.title,
            body: this.state.body
        })
        this.setState({
            body: "",
            title: ""
        });
    }

    render(){
        return (
            <>
                <form action="">
                    <label htmlFor="form-title">Title:
                    <br></br>
                        <input onChange={this.handleTodoChange} name="title" type="text" value={this.state.title}/>
                    </label>
                    <br></br>
                    <label htmlFor="form-body">Body:
                    <br></br>
                        <textarea onChange={this.handleTodoChange} name="body" type="textbox" value={this.state.body}/>
                    </label>
                    <br></br>
                    <button onClick={this.handleTodoClick}>Add ToDo</button>
                </form>
            </>
        );
    }

}