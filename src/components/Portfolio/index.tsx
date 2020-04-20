import React from 'react';
import { Header } from './../Header';
import { Row, Col } from 'reactstrap';
import './portfolio.scss';
import me from './../../images/me.jpg';
import { connect } from 'react-redux';



const mapStateToProps = (state:any, ownProps:any) => {
  return {
    ...state,
    ...ownProps,
  }
}

export const Portfolio = (props:any) => (
  <>
    <Header />

    <Row id="about-me">
      <Col sm={12}>
        <div id="mPhoto" className="photo">
          <img src={me} />
        </div>
      </Col>
      <Col sm={12} md={6}>
        <p id="pitch">My name is Conor Kelly and I utilize HCD methods to design, explore, and ultimately build ICT solutions that advance efforts to solve society's most pressing issues. I am a designer, coder, and problem solver who is passionate about creating positive social impact, empowering and enriching the lives of my users.</p>
      </Col>
      <Col md={6}>
        <div id="dPhoto" className="photo">
          <img src={me} />
        </div>
      </Col>
    </Row>

    <Row id="work">
      <Col sm={12}><h2 className="workHeader">My Work</h2></Col>
      <Col md={{ size: 10, offset: 1}}>
        <div className="section-blurb" style={{ textAlign: 'center' }}>
          <p>For the past decade I have worked for various companies and organizations to build user-optimized web solutions.</p>
        </div>
      </Col>
    </Row>

    <Row id="projects"></Row>
  </>
);

const ConnectedPortfolio = connect(mapStateToProps)(Portfolio);

export default ConnectedPortfolio;
