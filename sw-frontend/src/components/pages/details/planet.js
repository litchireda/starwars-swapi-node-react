import React, { Component } from 'react'
import { displayFilms, displayCharacters } from './../factory/factory.js';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export class PlanetDetail extends Component {
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
                        <b>Population:</b> {data.population} <br/>
                        <b>Terrain:</b> {data.terrain}<br/>
                        <b>Surface water:</b> {data.surface_water}%<br/>
                        <b>Climate.s:</b> {data.climate}<br/>
                        <b>Diameter:</b> {data.diameter}Km<br/>
                        <b>Orbital period:</b> {data.orbital_period} days<br/>
                        <b>Rotation period:</b> {data.rotation_period} hours<br/>
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
                                <Breadcrumb.Item href="/planets">
                                    Planets
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>{data.name}</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    {this.displayBaseInfo(data)}
                    {displayCharacters(data.residents, 'Residents')}
                    {displayFilms(data.films)}
                </Container>
            </React.Fragment>
        )
    }
}

export default PlanetDetail
