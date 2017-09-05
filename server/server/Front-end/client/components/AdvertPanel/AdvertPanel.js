import React from 'react';
import { ControlLabel, Panel, Button } from 'react-bootstrap';
import './advertPanel.scss';

export default class advertPanel extends React.Component {
    render() {
        const createdAt = (
            this.props.advert.createdAt.split('T')[0]
        );
        const header = (
            <h1 onClick={() => this.props.history.push(`advert/${this.props.advert.id}`)}>{this.props.advert.title}</h1>
        );
        return(
            <Panel header={header} >
                <p>{this.props.advert.description}</p>
                <b>{`${this.props.advert.author.firstName}, ${createdAt}`}</b>
            </Panel>
        ); 
    }
}
