import fetch from 'node-fetch';
import React, { Component } from 'react'
import Loader from './../../assets/loader.gif';

import PeopleDetail from './details/people';
import FilmDetail from './details/film';
import PlanetDetail from './details/planet';
import SpeciesDetail from './details/species';
import StarshipDetail from './details/starship';
import VehicleDetail from './details/vehicle';

import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Container from 'react-bootstrap/Container';


export class DetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            loading: true,
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const { what } = this.props;
        this.getData(what, id);
    }
    
    async getData(what, id) {
        let data = await fetch(`http://localhost:3001/${what}/${id}`);
        data = await data.json();

        this.setState({
            data: data,
            loading: false
        });
    }

    displayResults(what, data) {
        switch (what) {
            case 'people':
                return(<PeopleDetail data={data}/>);
            case 'films':
                return(<FilmDetail data={data}/>);
            case 'species':
                return(<SpeciesDetail data={data}/>);
            case 'planets':
                return(<PlanetDetail data={data}/>);
            case 'vehicles':
                return(<VehicleDetail data={data}/>);
            case 'starships':
                return(<StarshipDetail data={data}/>);
        };
    }

    render() {
        const { loading, data } = this.state;
        const { what } = this.props;
        return (
            <div>
                {
                    loading
                        ? 
                    <Jumbotron className="jumbotron-style">
                        <Container>
                            <Row className="justify-content-md-center">
                                <div className="loading-container"><img src={Loader} alt='loading' height='90px'/></div> 
                            </Row>
                        </Container>
                    </Jumbotron>
                        : 
                    this.displayResults(what, data)
                }
            </div>
        )
    }
}

export default DetailsPage
