import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import axios from 'axios';

export default class FAQS extends React.Component {
	constructor(props) {
		super(props);
		// Define your state object here
		this.state = {data: null};
	}

	componentDidMount() {
		axios.get('http://dev-teensmart-team-orange.pantheonsite.io/api/faq?_format=json')
			.then(response => {
				this.setState({faqs: response.data})
			})
			.catch(error => {
				console.log("an error occured")
				console.log(error);
			})
	}

	render() {
		const { faqs } = this.state;
		return (
			<section className="pt-3 pl-3">
				<h2 className="App-title">Do you have any question?</h2>
				<p>If your question is not answered below, you can contact us at volunteer@teensmart.org</p>
				<Accordion className="faq" xs={12} sm={6}>
					{ faqs && faqs.map((value, index) => (
						<Card key={index}>
							<Card.Header>
								<Accordion.Toggle className="question" as={Button} variant="link" eventKey={index}>
									{value.field_questions}
								</Accordion.Toggle>
								<Accordion.Collapse eventKey={index}>
									<Card.Body>{value.field_answers}</Card.Body>
								</Accordion.Collapse>
							</Card.Header>
						</Card>
					))}
				</Accordion>
			</section>
		)
	}
}
