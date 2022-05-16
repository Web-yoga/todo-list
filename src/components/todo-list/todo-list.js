import { Component } from "react";
import TodoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.scss";

class TodoList extends Component {
	/*
	constructor(props){
		super(props);
	}
	*/
	
	render() {
		const {data, onDelete, onToggleProperty} = this.props;
		const elements = data.map(item => {
			const {id, ...itemProps} = item;
			return (
				<TodoListItem 
					key={id} 
					{...itemProps} 
					onDelete={() => onDelete(id)}
					onToggleProperty={(e) => onToggleProperty(id, e.currentTarget.getAttribute("data-toggle"))}
					/>
			);
		});

		return (
			<ul className="todo-list">
				{elements}
			</ul>
		);
	}
	
}

export default TodoList;