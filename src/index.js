// const el = document.createElement("div")
// el.innerHTML = "12dd3a"
// document.body.appendChild(el)
// const arr = [1,2,3].map((item) => {
// 	return item + 1
// })
// console.log(arr)

import imgSrc from "./1.JPG"
const el = document.createElement("img")
el.src = imgSrc
document.body.appendChild(el)
// const arr = [1,2,3].map((item) => {
// 	return item + 1
// })
// console.log(arr)

import React,{Component} from "react";
import { createRoot } from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./Home";
import List from "./List";

class App extends Component{
	render() {
		return(
			<BrowserRouter>
				<Routes>
					<Route path="/home" element={<Home/>} />
					<Route path="/list" element={<List/>} />
				</Routes>
			</BrowserRouter>
		)
	}
}
const root = document.getElementById('root');

const app = createRoot(root); // createRoot(container!) if you use TypeScript
app.render(<App />);
