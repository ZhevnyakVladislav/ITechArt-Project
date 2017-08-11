import React from 'react';
import { Link } from 'react-router-dom';
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
                <Col xsHidden sm={9} className="nav">
                    <Col sm={7} className="links">
                        <Link to="/newadvert">new advert</Link>
                        <Link to="/alladverts">all advert</Link>
                    </Col>
                    <Col sm={3} className='avatar'>
                        <Link to={`/account/${this.props.user.id}`}>
                            <div>
                                <h4>{this.props.user.firstName}</h4>
                                <Image src={this.props.user.photo} circle />
                            </div>
                        </Link>
                    </Col>
                    <Col sm={2}>
                        <Link to="/login">
                            {button}
                        </Link>
                    </Col>
                </Col>
            ) : (
                <Col xsHidden smOffset={7} sm={3}>
                    <Link to="/login">
                        {button}
                    </Link>
                </Col>
            )
        );
        return (
            <header>
                <Navbar fluid>
                    <Row> 
                        <Col xs={10} sm={3}>
                            <Link to="/alladverts">
                                <Image  src='https://www.itechart.com/static/img/logo.png'/>
                            </Link>
                        </Col>
                        {header}
                        <Navbar.Toggle onClick={this.props.openDrawer}/>
                    </Row>
                </Navbar>
            </header>
        );
    }
};
