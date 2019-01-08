'use strict';

import JSXComponent from 'metal-jsx';

// Preparing the TodoItem for consuming the data passed fromTodoApp:


class TodoItem extends JSXComponent {
	handleClick(e){
		// Notifies the TodoApp component that a todo item was completed
		this.emit('todoClicked', {
			todo: this.props.todo
		})
	}

	deleteItem(e){
		let stopPropagation = e.stopPropagation.bind(e);
		this.emit('deleteTodo', {
			index: this.props.todo,
			stopPropagation 
		})
	}
	render() {
		const completeOrNot = `todo-item${this.props.todo.complete ? ' todo-item-complete' : ''}`
		return (
			<div>
				<li class={completeOrNot} data-onclick={this.handleClick.bind(this)}>
					{this.props.todo.title}
					<span>
						<button class="deleteButton" data-onclick={this.deleteItem.bind(this)}>X</button>
					</span>
				</li>	
			</div>

			
		);
	}
}

TodoItem.PROPS = {
	item: {
		value: null
	},
	index: {
		value: null
	}
}

export {TodoItem}
export default TodoItem;
