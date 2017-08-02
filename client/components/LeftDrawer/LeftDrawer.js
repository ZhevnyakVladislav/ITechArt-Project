import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Col, Row, ListGroupItem, Image, Button } from 'react-bootstrap';
import './leftDrawer.scss';

export default class LeftDrawer extends React.Component {
    
    render() {
        const avatar = (
            (this.props.isUserAuth) ? (
                <LinkContainer to='/account' className="menu-item">
                    <Col xs={12} className='avatar'>
                        <Image src="http://via.placeholder.com/70x70" circle />
                        <h3>Vladislav Zgevnyak</h3>
                    </Col>
                </LinkContainer>
            ) : (
                <LinkContainer to='/login' className="menu-item">
                    <Col xs={12} className='avatar'>
                        <Image src="http://via.placeholder.com/70x70" circle />
                        <h3>Please, login</h3>
                    </Col>
                </LinkContainer>
            )
        );

        const links = (
            (this.props.isUserAuth) ? (
                <div>
                    <LinkContainer to='/newadvert' className="menu-item">
                        <Col xs={12} >
                            <h4>Create new advert</h4>
                        </Col>
                    </LinkContainer>
                    <LinkContainer to='/alladverts' className="menu-item">
                        <Col xs={12} >
                            <h4>All adverts</h4>
                        </Col>
                    </LinkContainer>
                </div>
            ) : (null)
        );

        const logOut = (this.props.isUserAuth ? (
            <LinkContainer to="/login" className='logout'>
                <Col xs={12}>
                    <Button onClick={this.props.logOut}>Log Out</Button>
                </Col>
            </LinkContainer>
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
