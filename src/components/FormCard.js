import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    ListGroup,
    ListGroupItem,
    CardLink
} from "reactstrap"

export default function FormCard(props){
    return(
        <Card>
            <CardBody>
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardText>{props.activities}</CardText>
            </CardBody>
            <ListGroup flush>
                <ListGroupItem>Contact URL: {props.contactURL}</ListGroupItem>
                <ListGroupItem>City: {props.contactCity}</ListGroupItem>
                <ListGroupItem>State: {props.contactState}</ListGroupItem>
                <ListGroupItem>Address: {props.contactAddress}</ListGroupItem>
                {props.contactAddress2 ? <ListGroupItem>Address: {props.contactAddress2}</ListGroupItem>
                :
                null
                }
            </ListGroup>
            <CardBody>
                <CardLink href={props.contactURL}>Website</CardLink>
            </CardBody>
        </Card>
    )
}