import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Note} from "../models/notes.model";
import {Notes} from "./Notes";

interface NoteListsProps{
    notes:Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

export const NoteLists:React.FunctionComponent<NoteListsProps>=({notes,setNotes}:NoteListsProps)=>{
    const handleDelete=(id:string)=>{
          console.log(id)
        setNotes(notes.filter(note=>note.id !== id))
    }
    const renderNotes=(): JSX.Element[]=>{

      return   notes.map(note=> {
          return <Notes note={note} key={note.id} handleDlete={handleDelete}/>
      })
    }
    return(
      <Container className="mt-5">
          <Row>
              <Col>
                  {renderNotes()}
              </Col>
          </Row>
      </Container>
    )
}