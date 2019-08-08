import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import mailIcon from '../../assets/icon-mail.png';
import youtubeIcon from '../../assets/icon-youtube.png';
import facebookIcon from '../../assets/icon-facebook.png';
import twitterIcon from '../../assets/icon-twitter.png';
import skypeIcon from '../../assets/icon-skype.png';

export default class Footer extends React.Component {
	render() {
		let data = this.props.data;
		return (
			<footer className="main-bg">
				<Row>
					<Col sm={6} className="logos">
						{data && data.logos.map((value, index)=>{
							if (value.logo_secondary){
								return(
								<div key={index}>
									<a href="http://teensmart.local" ><Image className="logo" src={`http://teensmart.local${value.logo_primary}`} alt="TeenSmart" /></a>
									<a href="http://teensmart.local" ><Image className="logo" src={`http://teensmart.local${value.logo_secondary}`} alt="JovenSalud" /></a>
								</div>
							)
							}else{
								return(<a href="http://teensmart.local" ><Image className="logo" src={`http://teensmart.local${value.logo_primary}`} alt="TeenSmart" /></a>)
							}
						})}
						<p className="contact-links"><a href="#contact">Contact us</a> | <a href="#volunteer">Volunteer</a> | <a href="#involve">Get involved</a></p>
						<p>© 2019 TeenSmart</p>
					</Col>
					<Col sm={6} className="social col text-right">
						<p>Keep in touch</p>
						<a href="#facebook"><Image className="social-button" src={facebookIcon} alt="Facebook" /></a>
						<a href="#twitter"><Image className="social-button" src={twitterIcon} alt="Twitter" /></a>
						<a href="#youtube"><Image className="social-button" src={youtubeIcon} alt="Youtube" /></a>
						<a href="#skype"><Image className="social-button" src={skypeIcon} alt="Skype" /></a>
						<a href="#mail"><Image className="social-button" src={mailIcon} alt="e-mail" /></a>
					</Col>
				</Row>
			</footer>
		)
	}
}
