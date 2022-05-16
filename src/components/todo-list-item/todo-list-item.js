import "./todo-list-item.scss";

const TodoListItem = (props) => {

	const {title, finish, important, onDelete, onToggleProperty} = props;
	const importantClass = important ? " important" : "";
	const finishClass = finish ? " finish" : "";
	return(
		<li className={"todo-list-item" + importantClass}>
			<span className={"todo-list-item__title" + finishClass} onClick={onToggleProperty} data-toggle="finish">{title}</span>
			{/*<input type="text" className="todo-list-item__input" />*/}
			<div className="todo-list-item__menu">
				<button type="button" className="btn todo-list-item__btn-write"></button>
				<button type="button" className="btn todo-list-item__btn-important"
				onClick={onToggleProperty} data-toggle="important"></button>
				<button type="button" className="btn todo-list-item__btn-delete" onClick={onDelete}></button>
			</div>
		</li>
	);
}

export default TodoListItem;