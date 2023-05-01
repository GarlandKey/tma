import './TaskList.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Task from '../../components/Task/Task'

const BASE_URL = 'http://127.0.0.1:2121/tasks'

// const BASE_URL = import.meta.env.REACT_APP_BASE_URL

export default function TaskList() {

	const [tasks, setTasks] = useState([])

	useEffect(() => {
		axios.get(`${BASE_URL}`)
		.then((res) => {
			setTasks(res.data)
		})
	}, [])

	return (
		<>
			<div className="container">
				<header>
					<section className="header-col-left">
						<h1>Task Management Application</h1>
					</section>
					
					<section className="header-col-right">
						<Link to='add'><button id="add">Add Task</button></Link>
					</section>
				</header>
				{
					tasks.map( task => (
						<Task key={task.id} id={task.id} title={task.title} description={task.description} status={task.status} />
					))
				}
			</div>
		</>
	)
}