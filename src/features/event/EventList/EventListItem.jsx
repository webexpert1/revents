import React, { Component } from 'react'
import { Segment, Item, List, Button, Icon} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
    render() {
        const { event, selectEvent, deleteEvent } = this.props;
        return (
                <Segment.Group>
                   <Segment>
                     <Item.Group>
                       <Item>
                         <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                         <Item.Content>
                           <Item.Header as="a">{event.title}</Item.Header>
                           <Item.Description>
                             Hosted by - hosted by {event.hostedBy}
                           </Item.Description>
                         </Item.Content>
                       </Item>
                     </Item.Group>
                   </Segment>
                   <Segment>
                     <span>
                       <Icon name="clock" /> {event.date} |
                       <Icon name="marker" /> {event.menu}
                     </span>
                   </Segment>
                   <Segment secondary>
                     <List horizontal>
                        {event.attendees && event.attendees.map(attende => (
                            <EventListAttendee key={attende.id} attende={attende} />
                        ))}
                     </List>
                   </Segment>
                   <Segment clearing>
                     <span>{event.description}</span>
                     <Button as="a" color="red" floated="right" content="Delete"
                        onClick={() => deleteEvent(event.id)} />
                    <Button as="a" color="teal" floated="right" content="View"
                        onClick={() => selectEvent(event)} />
                   </Segment>
                 </Segment.Group>
        )
    }
}

export default EventListItem;
