import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button, ControlLabel, InputGroup } from 'react-bootstrap';
import validation from '../../constants/validation/validation';
import './SignUpForm.scss';

export default class LogInform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValid: validation.default,
            passwordValid: validation.default, 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.type]: e.target.value
        });
    }
       
    handleSubmit() {
        if(this.validation()) {
            this.props.logIn({
                email: this.state.email,
                password: this.state.password
            });
        }
    }
    
    render() {
        return(
            <Grid className='login-form'>
                <Row>
                    <Col xs={12} smOffset={2} sm={8} mdOffset={3} md={6} lgOffset={4} lg={4}>
                        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                            <FormGroup  validationState={this.state.emailValid}>
                                <ControlLabel>First Name</ControlLabel>
                                <FormControl type= "firstName" />
                            </FormGroup>
                            <FormGroup validationState={this.state.passwordValid}>
                                <ControlLabel>Second Name</ControlLabel>
                                <FormControl type="secondName" />
                            </FormGroup>
                            <FormGroup validationState={this.state.passwordValid}>
                                <ControlLabel>Pseudonym</ControlLabel>
                                <FormControl type="pseudonym" />
                            </FormGroup>
                            <FormGroup validationState={this.state.passwordValid}>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="Email"/>
                            </FormGroup>
                            <FormGroup validationState={this.state.passwordValid}>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" placeholder="Password"/>
                            </FormGroup>
                            <FormGroup validationState={this.state.passwordValid}>
                                <ControlLabel>Confirm password</ControlLabel>
                                <FormControl type="password" placeholder="Password"/>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Country</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Belarus</option>
                                    <option value="other">Russia</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Country</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Belarus</option>
                                    <option value="other">Russia</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit">
                                Sign up
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        ); 
    }
};
