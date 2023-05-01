import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider
} from 'react-router-dom'
import TaskList from '../pages/TaskList/TaskList'
import AddTask from '../pages/AddTask/AddTask'
import EditTask from '../pages/EditTask/EditTask'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			<Route index element={<TaskList />} />
			<Route path='add' element={<AddTask />} />
			<Route path='edit' element={<EditTask />} />
		</Route>
	)
)

export default function Routes({routes}) {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}