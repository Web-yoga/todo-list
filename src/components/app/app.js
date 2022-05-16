import { Component } from 'react';
import nextId from "react-id-generator";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import TodoAddForm from './../todo-add-form/todo-add-form';

import "./app.scss";

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			data : [
				{id: "1", title:"Первое дело", important:false, finish: true},
				{id: "2", title:"Второе дело", important:true, finish: false},
				{id: "3", title:"Третье дело", important:false, finish: false},
			]
		}
	}

	deleteItem = (id) => {
		console.log(id);
		this.setState(({data}) => {
			return {
				data : data.filter(elem => elem.id !== id)
			}
		})
	}

	onAddItem = (item) => {
		const newItem = {
			id: nextId(), 
			title:item.title, 
			important:false
		}
		this.setState(({data}) => ({data: [...data, newItem]}))
	}

	onToggleProperty = (id, property) => {
		this.setState(({data}) => ({
			data: data.map((item) => {
				if(item.id === id) { 
					return {...item, [property]: !item[property]}
				}
				return item;
			})
		}));
	}

	render(){
		const {data} = this.state;
		const leftListItemsCount = data.filter(item => (!item.finish)).length;
		const finishListItemsCount = data.filter(item => (item.finish)).length;
		const importantListItemsCount = data.filter(item => (!item.finish && item.important)).length;


		return (
			<div className="app">
				<div className="conteiner">
					<AppHeader 
						leftListItemsCount={leftListItemsCount}
						finishListItemsCount={finishListItemsCount}
						importantListItemsCount={importantListItemsCount}
					/>
				</div>
				<div className="conteiner">
					<SearchPanel />
				</div>
				<div className="conteiner">
					<TodoList 
						data={data} 
						onDelete={this.deleteItem} 
						onToggleProperty={this.onToggleProperty}
					/>
					<TodoAddForm onAddToDo={this.onAddItem}/>
				</div>
			</div>
		  );
	}
}

export default App;