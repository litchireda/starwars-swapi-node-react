import React, { Component } from 'react'
import { displayFilms, displayCharacters } from './../factory/factory.js';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export class VehicleDetail extends Component {
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
                        <b>Name - Model:</b> {data.name} - {data.model} <br/>
                        <b>Manufacturer:</b> {data.manufacturer}<br/>
                        <b>Max atmosphering speed:</b> {data.max_atmosphering_speed} <br/>
                        <b>Cost:</b> {data.cost_in_credits} credits<br/>
                        <b>Length:</b> {data.length}m<br/>
                        <b>Crew:</b> {data.crew}<br/>
                        <b>Cargo Capacity:</b> {data.cargo_capacity}kg<br/>
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
                                <Breadcrumb.Item href="/vehicles">
                                    Vehicles
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>{data.name}</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    {this.displayBaseInfo(data)}
                    {displayCharacters(data.pilots, 'Pilots')}
                    {displayFilms(data.films)}
                </Container>
            </React.Fragment>
        )
    }
}

export default VehicleDetail
