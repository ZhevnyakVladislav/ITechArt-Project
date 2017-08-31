import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button, ControlLabel, InputGroup } from 'react-bootstrap';
import validType from '../../constants/validation/validation';
import { validateEmail, validatePassword } from '../../helpers/validationHelper';
import './logInForm.scss';

import Popup from '../Popup/Popup';

export default class LogInform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                emailValid: validType.default,
                passwordValid: validType.default,
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validation = this.validation.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.type]: e.target.value
        });
    }
       
    handleSubmit() {
        if (this.validation()) {
            this.props.logIn({
                email: this.state.email,
                password: this.state.password
            });
        }
    }
    
    validation() {
        let errors = {
            emailValid: validateEmail(this.state.email),
            passwordValid: validatePassword(this.state.password)
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
                    <Col xs={12} smOffset={2} sm={8} mdOffset={3} md={6} lgOffset={4} lg={4}>
                        <Form onChange={this.handleChange} >
                            <FormGroup validationState={this.state.errors.emailValid}>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type= "email" placeholder="Email"/>
                                <FormControl.Feedback />
                            </FormGroup>
                            <FormGroup validationState={this.state.errors.passwordValid}>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" placeholder="Password"/>
                                <FormControl.Feedback />
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={this.handleSubmit}>
                                Sign in
                                </Button>
                            </FormGroup>
                            <ControlLabel>
                                Don't have a account?
                                <Link to="/signup">
                                    Sign Up
                                </Link>
                            </ControlLabel>
                        </Form>
                    </Col>
                </Row>
                <Popup errors={this.props.errors} />
            </Grid>
        ); 
    }
};
