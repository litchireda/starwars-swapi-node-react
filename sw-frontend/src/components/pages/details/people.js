import React, { Component } from 'react';

import { displayFilms, displayStarships, displaySpecies, displayVehicles } from './../factory/factory.js';

import {
    Link
} from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export class PeopleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    displayBaseInfo(data) {
        return (
            <div className="dataDisplay">
                <Row >
                    <Col sm={12}>
                        <h3>
                            Base Information
                        </h3>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <b>Homeworld:</b> <Link to={`/planets/${data.homeworld.id}`}>{data.homeworld.name}</Link> <br/>
                        <b>Birth year:</b> {data.birth_year}<br/>
                        <b>Hair color:</b> {data.hair_color}<br/>
                        <b>Eye color:</b> {data.eye_color}<br/>
                        <b>Height:</b> {data.height}cm<br/>
                        <b>Mass:</b> {data.mass}kg<br/>
                        <b>Skin color:</b> {data.skin_color}<br/>
                    </Col>
                </Row>
            </div>
        )
    }

    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                <Jumbotron className="jumbotron-style">
                    <Container>
                    <Row className="justify-content-md-center">
                        <h1 className="center-text-jumbotron">
                            {data.name}
                        </h1>
                    </Row>
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col className="bc-style" sm={12}>
                            <Breadcrumb >
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/people">
                                    People
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>{data.name}</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    {this.displayBaseInfo(data)}
                    {displayFilms(data.films)}
                    {displayStarships(data.starships)}
                    {displayVehicles(data.vehicles)}
                    {displaySpecies(data.species)}
                </Container>
            </React.Fragment>
        )
    }
}

export default PeopleDetail
