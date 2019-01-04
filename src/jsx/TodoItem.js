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
		return (
			<li
				class="todo-item"
			>
				[TODO]
			</li>
		);
	}
}

export {TodoItem}
export default TodoItem;
