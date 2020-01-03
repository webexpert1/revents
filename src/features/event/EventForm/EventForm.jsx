import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''

    }

    handleFormSubmit = evt => {
        evt.preventDefault();
        this.props.createEvent(this.state);
        // console.log(this.state);
    }
    handleInputChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        const {title, date, city, venue, hostedBy} = this.state;
        return (
                 <Segment>
                   <Form onSubmit={this.handleFormSubmit}>
                     <Form.Field>
                       <label>Event Title</label>
                       <input 
                             name='title'
                             value={title}
                             onChange={this.handleInputChange} 
                             placeholder="Event Title" />
                     </Form.Field>
                     <Form.Field>
                       <label>Event Date</label>
                       <input
                             type="date"
                             name='date'
                             value={date}
                             onChange={this.handleInputChange} 
                             placeholder="Event Date" />
                     </Form.Field>
                     <Form.Field>
                       <label>City</label>
                       <input 
                            placeholder="City event is taking place"
                            name='city'
                            value={city}
                            onChange={this.handleInputChange}  />
                     </Form.Field>
                     <Form.Field>
                       <label>Venue</label>
                       <input
                            name='venue'
                            value={venue}
                            onChange={this.handleInputChange} 
                            placeholder="Enter the Venue of the event" />
                     </Form.Field>
                     <Form.Field>
                       <label>Hosted By</label>
                       <input
                            name='hostedBy'
                            value={hostedBy}
                            onChange={this.handleInputChange} 
                            placeholder="Enter the name of person hosting" />
                     </Form.Field>
                     <Button positive type="submit">
                       Submit
                     </Button>
                     <Button type="button" onClick={this.props.cancelFormOpen}>Cancel</Button>
                   </Form>
                 </Segment>
        )
    }
}

export default EventForm;
