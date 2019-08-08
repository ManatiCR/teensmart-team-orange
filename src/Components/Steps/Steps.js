import React from 'react';
import {
	Container,
	Col,
	Row
} from 'react-bootstrap';
import axios from 'axios';

import './Steps.css'


export default class Steps extends React.Component {
	constructor(props) {
		super(props);
		// Define your state object here
		this.state = {data: null};
	}

	componentDidMount() {
		axios.get('http://dev-teensmart-team-orange.pantheonsite.io/api/step?_format=json')
			.then(response => {
				this.setState({steps: response.data})
			})
			.catch(error => {
				console.log("an error occured")
				console.log(error);
			})
	}

	render() {
		const { steps } = this.state;
		return (
			<section className="Steps">
				<h2 className="App-title">Want to involve yourself as volunteer with us?</h2>
				<Container>
					<Row>
					{ steps && steps.map((value, index) => {
						if (index === 0)
						{
							return (
							<Col key={index} md={{ span: 2, offset: 1 }}>
								<span className="Steps-circle hidden-xs">{index + 1}</span>
								<span className="Steps-circle show-xs">{index + 1}</span>
								<p className="Steps-item">
									{value.field_steptext_1}
								</p>
								<p className="Steps-item"><a href={value.field_steplinkurl}>{value.field_steplinktext}</a></p>
							</Col>
							);
						}
						else if (index % 2 > 0)
						{
							return (
							<Col key={index} md={{ span: 2 }}>
								<p className="Steps-item">
									{value.field_steptext_1}
								</p>
								<p className="Steps-item"><a href={value.field_steplinkurl}>{value.field_steplinktext}</a></p>
								<span className="Steps-circle hidden-xs">{index + 1}</span>
								<span className="Steps-circle show-xs">{index + 1}</span>
							</Col>
							);
						}
						else {
							return (
							<Col key={index} md={{ span: 2 }}>
								<span className="Steps-circle hidden-xs">{index + 1}</span>
								<p className="Steps-item">
									{value.field_steptext_1}
								</p>
								<p className="Steps-item"><a href={value.field_steplinkurl}>{value.field_steplinktext}</a></p>
								<span className="Steps-circle show-xs">{index + 1}</span>
							</Col>
							);
						}}
					)}
					</Row>
				</Container>
			</section>
		)
	}
}
