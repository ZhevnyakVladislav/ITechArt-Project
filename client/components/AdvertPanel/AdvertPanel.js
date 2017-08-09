import React from 'react';
import { ControlLabel, Panel, Button } from 'react-bootstrap';
import './advertPanel.scss';

export default class advertPanel extends React.Component {
    render() {
        return(
            <Panel header={this.props.advert.title}>
                {this.props.advert.description}
                {this.props.advert.id}
                {this.props.advert.type}
                <ControlLabel>
                    Vladislav 
                </ControlLabel>
            </Panel>
        ); 
    }
}
