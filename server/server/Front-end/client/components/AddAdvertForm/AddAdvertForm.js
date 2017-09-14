import React from 'react';
import { Grid, Row, Col, Form, ControlLabel, FormControl, FormGroup, Button, Radio } from 'react-bootstrap';
import './addAdvertForm.scss';
import { validateOnExistence } from '../../helpers/validationHelper';
import validType from '../../constants/validation/validation';
import { advertTypeInInt, advertTypeInString } from '../../constants/AdvertType';
import { Redirect } from 'react-router-dom';

export default class AddAdvertForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            type: advertTypeInInt[advertTypeInString[1]],
            countryId: '',
            cityId: '',
            street: '',
            errors: {
                titleValid: validType.default,
                descriptionValid: validType.default, 
                countryValid: validType.default,
                cityValid: validType.default,
                streetValid: validType.default,
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateData = this.validateData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.changeCity = this.changeCity.bind(this);
    }

    componentDidMount() {
        this.props.getCountries();
    }

    handleChange(e) {
        if (e.target.id == 'country') {
            this.changeCountry(e.target.value);
        } else if (e.target.id == 'city') {
            this.changeCity(e.target.value)
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
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

    handleSubmit(e) {
        if(this.validateData()) {
            this.props.createAdvert({
                title: this.state.title,
                description: this.state.description,
                type: this.state.type,
                address: {
                    cityId: this.state.cityId,
                    street: this.state.street,
                }
               
            });
            this.props.history.push('/account');
        }
    }

    validateData() {
        let errors = {
            titleValid: validateOnExistence(this.state.title),
            descriptionValid: validateOnExistence(this.state.description),
            countryValid: validateOnExistence(this.state.countryId),
            cityValid: validateOnExistence(this.state.cityId),
            streetValid: validateOnExistence(this.state.street),
        };

        this.setState({ errors });

        return Object.keys(errors)
            .map(field => errors[field] === validType.success)
            .reduce((prev, curr) => prev && curr);
    }

    render() {
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
                    <Col className="new-advert" xs={12} smOffset={3} sm={6} >
                        <Form onChange={this.handleChange}>
                            <FormGroup controlId="type">
                                <ControlLabel>Please, choice advert type.</ControlLabel>
                                <FormControl componentClass="select" placeholder="Reception">
                                    <option value={advertTypeInInt[advertTypeInString[1]]}>{advertTypeInString[1]}</option>
                                    <option value={advertTypeInInt[advertTypeInString[2]]}>{advertTypeInString[2]}</option>
                                </FormControl>
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
                            <FormGroup controlId="street" validationState={this.state.errors.streetValid}>
                                <ControlLabel>Enter street and home</ControlLabel>
                                <FormControl type="text" />
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