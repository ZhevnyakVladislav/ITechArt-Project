import React from 'react';
import { ControlLabel, Panel, Button } from 'react-bootstrap';
import './advertPanel.scss';

export default class advertPanel extends React.Component {
    render() {
        return(
            <Panel header={this.props.advert.title}>
                <p>{this.props.advert.description}</p>
                <ControlLabel>
                    Vladislav 
                </ControlLabel>
            </Panel>
        ); 
    }
}
