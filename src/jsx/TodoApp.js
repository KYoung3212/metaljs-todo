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

			// Deleting of Todos
	handleDelete(e) {
		e.stopPropagation();
		let index = this.state.todos.indexOf(e.index);
		let allTodos = [...this.state.todos];
		allTodos.splice(index, 1);
		this.state.todos = allTodos;
	}

	deleteCompleted(){
		this.state.todos = this.filterTodos(false);
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
