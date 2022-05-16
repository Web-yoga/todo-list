import DeclensionOfNumerals from "../../helpers/declension";

import "./app-header.scss";

const AppHeader = ({leftListItemsCount, finishListItemsCount, importantListItemsCount}) => {
	return (
		<div className="app-header">
			<h1>Список дел</h1>
			<div>Осталось сделать {leftListItemsCount} {DeclensionOfNumerals(leftListItemsCount,["дело","дела","дел"])} ({importantListItemsCount} {DeclensionOfNumerals(importantListItemsCount,["важное дело","важных дела","важных дел"])})</div>
			<div>Сделано {finishListItemsCount} {DeclensionOfNumerals(finishListItemsCount,["дело","дела","дел"])}</div>
		</div>
	);
}

export default AppHeader;