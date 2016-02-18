import React from 'react';
import ContactsList from './ContactList';
import DataInput from './DataInput';
import AppBarExampleIcon from './FlatButton' ;


let contacts = [{
	id : 1,
	name : "Amar Nath Saha",
	phone : '9739851449'
}

];
class App extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = {added: false};
  	}
  	get
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
		console.log('App Rerendered');
		return (
			<div>
				Hello World
				<h1> This is a test Project </h1>
				//<AppBarExampleIcon />
				<DataInput contacts={this.props.contacts} onSubmitDo={this._addToContacts.bind(this)}/>
				<ContactsList contacts={this.props.contacts} />
			</div>
		)
	}
}

React.render(<App contacts={contacts} />,document.getElementById('app'));
