import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button, ControlLabel, InputGroup } from 'react-bootstrap';
import validation from '../../constants/validation/validation';
import './logInForm.scss';

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
        this.validation = this.validation.bind(this);
        this.emailValidation =  this.emailValidation.bind(this);
        this.passwordValidation =  this.passwordValidation.bind(this);
        
    }

    handleChange(e) {
        this.setState({
            [e.target.type]: e.target.value
        });
    }
       
    handleSubmit() {
        if(this.validation()) {
            debugger;
            this.props.logIn({
                email: this.state.email,
                password: this.state.password
            });
        }
    }
    
    validation() {
        let errors = {};
        this.emailValidation(errors);
        this.passwordValidation(errors);
        this.setState({
            emailValid: errors.emailValid,
            passwordValid: errors.passwordValid
        });

        if (errors.emailValid == validation.success && errors.passwordValid == validation.success) {
            return true;
        }

        return false;
    }

    emailValidation(errors) {
        if(!this.state.email) {
            errors.emailValid = validation.error;
        } else {
            let email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if(email.test(this.state.email)) {
                errors.emailValid = validation.success;
            } else {
                errors.emailValid = validation.warning;
            }
        }
    }

    passwordValidation(errors) {
        if(!this.state.password) {
            errors.passwordValid = validation.error;
        } else {
            errors.passwordValid = validation.success;
        }
    }

    render() {
        return(
            <Grid className='login-form'>
                <Row>
                    <Col xs={12} smOffset={2} sm={8} mdOffset={3} md={6} lgOffset={4} lg={4}>
                        <Form onChange={this.handleChange} >
                            <FormGroup validationState={this.state.emailValid}>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type= "email" placeholder="Email"/>
                                <FormControl.Feedback />
                            </FormGroup>
                            <FormGroup validationState={this.state.passwordValid}>
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
            </Grid>
        ); 
    }
};
