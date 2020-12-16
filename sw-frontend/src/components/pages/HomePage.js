import React from 'react';
import fetch from 'node-fetch';
import Loader from './../../assets/loader.gif';

import ResultBox from './search/resultbox';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            query: '',
            toSearch: 'people',
            searched: null,
            data: null,
            dataResults: null,
            loading: false,
        };
        this.textChange = this.textChange.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changePage  = this.changePage.bind(this);
        this.searchCategory  = this.searchCategory.bind(this);
    }

    textChange(event) {
        this.setState({  
            query: event.target.value
        });
    }

    selectChange(event) {
        this.setState({  
            toSearch: event.target.value
        });
    }

    componentDidMount() {
        const toSearchTab = [
            'people',
            'films',
            'planets',
            'vehicles',
            'starships',
            'species'
        ];

        if (this.props.match) {
            if (!toSearchTab.includes(this.props.match.params.category)) {
                this.props.history.push('/');
            } else {
                this.searchCategory();
            }
        }
    }

    async searchCategory() {
        const { category } = this.props.match.params;
        this.setState({ searched: category, toSearch: category, loading: true });
        let results = await fetch(`http://localhost:3001/${category}`);
        results = await results.json();
        this.setState({data: results, dataResults: results.results, loading: false});
    }

    async handleSubmit(event) {
        const { query, toSearch } = this.state;
        event.preventDefault();
        this.setState({
            loading: true,
            searched: toSearch
        });
        let results = await fetch(`http://localhost:3001/${toSearch}?search=${query}`);
        results = await results.json();
        if (results.count === 0) {
            this.setState({error: 'Pas de résultats', loading: false, data: null, dataResults: null});
        } else {
            this.setState({data: results, dataResults: results.results, loading: false, error: null});
        }
    }

    async changePage(event) {
        const { query, toSearch, data } = this.state;
        this.setState({
            loading:true
        });
        let url = `http://localhost:3001/${toSearch}`;
        if (query) {
            url += `?search=${query}&page=${event.target.value}`;
        } else {
            url += `?page=${event.target.value}`;
        }
        let results = await fetch(url);
        results = await results.json();
        this.setState({data: results, dataResults: results.results, loading: false});
    }


    render() {
        const { query, toSearch, error, loading, dataResults, data, searched } = this.state;
        let button = <Button variant="danger" type="submit" disabled={true}> Search </Button>;
        if (query) {
            button = <Button variant="primary" type="submit"> Search </Button>;
        }
        return (
            <React.Fragment>
            <Jumbotron className="jumbotron-style">
                <Container>
                    {
                    this.props.match
                        ?
                    <Row className="justify-content-md-center">
                        <h1 className="center-text-jumbotron">
                            {this.props.match.params.category.charAt(0).toUpperCase() + this.props.match.params.category.slice(1)}
                        </h1>
                    </Row>
                        :
                    <Form onSubmit={this.handleSubmit}>
                        <Row noGutters={true} className="justify-content-md-center">
                            <Col sm={4}>
                                <Form.Control value={toSearch} onChange={this.selectChange} as="select">
                                    <option value='films'>Films</option>
                                    <option default value='people'>People</option>
                                    <option value='planets'>Planets</option>
                                    <option value='species'>Species</option>
                                    <option value='starships'>Starships</option>
                                    <option value='vehicles'>Vehicles</option>
                                </Form.Control>
                            </Col>
                            <Col sm={6}>
                                <Form.Control type="text" value={query} onChange={this.textChange} placeholder="What are you looking for ?" />
                            </Col>
                            <Col sm={2}>
                                { button }
                            </Col>
                        </Row>
                    </Form>
                    }
                </Container>
            </Jumbotron>
            <Container fluid={true}>
                { 
                loading 
                    ? 
                <div className="loading-container"><img src={Loader} alt='loading'/></div> 
                    : 
                <ResultBox toSearch={searched} data={data} dataResults={dataResults}/>
                }
                {
                error
                    ?
                <Alert variant="danger"> {error} </Alert>
                    :
                <React.Fragment></React.Fragment>
                }
            </Container>
            { 
            data
                ?
            <Container>
                <Row>
                    <Col sm={2}>
                        {data.previous ? <Button onClick={this.changePage} value={data.previous.slice(-1)} variant="info">Prev</Button> : <Button variant="info" disabled>Prev</Button>}
                    </Col>
                    <Col sm={2} md={6}>
                    </Col>
                    <Col sm={3}>
                        {data.next ? <div style={{textAlign:'right'}}><Button onClick={this.changePage} value={data.next.slice(-1)} variant="info">Next</Button></div> : <div style={{textAlign:'right'}}><Button variant="info" disabled>Next</Button></div>}
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row>
            </Container>
                :
                ''
            }
            </React.Fragment>
        );
    }
}