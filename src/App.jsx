import './App.css'
import { IoMdAdd } from 'react-icons/io'
import TodoItem from './components/TodoItem'
import { useState, useEffect } from 'react'

function App() {
	const [todo, setTodo] = useState('')

	//Get from Local storage
	const [todos, setTodos] = useState(() => {
		const storedTodos = localStorage.getItem('todos')
		if (storedTodos) {
			return JSON.parse(storedTodos)
		} else {
			return []
		}
	})

	// useEffect for local storage
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	//Create new todo object
	const newTodo = {
		id: Math.floor(Math.random() * 1000),
		title: todo,
		done: false,
	}

	function addItem() {
		if (todo.length === 0) {
			alert('Enter a task')
		} else if (
			//Update array of todos
			setTodos([...todos].concat(newTodo))
		)
			//Clear input field
			setTodo('')
	}

	//Press Enter to add
	function keyPress(e) {
		if (e.key === 'Enter') {
			addItem()
		}
	}

	//Delete todo
	function deleteTodo(id) {
		let updatedTodos = todos.filter((todo) => todo.id !== id)
		setTodos(updatedTodos)
	}

	//Add/remove checkmark
	function toggleDone(id) {
		let checkedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.done = !todo.done
			}
			return todo
		})

		setTodos(checkedTodos)
	}

	return (
		<div className='container'>
			<div className='todo-header'>
				<input
					onChange={(e) => setTodo(e.target.value)}
					onKeyDown={keyPress}
					type='text'
					value={todo}
					className='input-value'
					placeholder='Enter a task...'
				/>
				<button onClick={addItem} className='add-btn'>
					<IoMdAdd size={20} />
				</button>
			</div>
			{todos.map((todo) => {
				return (
					<div key={todo.id} className='todo-list'>
						<TodoItem title={todo.title} id={todo.id} done={todo.done} toggleDone={toggleDone} deleteTodo={deleteTodo} />
					</div>
				)
			})}
		</div>
	)
}

export default App
