import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Navbar, Nav, NavItem, Button, Image } from 'react-bootstrap';
import './header.scss';

export default class Header extends React.Component {
    render() {
        const button = (
            (this.props.isUserAuth) ? (
                <Button onClick={this.props.logOut}>Log Out</Button>
            ) : (<Button> Log In</Button>)
        );

        const header = (
            (this.props.isUserAuth) ? (
                <Col xsHidden sm={9}>
                    <Col sm={7} className='links'>
                        <Nav>
                            <NavItem eventKey={1} href="/newadvert">new advert</NavItem>
                            <NavItem eventKey={2} href="/alladvert">all advert</NavItem>
                        </Nav>
                    </Col>
                    <Col sm={3} className='avatar'>
                        <LinkContainer to="/login">
                            <div>
                                <h4>Vladislav</h4>
                                <Image src="http://via.placeholder.com/50x50" circle />
                            </div>
                        </LinkContainer>
                    </Col>
                    <Col sm={2}>
                        <LinkContainer to="/login">
                            {button}
                        </LinkContainer>
                    </Col>
                </Col>
            ) : (
                <Col xsHidden smOffset={7} sm={3}>
                    {button}
                </Col>
            )
        );
        return (
            <header>
                <Navbar fluid>
                    <Row> 
                        <Col xs={10} sm={3}>
                            <LinkContainer to="/">
                                <Image  src='https://www.itechart.com/static/img/logo.png'/>
                            </LinkContainer>
                        </Col>
                        {header}
                        <Navbar.Toggle onClick={this.props.openDrawer}/>
                    </Row>
                </Navbar>
            </header>
        );
    }
};
