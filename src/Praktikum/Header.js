import React, { Component } from 'react';
import Moment from 'moment';

class Header extends Component {
	render(){
		let idLocale = require('moment/locale/id');
		Moment.updateLocale('id', idLocale);
		return (
			<div>
				<img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/todo-list-1725496-1465657.png" alt="avatar" />
				<h3>Log Aktivitas Harian</h3>
				<p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
			</div>
		);
	}
}

export default Header;