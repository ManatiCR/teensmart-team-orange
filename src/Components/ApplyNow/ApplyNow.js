import React from 'react';
import './ApplyNow.css'
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios';

export default class ApplyNow extends React.Component {
	constructor(props) {
		super(props);
		// Define your state object here
		this.state = {data: null};
	}

	componentDidMount() {
		axios.get('http://dev-teensmart-team-orange.pantheonsite.io/api/teensmart_header?_format=json')
			.then(response => {
				this.setState({apply: response.data})
			})
			.catch(error => {
				console.log("an error occured")
				console.log(error);
			})
	}

	render() {
		const { apply } = this.state;
		return (
			<section>
				{ apply && apply.apply.map((value, index) => (
			<Jumbotron key={index} fluid className="main-bg jumbotron p-3">
				<h2 className="App-title">{value.apply_title}</h2>
				<Container fluid>
					<Row>
						<Col sm={6} className="jumbotron-text" >
							<p>{value.apply_text}</p>
						</Col>
						<Col sm={6} className="m-auto text-center">
							<Button className="applyNow-btn m-auto pt-3 text-center" href={value.apply_url}>{value.apply_button}</Button>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
				))}
			</section>
		)
	}
}
