import React, { Component} from 'react';
import PropTypes from 'prop-types';
import "./css/accordian.scss";
import axios from "axios";
class Section extends Component{

	constructor(props){
		super(props);
		this.state={open:false,class:"section"};
	};

	handleClick(){
    	if(this.state.open) {
      		this.setState({
        	open: false,
        	class: "section"
      		});
    	}else{
      	this.setState({
        	open: true,
        	class: "section open"
      		});
    	}
  	};
	render(){
		return (
      	<div className={this.state.class}>
      		<button>toggle</button>
        	<div className="sectionhead" onClick={this.handleClick.bind(this)}>{this.props.title}</div>
        	<div className="articlewrap">
          		<div className="article">
            	{this.props.description}
          	</div>
        	</div>
      	</div>
    );
	}
};




export default class Accordian extends Component {
  
  constructor(props){
    super(props);
    this.state = {data:[]};

  };

  componentWillMount(prop,state){
    axios.get('http://localhost:5000/accordian').then((res)=>{
      this.setState({data:res.data});
    }).catch((err)=>{
      console.log(err);
    })
  };  
  render() {
    return (
    <div className="accordian">
      <div className="main">
        <div className="title">{this.props.title}</div>
        {this.state.data.map((data,i)=><Section key={i} title={data.title} description={data.description}/>)}
        
      </div>
    </div> 
    );
  }
};

