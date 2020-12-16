import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ResultBox extends React.Component {

    peopleResult() {
        const { dataResults } = this.props;
        return(
            <Container>
                <Row >
                { dataResults.map( result => {
                    return (
                    <Col xs={12} sm={12} md={6} lg={4} key={result.id}>
                        <Card style={{ width: '18rem', marginBottom :'20px' }}>
                            <Card.Header><Nav.Link href={`/people/${result.id}`}>{result.name}</Nav.Link></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {result.name} is born in {result.birth_year}. They are {result.height} cm, weigh {result.mass} kg, are {result.hair_color}, have {result.eye_color} eyes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                }) }
                </Row>
            </Container>
        );
    }

    filmsResult() {
        const { dataResults } = this.props;
        return(
            <Container>
                <Row>
                { dataResults.map( result => {
                    return (
                    <Col xs={12} sm={12} md={6} lg={4} key={result.id}>
                        <Card style={{ width: '18rem', marginBottom :'20px' }}>
                                <Card.Header><Nav.Link href={`/films/${result.id}`}>{result.title}</Nav.Link></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {result.opening_crawl.substring(0, 102) + '...'}
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>)
                }) }
                </Row>
            </Container>
        );
    }

    planetsResult() {
        const { dataResults } = this.props;
        return(
            <Container>
                <Row>
                { dataResults.map( result => {
                    return (
                    <Col xs={12} sm={12} md={6} lg={4} key={result.id}>
                        <Card style={{ width: '18rem', marginBottom :'20px' }}>
                                <Card.Header><Nav.Link href={`/planets/${result.id}`}>{result.name}</Nav.Link></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {`${result.name} is in ${result.films.length} movies, and has ${result.residents.length} residents`}
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>)
                }) }
                </Row>
            </Container>
        );
    }

    speciesResult() {
        const { dataResults } = this.props;
        return(
            <Container>
                <Row>
                { dataResults.map( result => {
                    return (
                    <Col xs={12} sm={12} md={6} lg={4} key={result.id}>
                        <Card style={{ width: '18rem', marginBottom :'20px' }}>
                                <Card.Header><Nav.Link href={`/species/${result.id}`}>{result.name}</Nav.Link></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {`${result.people.length} are ${result.name} and it has appeared in ${result.films.length} films`}
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>)
                }) }
                </Row>
            </Container>
        );
    }


    vehiclesResult() {
        const { dataResults } = this.props;
        return(
            <Container>
                <Row>
                { dataResults.map( result => {
                    return (
                    <Col xs={12} sm={12} md={6} lg={4} key={result.id}>
                        <Card style={{ width: '18rem', marginBottom :'20px' }}>
                                <Card.Header><Nav.Link href={`/vehicles/${result.id}`}>{result.name}</Nav.Link></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {`${result.pilots.length} notable characters have piloted it and it has appeared in ${result.films.length} films`}
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>)
                }) }
                </Row>
            </Container>
        );
    }

    starshipsResult() {
        const { dataResults } = this.props;
        return(
            <Container>
                <Row>
                { dataResults.map( result => {
                    return (
                    <Col xs={12} sm={12} md={6} lg={4} key={result.id}>
                        <Card style={{ width: '18rem', marginBottom :'20px' }}>
                                <Card.Header><Nav.Link href={`/starships/${result.id}`}>{result.name}</Nav.Link></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {`${result.pilots.length} notable characters have piloted it and it has appeared in ${result.films.length} films`}
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>)
                }) }
                </Row>
            </Container>
        );
    }

    displayResults() {
        const { data, dataResults, toSearch } = this.props;
        if (!data || !dataResults) {
            return ('');
        }
        if (data.count === 0) {
            return (
                    <p>Pas de resultats</p>
            );
        }
        switch (toSearch) {
            case 'people':
                return (this.peopleResult());
            case 'films':
                return (this.filmsResult());
            case 'species':
                return (this.speciesResult());
            case 'planets':
                return (this.planetsResult());
            case 'vehicles':
                return(this.vehiclesResult());
            case 'starships':
                return(this.starshipsResult());
        };
    }

    render() {
      return (
        <React.Fragment>
            {this.displayResults()}
        </React.Fragment>
      );
    }
  }