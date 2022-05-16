import "./app-filter.scss";

const AppFilter = () => {
	return (
		<div className="btn-group">
			<button 
				className="btn"
				type="button">
					Все
			</button>
			<button 
				className="btn"
				type="button">
					Активные
			</button>
			<button 
				className="btn"
				type="button">
					Завершенные
			</button>
		</div>
	);
}

export default AppFilter;