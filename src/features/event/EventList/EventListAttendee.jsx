import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react';

export default class EventListAttendee extends Component {
    render() {
        const { attende } = this.props;
        return (
            <List.Item>
                <Image as='a' size='mini' circular src={attende.photoURL} />
            </List.Item>
        )
    }
}

