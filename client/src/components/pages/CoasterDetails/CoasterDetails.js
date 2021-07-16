import { Component } from 'react'
import CoastersService from '../../../services/coasters.service'

import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CoasterDetails extends Component {

    constructor() {
        super()
        this.state = {
            coaster: undefined
        }
        this.coastersService = new CoastersService()
    }


    componentDidMount() {

        const { coaster_id } = this.props.match.params

        this.coastersService
            .getOneCoaster(coaster_id)
            .then(response => this.setState({ coaster: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Container>

                {!this.state.coaster
                    ?
                    <h3>Cargando</h3>
                    :
                    <Row className="justify-content-around">
                        <Col md={6}>
                            <h1>{this.state.coaster.title}</h1>
                            <p>{this.state.coaster.description}</p>

                            <hr></hr>

                            <p>Longitud: {this.state.coaster.length}</p>
                            <p>Inversiones: {this.state.coaster.inversions}</p>

                            <hr></hr>

                            <Link to="/montañas-rusas" className="btn btn-dark">Volver al listado</Link>

                        </Col>

                        <Col md={4}>
                            <img src={this.state.coaster.imageUrl} alt={this.state.coaster.title} style={{ width: '100%' }} />
                        </Col>
                    </Row>
                }

            </Container>
        )
    }
}


export default CoasterDetails