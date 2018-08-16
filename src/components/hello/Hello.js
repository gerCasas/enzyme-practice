import React, { Component } from 'react';
import ApiService from '../../utils/ApiService';

class Hello extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: 'Request hello world from ApiService'
		};
	}

	handleClick() {
		ApiService.getUserById('1')
		.then(
			res => {
				this.setState({
						title: 'Request result: ' + res.name
				});
		},
			error => {

			}
		);
	}

	render() {
		return (
			<div className="hello-container">
				<div className="hello-title">{this.state.title}</div>
          <button className="hello-button" onClick={(e) => this.handleClick(e)}>
						Click me
          </button>
			</div>
		);
	}
}

export default Hello;
