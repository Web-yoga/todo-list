import { Component } from "react";
import "./todo-add-form.scss";

class TodoAddForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			title : "",
			formError : false
		}
	}

	onValueChange = (e) =>{
		this.setState({
			[e.target.name] : e.target.value,
			formError : false
		});
	}

	onAddToDo = (e) => {
		e.preventDefault();
		if(this.state.title.length !== 0){
			this.props.onAddToDo({title:this.state.title});
			this.setState({
				title: "",
				formError: false
			});
		}else{
			this.setState({
				formError : "Поле не должно быть пустым"
			});
		}
	}

	render(){
		const {title, formError} = this.state;
		const errorClass = formError === false ? "" : " error";
		const errorMessage = formError === false ? <div className="error-message"></div> : <div className="error-message">{formError}</div>;
		return (
			<form className="todo-add-form" onSubmit={this.onAddToDo}>
					<label htmlFor="todo-add-form__input" className={"todo-add-form__input" + errorClass}>
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
						  {errorMessage}
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