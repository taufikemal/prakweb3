import React, { Component } from 'react';
import "../App"
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

class Week9 extends React.Component {
	constructor(){
		super()
		this.state = {
			users: []
		}
	}
	
	componentWillMount(){
		const url = 'https://jsonplaceholder.typicode.com/users' 
		
		axios.get(url)
		.then( users => {
			this.setState({
				users: users.data
			})
		})
	}

  render(){
		const { users } = this.state
    return(
  	  <div>
        { this.state.users.map( user=> {
					return (
						<div className="container">
							<div class="card border-info mb-3">
								<div class="card-header">Biodata Pengguna</div>
								<div class="card-body text-secondary">
									<h5 class="card-title">{ user.name }</h5>
									<p class="card-text">Username : { user.username }</p>
									<p class="card-text">E-mail : { user.email }</p>
									<p class="card-text">Phone Number : { user.phone }</p>
									<p class="card-text">Company : { user.company.name }</p>
								</div>
							</div>
						</div>
					)
				})}
    	</div>
    )
  }
}

export default Week9;