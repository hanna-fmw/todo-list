import '../App.css'
import { TfiTrash } from 'react-icons/tfi'
import { IoMdCheckmark } from 'react-icons/io'

function TodoItem({ title, id, toggleDone, deleteTodo, done }) {
	return (
		<div className='todo-item'>
			<span className={`${done ? 'active' : ''}`}>{title}</span>
			<div className='todo-btns'>
				<button onClick={() => deleteTodo(id)} className='del-btn'>
					<TfiTrash size={20} color={'white'} className='del-icon' />
				</button>
				<button
					onClick={() => {
						toggleDone(id)
					}}
					className='done-btn'>
					<span style={{ color: done ? '#00e500' : 'white' }}>
						<IoMdCheckmark size={20} className='done-icon' />
					</span>
				</button>
			</div>
		</div>
	)
}

export default TodoItem
