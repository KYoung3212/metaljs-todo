'use strict';

import JSXComponent from 'metal-jsx';

// Preparing the TodoItem for consuming the data passed fromTodoApp:


class TodoItem extends JSXComponent {
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
