import React from 'react';
import ReactDOM from "react-dom";
import ContactsList from './ContactList';
import DataInput from './DataInput';
import AppBarExampleIcon from './FlatButton' ;


export default class App extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = {added: false};
  	}
    _addToContacts(e){
		e.preventDefault();
		var name = document.getElementById('name').value;
		var phone = document.getElementById('phone').value;
		if(name && phone){
			var contact = {};
			contact.id = Date.now();
			contact.name = name;
			contact.phone = phone;
			this.props.contacts.push(contact);
			document.getElementById('name').value= "";
			document.getElementById('phone').value= "";
			this.setState({
				added : true
			});
			//this.forceUpdate();

		}
	}
	render(){
		return (
			<div>
				Hello World
				<h1> This is a test Project </h1>
				<DataInput contacts={this.props.contacts} onSubmitDo={this._addToContacts.bind(this)}/>
				<ContactsList contacts={this.props.contacts} />
			</div>
		);
	}
}
