import "./app-filter.scss";

const AppFilter = (props) => {

const onChangeFilter = (e) => {
	const {onChangeFilter} = props;
	onChangeFilter(e.currentTarget.name);
}

const {filterButtons, filter} = props;

const buttons = filterButtons.map(({id, title}) => {
		let clazz = (filter === id) ? "btn active" : "btn";
		return <button 
				key={id}
				className={clazz}
				type="button"
				name={id}
				onClick={onChangeFilter}
				>
				{title}
			</button>
	});

	return (
		<div className="btn-group">
			{buttons}
		</div>
	);
}

export default AppFilter;