import React, { Component } from 'react';
import axios from 'axios';

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
				{ users.length < 1 && <div>loading...</div>}

        { this.state.users.map( user=> {
					return (
						<div>{ user.name }</div>
					)
				})}
      </div>
    )
  }
}

export default Week9;