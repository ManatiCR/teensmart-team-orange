import React from 'react';

import {
	Container,
	Col,
	Row,
	Image,
	ToggleButton,
	ButtonToolbar,
	ToggleButtonGroup
} from 'react-bootstrap';

import facebook from '../../assets/icon-facebook.png';
import twitter from '../../assets/icon-twitter.png';
import youtube from '../../assets/icon-youtube.png';
import mail from '../../assets/icon-mail.png';
import skype from '../../assets/icon-skype.png';

// Styles
import './Header.css'


export default class Header extends React.Component {
	render() {
		let data = this.props.data;
		return (
			<Container fluid>
				<Row>
					<Col sm={4} md={6} lg={7} className="logos">
						{data && data.logos.map((value, index)=>{
							if (value.logo_secondary){
								return(
								<div key={index}>
									<Image className="logo" src={`http://teensmart.local${value.logo_primary}`} href="#" alt="TeenSmart" />
									<Image className="logo" src={`http://teensmart.local${value.logo_secondary}`} href="#" alt="TeenSmart" />
								</div>
							)
							}else{
								return(<Image className="logo" src={`http://teensmart.local${value.logo_primary}`} href="#" alt="TeenSmart" />)
							}
						})}
					</Col>
					<Col sm={4} md={3} className="social d-flex justify-content-around">
						<Image className="social-button float-right" src={skype} alt="Facebook"/>
						<Image className="social-button float-right" src={mail} alt="Facebook"/>
						<Image className="social-button float-right" src={youtube} alt="Facebook"/>
						<Image className="social-button float-right" src={twitter} alt="Facebook"/>
						<Image className="social-button float-right" src={facebook} alt="Facebook"/>
					</Col>
					<Col sm={4} md={3} lg={2} className="col">
						<ButtonToolbar className="float-right">
							<ToggleButtonGroup className="languageSelector" type="radio" name="options" defaultValue={1}>
								<ToggleButton className="button language" value={1}>English</ToggleButton>
								<ToggleButton className="button language" value={2}>Espa&#241;ol</ToggleButton>
							</ToggleButtonGroup>
						</ButtonToolbar>
					</Col>
				</Row>
			</Container>
		)
	}
}
