import React from 'react';
import { Carousel, Card, Row, Container } from 'react-bootstrap';
import axios from 'axios';

export default class Types extends React.Component {
	constructor(props) {
		super(props);
		// Define your state object here
		this.state = {data: null};
	}

	componentDidMount() {
		axios.get('http://dev-teensmart-team-orange.pantheonsite.io/api/types?_format=json')
			.then(response => {
				this.setState({types: response.data})
			})
			.catch(error => {
				console.log("an error occured")
				console.log(error);
			})
	}

	render() {
		const { types } = this.state;
		return (
			<section className="main-bg pt-3 pl-3">
				<h2 className="App-title">What kind of volunteer work can you do with us?</h2>
				<Carousel className="carousel d-block d-sm-none" prevIcon={<span className="carousel-icon">{'<'}</span>} nextIcon={<span className="carousel-icon">{'>'}</span>}>
					{ types && types.map((value, index) => (
						<Carousel.Item key={index}>
							<h3>{value.field_volunteertitle}</h3>
							<p>{value.field_volunteertext}</p>
						</Carousel.Item>
					))}
				</Carousel>

				<Container fluid className="d-none d-sm-block">
					<Row className="types-desktop">
						{ types && types.map((value, index) => (
							<Card key={index} className="volunteer-type">
								<Card.Body className="volunteer-body">
									<Card.Title>
										<h3>{value.field_volunteertitle}</h3>
									</Card.Title>
									<Card.Text>
										{value.field_volunteertext}
									</Card.Text>
								</Card.Body>
							</Card>
						))}
					</Row>
				</Container>
			</section>
		)
	}
}
