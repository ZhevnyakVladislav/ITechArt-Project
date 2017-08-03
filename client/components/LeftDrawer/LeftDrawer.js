import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Col, Row, ListGroupItem, Image, Button } from 'react-bootstrap';
import './leftDrawer.scss';

export default class LeftDrawer extends React.Component {
    
    render() {
        const avatar = (
            (this.props.isUserAuth) ? (
                <Link to='/account' >
                    <Col xs={12} className='avatar menu-item'>
                        <Image src="http://via.placeholder.com/70x70" circle />
                        <h3>Vladislav Zgevnyak</h3>
                    </Col>
                </Link>
            ) : (
                <Link to='/login' >
                    <Col xs={12} className='avatar menu-item' >
                        <Image src="http://via.placeholder.com/70x70" circle />
                        <h3>Please, login</h3>
                    </Col>
                </Link>
            )
        );

        const links = (
            (this.props.isUserAuth) ? (
                <div>
                    <Link to='/newadvert'>
                        <Col xs={12} className='menu-item'>
                            <h4>Create new advert</h4>
                        </Col>
                    </Link>
                    <Link to='/alladverts'>
                        <Col xs={12} className='menu-item'>
                            <h4>All adverts</h4>
                        </Col>
                    </Link>
                </div>
            ) : (null)
        );

        const logOut = (this.props.isUserAuth ? (
            <Link to="/login" >
                <Col xs={12} className='logout'>
                    <Button onClick={this.props.logOut}>Log Out</Button>
                </Col>
            </Link>
        ):(null));

        return (
            <Grid id='drawer-overlay' className={this.props.isDrawerOpen ? 'opened' : 'closed'} onClick={this.props.closeDrawer}>
                <Row>
                    <Col xs={8} id='drawer' className={this.props.isDrawerOpen ? 'opened' : 'closed'}>
                        {avatar}
                        {links}
                        {logOut}
                    </Col>
                </Row>
            </Grid>
        );
    }
};
