import React from 'react';
import { ControlLabel, Panel, Button } from 'react-bootstrap';
import './advertPanel.scss';

export default class advertPanel extends React.Component {
    render() {
        const date = (
            this.props.advert.createdAt.split('T')[0]
        );
        return(
            <Panel header={this.props.advert.title}>
                <p>{this.props.advert.description}</p>
                <ControlLabel>
                    {`${this.props.advert.author.firstName} ${date}`}
                </ControlLabel>
            </Panel>
        ); 
    }
}
