import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Navbar, Nav, NavItem, Button, Image } from 'react-bootstrap';
import './header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar fluid>
                    <Row> 
                        <Col xs={8}>
                            <Image  src='https://www.itechart.com/static/img/logo.png'/>
                        </Col>
                        <Col xs={3}>
                            <Nav pullRight>
                                <LinkContainer to="/login">
                                    <NavItem eventKey={1}>
                                        <Button bsStyle='primary'>Log In</Button>
                                    </NavItem>
                                </LinkContainer>
                            </Nav>
                        </Col>
                    </Row>
                </Navbar>
            </header>
        );
    }
};
