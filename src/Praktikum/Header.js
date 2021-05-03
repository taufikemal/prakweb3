import React, { Component } from 'react';
import Moment from 'moment';

class Header extends Component {
	render(){
		let idLocale = require('moment/locale/id');
		Moment.updateLocale('id', idLocale);
		return (
			<div>
				<img src="https://image.freepik.com/free-vector/company-employees-planning-task-brainstorming_74855-6316.jpg"
				alt="avatar" />
				<h3>Log Aktivitas Harian</h3>
				<p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
			</div>
		);
	}
}

export default Header;