import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import Home from './components/home';
import Accordian from './components/accordian';
import Checkbox from './components/checkbox';
import "./index.css"

ReactDOM.render(
  	<div className="wrapper">
		<BrowserRouter>
				<div>
					<Route exact path="/" component={Home}/>
					<Route exact path="/accordian" component={Accordian}/>
					<Route exact path="/checkbox" component={Checkbox}/>
				</div>
		</BrowserRouter>
	</div>
  , document.querySelector('.container'));
