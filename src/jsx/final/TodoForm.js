'use strict';

import JSXComponent from 'metal-jsx';


// Now you can use the value property from STATE to keep track of the changes made to the input value. This makes the input a controlled input, where the value of the input is controlled by the state of the component. In other words, when the value of the state changes, it automatically changes the value in the input as well, keeping the two in sync.


class TodoForm extends JSXComponent {
	render() {
		return (
			<form class="todo-form" data-onsubmit={this.handleSubmit.bind(this)}>
				<label for="title">
					Todo
					<input
						data-onkeyup={this.handleChange.bind(this)}
						name="title"
						value={this.state.value}
					/>
				</label>
				<button type="submit">Add</button>
			</form>
		);
	}

	handleSubmit(event) {
		event.preventDefault();

		if (this.state.value) {
			this.emit('todoAdd', {
				title: this.state.value
			});

			this.state.value = '';
		}
	}

	handleChange(event) {
		this.state.value = event.target.value;
	}
}

TodoForm.STATE = {
	value: {
		value: ''
	}
};

export {TodoForm}
export default TodoForm;
