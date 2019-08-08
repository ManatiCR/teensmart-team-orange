import React from 'react';
import axios from 'axios';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';


// Styles
import './Hero.css'

export default class Hero extends React.Component {
	constructor(props) {
		super(props);
		// Define your state object here
		this.state = { hero: null };
	}

	componentDidMount() {
		axios.get('http://dev-teensmart-team-orange.pantheonsite.io/api/hero?_format=json')
			.then(response => {
				this.setState({ hero: response.data })
			})
			.catch(error => {
				console.log("an error occured")
				console.log(error);
			})
	}
	render() {
		const { hero } = this.state;
		return (
			<Jumbotron fluid className="main-bg jumbotron p-0">
				<Container className="mt-4 hero">
					{hero && hero.map((value, index) => {
						return (
							<Row key={index}>
								<Col sm={6} className="jumbotron-text m-auto pt-3 pb-1" >
									<p>{value.field_testimonial}</p>
									<p className="text-right font-weight-bold"><a href={value.field_herolink}>Vinicio, featured volunteer</a></p>
								</Col>
								<Col sm={6} className="jumbotron-photo m-auto" >
									<img src={'http://dev-teensmart-team-orange.pantheonsite.io' + value.field_heroimage} alt="Jumbotron" style={{ maxWidth: '100%' }}></img>
								</Col>
							</Row>
						);
					}
					)}
				</Container>
			</Jumbotron>
		)
	}
}
