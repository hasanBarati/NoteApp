import React from "react";
import {Col, Container, Row, Card, Button} from "react-bootstrap";
import {Note} from "../models/notes.model";

interface NotesProps {
    note:Note,
    handleDlete:(id:string) => void
}

export const Notes:React.FunctionComponent<NotesProps>=({note,handleDlete}:NotesProps)=>{

    return(
        <Container className="mt-5">
            <Row>
                <div className="mb-3">
                    <Col>
                        <Card style={{ width: '18rem',backgroundColor:note.color }}>
                            <Card.Body>
                                <Card.Title>{note.title}</Card.Title>
                                <Card.Text>
                                    {note.text}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>

                                <Button onClick={()=>handleDlete(note.id)} className="mb-3" variant="danger">Delete</Button>
                            </Card.Body>

                        </Card>
                    </Col>
                </div>

            </Row>
        </Container>
    )
}