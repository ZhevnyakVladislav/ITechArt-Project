import React from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './logInForm.scss';

export default class LogInform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        this.props.logIn({
            email: this.state.email,
            password: this.state.password
        });
    }
    
    render() {
        return(
            <Grid className='login-form'>
                <Row>
                    <Col xs={12} smOffset={2} sm={8} mdOffset={3} md={6} lgOffset={4} lg={4}>
                        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <h1>Email</h1>
                                <FormControl type="email" placeholder="Email"/>
                            </FormGroup>
                            <FormGroup>
                                <h1>Password</h1>
                                <FormControl type="password" placeholder="Password"/>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit">
                                Sign in
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        ); 
    }
};
