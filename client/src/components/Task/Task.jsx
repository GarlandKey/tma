import './Task.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Task({ key, title, description, status }) {

	const [statusState, setStatusState] = useState('pending')

	const handleChange = () =>{
		setStatusState({status})
	}

	return (
		<>
			<section className="task">
				<section className="task-col-left">
					<section className="task-title">
						<h2>{title}</h2>
					</section>
				
					<section className="task-description">
						<p>{description}</p>
					</section>
				</section>

				<section className="task-col-right">
					<label htmlFor="status">Status</label>
					<select form="task" id="status" name="status" required={true} value={status} onChange={handleChange}>
						<option value="pending">pending</option>
						<option value="in progress">in progress</option>
						<option value="completed">completed</option>
					</select>

					<section className="task-btns">
						<Link to='edit'><button id={key}>✏️</button></Link>
						<Link to='edit'><button id={key}>🗑️</button></Link>
					</section>
				</section>
			</section>
		</>
	)
}