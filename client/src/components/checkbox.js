import React, { Component,PropTypes } from 'react';
import axios from "axios";
import "./css/checkbox.scss";
class Controller extends Component {

	constructor(props){
		super(props);
		this.state = {isChecked: true,display:'tick'};
	}

  toggleCheckboxChange () {
    const { handleCheckboxChange, label } = this.props;
    this.setState({isChecked : !this.state.isChecked});
    handleCheckboxChange(label);
    if(this.state.isChecked){
     this.setState({display:'tick display'}); 
    }else{
      this.setState({display:'tick'}); 
    }  
  }
  componentWillUpdate(prop,state){
    
  }

  render() {
    const { label } = this.props;
    const { isChecked,display } = this.state;

    return (
      <div className="checkbox">
        <div className={display}></div>
         <button type="checkbox"  value={label} checked={isChecked} onClick={this.toggleCheckboxChange.bind(this)}></button>
        <label onClick={this.toggleCheckboxChange.bind(this)}>{label}</label>
      </div>
    );
  }
};





class Checkbox extends Component {
  constructor(props){
    super(props);
    this.state={data:{question:"",options:[]}};
  }

  componentWillMount(){
    axios.get('http://localhost:5000/checkbox').then((res)=>{
      this.setState({data:res.data[0]});
    }).catch((err)=>{
      console.log(err);
    });
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox(label){
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox);
    }
  }

  render() {
    const {question,options}=this.state.data;
    return (
      <div className="checkboxParent">
        <div className="optionContainer">
          <div className="question">{question}</div>
           <form onSubmit={this.handleFormSubmit}>
              {options.map((label,i)=><Controller label={label} handleCheckboxChange={this.toggleCheckbox.bind(this)} key={i} />)}

              <button className="submit" type="submit">Submit</button>
            </form>
         </div>   
      </div>
    );
  }
}

export default Checkbox;