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
                                {button}
                            </LinkContainer>
                        </Col>
                    </Row>
                </Navbar>
            </header>
        );
    }
};
