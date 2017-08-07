import React from 'react';
import { ControlLabel, Panel, Button } from 'react-bootstrap';
import './advertPanel.scss';

export default class advertPanel extends React.Component {
    render() {
        return(
            <Panel header={this.props.advert.title}>
                {this.props.advert.discription}
                <ControlLabel>
                    vladislav, sdfвфцвфцвфцeda@gmail.com
                    <Button onClick={this.props.openRespondDialog}>respond</Button>
                </ControlLabel>
                
            </Panel>
        ); 
    }
}
