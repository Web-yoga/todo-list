import { Component } from "react";
import "./todo-add-form.scss";

class TodoAddForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			title : "" 
		}
	}

	onValueChange = (e) =>{
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	onAddToDo = (e) => {
		e.preventDefault();
		this.props.onAddToDo({title:this.state.title});
		this.setState({
			title : ""
		});
	}

	render(){
		const {title} = this.state;
		return (
			<form className="todo-add-form" onSubmit={this.onAddToDo}>
					<label htmlFor="todo-add-form__input" className="todo-add-form__input">
						  <input 
						  type="text" 
						  id="todo-add-form__input" 
						  placeholder=" "
						  name="title"
						  value={title}
						  onChange={this.onValueChange}
						  />
						  <span className="todo-add-form__label">Новое дело</span>
						  <span className="todo-add-form__focus-bg"></span>
					</label>
					<button 
						type="submit" 
						className="btn todo-add-form__add" 
					>Добавить</button>
			</form>
		);
	}
}

export default TodoAddForm;