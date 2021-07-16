import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import CoastersService from '../../../services/coasters.service'

class CoasterForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            length: '',
            inversions: '',
            imageUrl: ''
        }
        this.coastersService = new CoastersService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.coastersService
            .saveCoaster(this.state)
            .then(() => {
                this.props.closeModal()
                this.props.refreshCoasters()
                this.setState({ title: '', description: '', length: '', inversions: '', imageUrl: '' })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={this.state.title} onChange={this.handleInputChange} name="title" />
                    </Form.Group>

                    <Form.Group controlId="desc">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={this.handleInputChange} name="description" />
                    </Form.Group>

                    <Form.Group controlId="inve">
                        <Form.Label>Inversiones</Form.Label>
                        <Form.Control type="text" value={this.state.inversions} onChange={this.handleInputChange} name="inversions" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control type="text" value={this.state.length} onChange={this.handleInputChange} name="length" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="text" value={this.state.imageUrl} onChange={this.handleInputChange} name="imageUrl" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Crear montaña rusa</Button>

                </Form>

            </Container>
        )
    }
}

export default CoasterForm
