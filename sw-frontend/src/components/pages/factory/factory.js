import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ListGroup from 'react-bootstrap/ListGroup';

export const displayFilms = (films) => {
    return (
        <div className="dataDisplay">
            <Row>
                <Col sm={12}>
                    <h3>
                        Films
                    </h3>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <ListGroup>
                        {films.map((film) => (
                            <ListGroup.Item action href={`/films/${film.id}`} key={film.id}> {film.title} - {film.release_date.split('-')[0]} </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
}

export const displayStarships = (starships) => {
    return (
        <div className="dataDisplay">
            <Row>
                <Col sm={12}>
                    <h3>
                        Starships
                    </h3>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <ListGroup>
                        {starships.map((starship) => (
                            <ListGroup.Item action href={`/starships/${starship.id}`} key={starship.id}> {starship.name} - {starship.model} </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export const displaySpecies = (species) => {
    return (
        <div className="dataDisplay">
            <Row>
                <Col sm={12}>
                    <h3>
                        Species
                    </h3>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <ListGroup>
                        {species.map((specie) => (
                            <ListGroup.Item action href={`/species/${specie.id}`} key={specie.id}> {specie.name} </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export const displayVehicles = (vehicles) => {
    return (
        <div className="dataDisplay">
            <Row>
                <Col sm={12}>
                    <h3>
                        Vehicles
                    </h3>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <ListGroup>
                        {vehicles.map((vehicle) => (
                            <ListGroup.Item action href={`/vehicles/${vehicle.id}`} key={vehicle.id}> {vehicle.name} - {vehicle.model} </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export const displayPlanets = (planets) => {
    return (
        <div className="dataDisplay">
            <Row>
                <Col sm={12}>
                    <h3>
                        Planets
                    </h3>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <ListGroup>
                        {planets.map((planet) => (
                            <ListGroup.Item action href={`/planets/${planet.id}`} key={planet.id}> {planet.name} </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export const displayCharacters = (chars, title = 'Characters') => {
    return (
        <div className="dataDisplay">
            <Row>
                <Col sm={12}>
                    <h3>
                        {title}
                    </h3>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <ListGroup>
                        {chars.map((char) => (
                            <ListGroup.Item action href={`/people/${char.id}`} key={char.id}> {char.name} </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}