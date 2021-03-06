import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import api from '../api'


class MoviesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            date_added: '',
            release_date: '',
            category: '',
            movie_director: '',
            poster: ''
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputDateAdded = async event => {
        const date_added = event.target.value
        this.setState({ date_added })
    }

    handleChangeInputReleaseDate = async event => {
        const release_date = event.target.value
        this.setState({ release_date })
    }

    handleChangeInputCategory = async event => {
        const category = event.target.value
        this.setState({ category })
    }

    handleChangeInputDirector = async event => {
        const movie_director = event.target.value
        this.setState({ movie_director })
    }

    handleChangeInputPoster = async event => {
        const poster = event.target.value
        this.setState({ poster })
    }

    handleIncludeMovie = async () => {
        const { title, date_added, release_date, category, movie_director, poster } = this.state
        const payload = { title, date_added, release_date, category, movie_director, poster }

        await api.insertMovie(payload).then(res => {
            window.alert(`Movie created successfully`)
            this.setState({
                title: '',
                date_added: '',
                release_date: '',
                category: '',
                movie_director: '',
                poster: ''
            })
        })
    }

    render() {
        const { title, date_added, release_date, category, movie_director, poster } = this.state
        return (
            <div className="py-4">
                <div className="container">
                    <Row className="justify-content-md-center">
                        <Col md='6'>
                            <h3 className="mb-4">Create Movie</h3>

                            <Row className="form-group align-items-center">
                                <Col md="3"><label>Title:</label></Col>
                                <Col md="9"><input className="form-control" type="text" value={title}
                                    onChange={this.handleChangeInputTitle} /></Col>
                            </Row>

                            <Row className="form-group align-items-center">
                                <Col md="3"><label>Date Added:</label></Col>
                                <Col md="9"><input className="form-control" type="date" value={date_added}
                                    onChange={this.handleChangeInputDateAdded} /></Col>
                            </Row>

                            <Row className="form-group align-items-center">
                                <Col md="3"><label>Release Date:</label></Col>
                                <Col md="9"><input className="form-control" type="date" value={release_date}
                                    onChange={this.handleChangeInputReleaseDate} /></Col>
                            </Row>

                            <Row className="form-group align-items-center">
                                <Col md="3"><label>Category:</label></Col>
                                <Col md="9"><input className="form-control" type="text" value={category}
                                    onChange={this.handleChangeInputCategory} /></Col>
                            </Row>

                            <Row className="form-group align-items-center">
                                <Col md="3"><label>Director:</label></Col>
                                <Col md="9"><input className="form-control" type="text" value={movie_director}
                                    onChange={this.handleChangeInputDirector} /></Col>
                            </Row> 

                            <Row className="form-group align-items-center">
                                <Col md="3"><label>Poster:</label></Col>
                                <Col md="9"><input className="form-control" type="text" value={poster}
                                    onChange={this.handleChangeInputPoster} /></Col>
                            </Row> 

                            <Row className="justify-content-end">
                                <Col md="3">
                                    <button className="btn btn-primary btn-block" onClick={this.handleIncludeMovie}>Add Movie</button>
                                </Col>
                                <Col md="3">
                                    <a className="btn btn-danger btn-block" href={'/movies/list'}>Cancel</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default MoviesInsert
