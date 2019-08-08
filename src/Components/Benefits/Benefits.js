import React from 'react';
import { Container, Row, Card, Image } from 'react-bootstrap';
import axios from 'axios';

export default class Benefits extends React.Component {
	constructor(props) {
		super(props);
		// Define your state object here
		this.state = {data: null};
	}

	componentDidMount() {
		axios.get('http://dev-teensmart-team-orange.pantheonsite.io/api/benefit?_format=json')
			.then(response => {
				this.setState({benefits: response.data})
			})
			.catch(error => {
				console.log("an error occured")
				console.log(error);
			})
	}

	render() {
		const { benefits } = this.state;
		return (
			<section className="pt-3 pl-3">
				<h2 className="App-title">What will I get as a volunteer?</h2>
				<Container fluid>
					<Row>
						{ benefits && benefits.map((value, index) => (
							<Card key={index} className="benefit">
								<Image variant="top" roundedCircle src={'http://dev-teensmart-team-orange.pantheonsite.io' + value.field_benefiticon} className="benefit-image" />
								<Card.Body>
									<Card.Title className="benefit-title">{value.field_benefitext}</Card.Title>
								</Card.Body>
							</Card>
						))}
					</Row>
				</Container>
			</section>
		)
	}
}
