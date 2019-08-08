import React from 'react';
import axios from 'axios';
import {
	Button,
	Navbar,
	Nav
} from 'react-bootstrap';

// Styles
import './Navigation.css';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
		// Define your state object here
		this.state = {data: null};
	}

	componentDidMount() {
		axios.get('http://teensmart.local/api/teensmart-navigation?_format=json')
			.then(response => {
				this.setState({navigation: response.data})
			})
			.catch(error => {
				console.log("an error occured")
				console.log(error);
			})
	}
	render() {
		const { navigation } = this.state;
		return (
			<Navbar className="navbar sticky-top" variant="light" expand="sm">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">

								{ navigation && navigation.teensmartNavigation.map((value, index) => {
									return(
										<Nav.Link key={index} className="nav-link text-center" href={value.link}>{value.title}</Nav.Link>
									);
								}
								)}
						</Nav>
						<Button className="button d-block float-sm-right mr-md-3" href="#">Donate now ></Button>
					</Navbar.Collapse>
				</Navbar>
		)
	}
}
