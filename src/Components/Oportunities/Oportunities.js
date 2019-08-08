import React from 'react';

import {
	Container,
	Col,
	Row,
	Dropdown
} from 'react-bootstrap';

// Styles
import './Oportunities.css'

export default class Oportunities extends React.Component {


	constructor() {
		super();
		this.state = {
			selectedId: null,
			data: [{id: "1", title: "test"}, {id: "2", title: "Sergio"}]
		}

		this.change = this.change.bind(this);
	}


	change(e) {
		console.log(e.target.value);
		this.setState({
			selectedId: e.target.value
		})

	}




	render() {
		return (
			<section className="Oportunities pt-3 pl-3">
				<h2 className="App-title">Want to involve yourself as volunteer with us?</h2>
				<Container>
					<Row>
						<Col md={{ span: 12 }}>
								<select onChange={this.change}>
											<option>-- Select an option</option>

										{
											this.state.data.map(item => <option value={item.id}>{item.title}</option> )
										}
								</select>
								{
									this.state.selectedId ? this.state.data.map(item => {
										return item.id == this.state.selectedId && <div>

										</div>
									}) : null
								}
						</Col>
					</Row>
				</Container>
			</section>
		)
	}
}
