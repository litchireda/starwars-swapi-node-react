import React, { Component } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';

import { displayStarships, displaySpecies, displayCharacters, displayPlanets, displayVehicles } from './../factory/factory.js';


import {
    Link
} from 'react-router-dom';

export class FilmDetail extends Component {

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
                    <Col sm={12}>
                    <Card>
                        <Card.Header>Synopsis</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {data.opening_crawl}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>Directed by {data.director}. Produced by {data.producer}.</Card.Footer>
                        </Card>
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
                            {data.title} {`(${data.release_date.split('-')[0]})`}
                        </h1>
                    </Row>
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col className="bc-style" sm={12}>
                            <Breadcrumb >
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/films">
                                    Films
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>{data.title}</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    {this.displayBaseInfo(data)}
                    {displayCharacters(data.characters)}
                    {displayVehicles(data.vehicles)}
                    {displayStarships(data.starships)}
                    {displaySpecies(data.species)}
                    {displayPlanets(data.planets)}
                </Container>
            </React.Fragment>
        )
    }
}

export default FilmDetail
