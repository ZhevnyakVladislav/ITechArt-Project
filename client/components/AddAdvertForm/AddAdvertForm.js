import React from 'react';
import { Grid, Row, Col, Form, ControlLabel, FormControl, FormGroup, Button, Radio } from 'react-bootstrap';
import './addAdvertForm.scss';
import { validateOnExistence } from '../../helpers/validationHelper';
import validType from '../../constants/validation/validation';
import { Redirect } from 'react-router-dom';

export default class AddAdvertForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            type: 'rentOf',
            errors: {
                titleValid: validType.default,
                descriptionValid: validType.default, 
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateData = this.validateData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit() {
        if(this.validateData()) {
            this.props.addAdvert({
                title: this.state.title,
                description: this.state.description,
                type: this.state.type
            });
        }
    }

    validateData() {
        let errors = {
            titleValid: validateOnExistence(this.state.title),
            descriptionValid: validateOnExistence(this.state.description)
        };

        this.setState({ errors });

        return Object.keys(errors)
            .map(field => errors[field] === validType.success)
            .reduce((prev, curr) => prev && curr);
    }

    render() {
        return(
            <Grid className='login-form'>
                <Row>
                    <Col className="new-advert" xs={12} smOffset={3} sm={6} >
                        <Form onChange={this.handleChange}>
                            <FormGroup controlId="type">
                                <ControlLabel>Please, choice advert type.</ControlLabel>
                                <FormControl componentClass="select" placeholder="Reception">
                                    <option value="rentOf">Rent of</option>
                                    <option value="rentOut">Rent out</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup bsSize="large" controlId="title" validationState={this.state.errors.titleValid}>
                                <ControlLabel>Title</ControlLabel>
                                <FormControl type="text" placeholder="Title" />
                            </FormGroup>
                            <FormGroup controlId="description" validationState={this.state.errors.descriptionValid}>
                                <ControlLabel>Description</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="description" />
                            </FormGroup>
                            <Button onClick={this.handleSubmit}>
                                Create
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        ); 
    }
}