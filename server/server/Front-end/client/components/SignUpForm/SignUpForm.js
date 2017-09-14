import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button, ControlLabel, ListGroup, Label, Glyphicon } from 'react-bootstrap';
import validType from '../../constants/validation/validation';
import { validateEmail, validateOnExistence,validatePassword, validateConfirmPassword} from '../../helpers/validationHelper';
import './SignUpForm.scss';

export default class LogInform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            email: '',
            pseudonym: '',
            password: '', 
            confirmPassword: '',
            languages: [],
            countryId: '',
            cityId: '',
            errors: {
                firstNameValid: validType.default,
                secondNameValid: validType.default,
                pseudonymValid: validType.default,
                emailValid: validType.default,
                passwordValid: validType.default, 
                confirmPasswordValid: validType.default,
                countryValid: validType.default,
                cityValid: validType.default,
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateData = this.validateData.bind(this);
        this.renderWarningMessage = this.renderWarningMessage.bind(this);
        this.addLanguage = this.addLanguage.bind(this);
        this.deleteLanguage = this.deleteLanguage.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.changeCity = this.changeCity.bind(this);
    }

    componentDidMount() {
        this.props.getCountries();
    }

    handleChange(e) {
        if(e.target.id === 'languages') {
            this.addLanguage(e.target.value);
        } else if (e.target.id == 'country') {
            this.changeCountry(e.target.value);
        } else if (e.target.id == 'city') {
            this.changeCity(e.target.value);
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    }
       
    addLanguage(language) {
        this.state.languages.push(language);
        this.setState({ languages: this.state.languages });
    }

    changeCountry(value) {
        this.setState({
            countryId: value,
            cityId:''
        });
        this.props.getCities(value);
    }

    changeCity(value) {
        this.setState({
            cityId: value,
        });
    }

    deleteLanguage(e) { 
        const changedLanguages = [...this.state.languages.slice(0, e.target.id),...this.state.languages.slice(e.target.id + 1)];
        this.setState({ languages: changedLanguages });
    }

    handleSubmit() {
        if (this.validateData()) {
            this.props.signUp({
                firstName: this.state.firstName,
                lastName: this.state.secondName,
                pseudonym:  this.state.pseudonym,
                email: this.state.email,
                password: this.state.password,
                languages:  this.state.languages,
                address: {
                    cityId: this.state.cityId,
                }
            });
        }
    }
    
    validateData() {
        let errors = {
            firstNameValid: validateOnExistence(this.state.firstName),
            secondNameValid: validateOnExistence(this.state.secondName),
            pseudonymValid: validateOnExistence(this.state.pseudonym),
            emailValid: validateEmail(this.state.email),
            passwordValid: validatePassword(this.state.password),
            confirmPasswordValid: validateConfirmPassword(this.state.password, this.state.confirmPassword),
            countryValid: validateOnExistence(this.state.countryId),
            cityValid: validateOnExistence(this.state.cityId),
        };

        this.setState({ errors });

        return Object.keys(errors)
            .map(field => errors[field] === validType.success)
            .reduce((prev, curr) => prev && curr);
    }

    renderWarningMessage(onWarning, status) {
        if (status === validType.warning) {
            return (<ControlLabel>{onWarning}</ControlLabel>);
        } else if (status == validType.error) {
            return (<ControlLabel>field is required</ControlLabel>);
        }
    }

    render() {
        const renderLanguage = (
            <ListGroup>
                {this.state.languages.map((language, i) => 
                    <Label key={i}>
                        {language}
                        <Button className="load-img" onClick={this.deleteLanguage}>
                            <Glyphicon id={i} glyph="remove"/>
                        </Button>
                    </Label>
                )}
                
            </ListGroup>
        );
        const countries = (
            this.props.countries.map(country => 
                <option key={country.id} value={country.id}>{country.name}</option>)
        );
        const cities = (
            this.props.cities.map(city => 
                <option key={city.id} value={city.id}>{city.name}</option>)
        );
        return(
            <Grid className='login-form'>
                <Row>
                    <Col xs={12} smOffset={2} sm={8} mdOffset={3} md={6} lgOffset={4} lg={4}>
                        <Form onChange={this.handleChange} >
                            <FormGroup controlId="firstName" validationState={this.state.errors.firstNameValid}>
                                <ControlLabel>First name</ControlLabel>
                                <FormControl type="text" placeholder="First name"/>
                                {this.renderWarningMessage('field is equired', this.state.errors.firstNameValid)}
                            </FormGroup>
                            <FormGroup controlId="secondName" validationState={this.state.errors.secondNameValid}>
                                <ControlLabel>Second name</ControlLabel>
                                <FormControl type="text" placeholder="Second name"/>
                                {this.renderWarningMessage('field is equired', this.state.errors.secondNameValid)}
                            </FormGroup>
                            <FormGroup controlId="pseudonym" validationState={this.state.errors.pseudonymValid}>
                                <ControlLabel>Pseudonym</ControlLabel>
                                <FormControl type="pseudonym"  placeholder="NickName"/>
                                {this.renderWarningMessage('field is equired', this.state.errors.pseudonymValid)}
                            </FormGroup>
                            <FormGroup controlId="email" validationState={this.state.errors.emailValid}>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="Email"/>
                                {this.renderWarningMessage('please, enter correct email', this.state.errors.emailValid)}
                            </FormGroup>
                            <FormGroup controlId="password" validationState={this.state.errors.passwordValid}>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" placeholder="Password"/>
                                {this.renderWarningMessage('password should be more than 6 symbols', this.state.errors.passwordValid)}
                            </FormGroup>
                            <FormGroup controlId="confirmPassword" validationState={this.state.errors.confirmPasswordValid}>
                                <ControlLabel>Confirm password</ControlLabel>
                                <FormControl type="password" placeholder="Password"/>
                                {this.renderWarningMessage('passwords do not match', this.state.errors.confirmPasswordValid)}
                            </FormGroup>
                            <FormGroup controlId="country" validationState={this.state.errors.countryValid}>
                                <ControlLabel>Select country</ControlLabel>
                                <FormControl componentClass="select">
                                    <option value=''></option>
                                    {countries}
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="city" validationState={this.state.errors.cityValid}>
                                <ControlLabel>Select city</ControlLabel>
                                <FormControl componentClass="select">
                                    <option value=''></option>
                                    {cities}
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="languages">
                                <ControlLabel>Select languages</ControlLabel>
                                <FormControl componentClass="select">
                                    <option value="russian">russian</option>
                                    <option value="belorusian">belorusian</option>
                                </FormControl>
                            </FormGroup>
                            {renderLanguage}
                            <FormGroup>
                                <Button onClick={this.handleSubmit}>
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
