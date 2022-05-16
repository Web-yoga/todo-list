import AppFilter from "../app-filter/app-filter";

import "./search-panel.scss";

const SearchPanel = () => {
	return (
		<div className="search-panel">
			<label htmlFor="search-panel__input" className="search-panel__input">
  				<input type="text" id="search-panel__input" placeholder=" "/>
  				<span className="search-panel__label">Поиск</span>
  				<span className="search-panel__focus-bg"></span>
			</label>

			<AppFilter />
		</div>
	);
}

export default SearchPanel;