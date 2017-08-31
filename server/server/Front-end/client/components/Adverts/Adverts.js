import React from 'react';
import { advertTypeInInt, advertTypeInString } from '../../constants/AdvertType';
import { Grid, Row, Col, ListGroup, Tab, Nav, NavItem, Button, Panel, Pagination, Modal } from 'react-bootstrap';
import './adverts.scss';

import AdvertPanel from '../AdvertPanel/AdvertPanel';
import RespondDialog from './RespondDialog/RespondDialog';

export default class Adverts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRespondDialogOpen: false,
            activePage: 1,
            activeTab: advertTypeInInt[advertTypeInString[1]],
            openResondId: null,
        };
        this.changeStateDialog = this.changeStateDialog.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.loadAdverts = this.loadAdverts.bind(this);
        this.createMessage = this.createMessage.bind(this);
    }
    
    componentDidMount() {
        this.loadAdverts();
    }

    async createMessage(message) {
        await this.props.createMessage(message);
        await this.loadAdverts();
    }

    loadAdverts() {
        return this.props.getFewAdverts(this.state.activeTab, this.state.activePage);
    }

    handleSelect(eventKey) {
        this.props.getFewAdverts(this.state.activeTab, eventKey);
        this.setState({
            activePage: eventKey
        });
    }

    changeTab(e) {
        const type = e.target.id.split('-')[3];
        this.props.getFewAdverts(type, 1);  
        this.setState({
            activeTab: advertTypeInInt[advertTypeInString[1]],
            activePage: 1
        });
          
    }

    changeStateDialog(e) {
        this.setState({ 
            openResondId: e.target.id,
            isRespondDialogOpen: !this.state.isRespondDialogOpen
        });
    }

    render() {
        const renderAdverts = (
            <ListGroup>
                {this.props.adverts.map((advert, key) => 
                    <div  key={key} className="advert">
                        <AdvertPanel advert={advert} />
                        <Button onClick={this.changeStateDialog} id={advert.id}>respond</Button>
                    </div>
                )}
            </ListGroup>
        );
        return(
            <Grid className="adverts" >
                <Tab.Container id="left-tabs" defaultActiveKey={advertTypeInInt[advertTypeInString[1]]}>
                    <Row>
                        <Col xs={12} sm={3} className="tabs">
                            <Nav bsStyle="pills" stacked onClick={this.changeTab}>
                                <NavItem eventKey={advertTypeInInt[advertTypeInString[1]]}>
                                    {advertTypeInString[1]}
                                </NavItem >
                                <NavItem eventKey={advertTypeInInt[advertTypeInString[2]]}>
                                    {advertTypeInString[2]}
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col xs={12} sm={8}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey={this.state.activeTab}>
                                    {renderAdverts}
                                </Tab.Pane>
                                <Row>
                                    <Pagination
                                        prev
                                        next
                                        first
                                        last
                                        ellipsis
                                        boundaryLinks
                                        items={Math.ceil(this.props.advertsCount / 3)}
                                        maxButtons={3}
                                        activePage={this.state.activePage}
                                        onSelect={this.handleSelect} />
                                </Row>
                            </Tab.Content>
                        </Col>
                    </Row> 
                </Tab.Container>
                <RespondDialog
                    advertId={this.state.openResondId}
                    sendResponse={this.createMessage} 
                    closeRespondDialog={this.changeStateDialog}
                    isRespondDialogOpen={this.state.isRespondDialogOpen} 
                />
            </Grid>
        );    
    }
}
