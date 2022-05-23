import { Component } from "react";
import AppFilter from "../app-filter/app-filter";

import "./search-panel.scss";

class SearchPanel extends Component{
	constructor(props){
		super(props);
		this.state = {
			search: ""
		}
	}

	onUpdateSearch = (e) => {
		const search = e.target.value;
		this.setState({search: search});
		this.props.onUpdateSearch(search);
	}

	render(){
		const {filterButtons, onChangeFilter, filter} = this.props;
		return (
			<div className="search-panel">
				<label htmlFor="search-panel__input" className="search-panel__input">
	  				<input 
					  type="text" 
					  id="search-panel__input" 
					  placeholder=" "
					  value={this.state.search}
					  onChange={this.onUpdateSearch}/>
	  				<span className="search-panel__label">Поиск</span>
	  				<span className="search-panel__focus-bg"></span>
				</label>

				<AppFilter 
					filterButtons={filterButtons}
					filter={filter}
					onChangeFilter={onChangeFilter}
				/>
			</div>
		);
	}
}

export default SearchPanel;