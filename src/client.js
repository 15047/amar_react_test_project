import React from 'react';
import ReactDom from 'react-dom';

import MyApp from './Components/App';


let contacts = [{
	id : 1,
	name : "Amar Nath Saha",
	phone : '9739851449'
}];

const app = document.getElementById('app');
ReactDom.render(<MyApp contacts={contacts} />, app);