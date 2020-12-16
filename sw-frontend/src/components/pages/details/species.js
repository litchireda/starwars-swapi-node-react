import React, { Component } from 'react'

import {
    Link
} from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { displayFilms, displayCharacters } from './../factory/factory.js';


export class SpeciesDetail extends Component {
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
                        <b>Classification:</b> {data.classification}<br/>
                        <b>Skin color.s:</b> {data.skin_colors}<br/>
                        <b>Hair color.s:</b> {data.hair_colors}<br/>
                        <b>Eye color.s:</b> {data.eye_colors}<br/>
                        <b>Average Height:</b> {data.average_height}cm<br/>
                        <b>Average Lifespan:</b> {data.average_lifespan}years<br/>
                        <b>Language:</b> {data.language}<br/>
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
                                <Breadcrumb.Item href="/species">
                                    Species
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>{data.name}</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    {this.displayBaseInfo(data)}
                    {displayFilms(data.films)}
                    {displayCharacters(data.people)}
                </Container>
            </React.Fragment>
        )
    }
}

export default SpeciesDetail
