// Dependencies
import React from 'react';
import axios from 'axios';

//Components
import ApplyNow from '../Components/ApplyNow/ApplyNow';
import Benefits from '../Components/Benefits/Benefits';
import FAQS from '../Components/FAQS/FAQS';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Impact from '../Components/Impact/Impact';
import Navigation from '../Components/Navigation/Navigation';
import Oportunities from '../Components/Oportunities/Oportunities';
import Steps from '../Components/Steps/Steps';
import Types from '../Components/Types/Types';
import Hero from '../Components/Hero/Hero';


export default class Volunteer extends React.Component {
    constructor(props) {
		super(props);
		// Define your state object here
		this.state = {data: null};
	}
	componentDidMount() {
		axios.get('http://dev-teensmart-team-orange.pantheonsite.io/api/teensmart_header?_format=json')
			.then(response => {
				this.setState({blocks: response.data})
			})
			.catch(error => {
				console.log("an error occured")
				console.log(error);
			})
	}
	render() {
        const { blocks } = this.state;
		return (
            <div id="Volunteer">
                <Header data={blocks} />
                <Navigation />
                <Hero />
                <Types />
                <ApplyNow />
                <Steps />
                <Oportunities />
                <Benefits />
                <Impact />
                <FAQS />
                <Footer data={blocks}/>
            </div>
		)
	}
}
