import React from 'react';
import {
	Container,
	Col,
	Row,
	Jumbotron


} from 'react-bootstrap';
import './Impact.css';


export default class Impact extends React.Component {
	render() {
		return (
		<section>
				<Jumbotron fluid className="main-bg">
					<Container fluid className="pt-3">
						<Row className="pl-3">
							<h2 className="App-title"> Our volunteer's impact</h2>
						</Row>
						<Row className="pl-5">
							<Col sm={6} >
								<br></br>
								<div className="row">
									<div className="col">
										<strong><h1 >+50</h1></strong>
										<p > Weekly hours <br></br>counseling young <br></br>students</p>
									</div>

									<div className="col">
										<strong><h1 >+50</h1></strong>
										<p > Weekly hours <br></br>counseling young <br></br>students</p>
									</div>

									<div className="col">
										<strong><h1 >+50</h1></strong>
										<p > Weekly hours <br></br>counseling young <br></br>students</p>
									</div>
								</div>


							</Col>
							<Col sm={6} style={{ padding: 50 }}>
								<div>

									<h6>Teensmart International is helping young men and women's nself-care and
									self-empowerment with the goal of reducing or preventing six risky health
									behaviors and promoting personal leadership. But this couldn't be done without
									our remarkable volunteers; since they are the ones that help us create a positive
									impact in so many young people.
	
							</h6>
								</div>

								<br></br>
								<button type="submit" className="Impact-applybutton">I want to be a volunteer</button>
							</Col>
						</Row>
					</Container>
				</Jumbotron>
			</section>
		)
	}
}
