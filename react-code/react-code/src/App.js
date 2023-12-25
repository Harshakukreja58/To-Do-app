import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<nav className='navbar navbar-expand-lg navbar-light bg-light'>
						<a
							className='navbar-brand'
							href='https://www.almabetter.com'
							target='_blank'>
							<img
								src='https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Flogo1_edfc81b31b.png&w=256&q=75'
								width='120'
								height='30'
								alt='almabetter.com'
							/>
						</a>
						<Link to='/' className='navbar-brand'>
							MERN-Stack Todo App
						</Link>
						<div className='collpase nav-collapse'>
							<ul className='navbar-nav mr-auto'>
								<li className='navbar-item'>
									<Link to='/' className='nav-link'>
										Todos
									</Link>
								</li>
								<li className='navbar-item'>
									<Link to='/create' className='nav-link'>
										Create Todo
									</Link>
								</li>
							</ul>
						</div>
					</nav>

					<Routes>
						<Route path='/' exact element={<TodosList />} />
						<Route path='/edit/:id' element={<EditTodo />} />
						<Route path='/create' element={<CreateTodo />} />
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
