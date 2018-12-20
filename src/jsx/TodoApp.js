'use strict';

import JSXComponent from 'metal-jsx';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

import '../todo-app.scss';

class TodoApp extends JSXComponent {

		// Adding Todos
		addTodo(e) {
			let title = e.value;
			let newTodo = {
				title,
				complete: false
			}
			this.state.todos = [newTodo, ...this.state.todos]
		}

		handleTodoClicked(e) {
			// Connected to the TodoItem Emit function, which gives us access to the index of the specific todo item.
			this.toggleTodo(e.todo);
		}
		
	render() {
		return (
			<div class="todo-app">
				<ul>
					[TODO]
				</ul>
			</div>
		);
	}
}

export {TodoApp}
export default TodoApp;
