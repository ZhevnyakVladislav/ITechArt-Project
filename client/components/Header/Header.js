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
                            <LinkContainer to="/">
                                <Image  src='https://www.itechart.com/static/img/logo.png'/>
                            </LinkContainer>
                        </Col>
                        <Col xs={3}>
                            <LinkContainer to="/login">
                                <Button >Log In</Button>
                            </LinkContainer>
                        </Col>
                    </Row>
                </Navbar>
            </header>
        );
    }
};
