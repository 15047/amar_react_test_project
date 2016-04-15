import React from 'react';

class DataInput extends React.Component {

	render(){
		console.log('DataInput Rerendered');
		return (
			<form> 
				<input id="name" type="text" placeholder="Enter Your Name"></input><br/>
				<input id="phone" type="text" placeholder="Enter Your Phone Number"></input><br/>
				<button onClick={this.props.onSubmitDo}>Submit</button>
			</form>
		)
	}
}

export default DataInput;