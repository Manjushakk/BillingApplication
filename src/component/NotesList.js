import React from 'react'
import { useSelector } from 'react-redux'
import NotesItem from './NotesItem'

const NotesList = (props) => {

    const notes = useSelector((state) => {

        return state.notes
    })

    return (

        <div>
            {notes.length === 0 ? (

            <div>
                <p>No Notes Found</p>
                <p>Add your first Note</p>
            </div>
            ) : (

            <div>
                <p>My Notes - {notes.length}</p>
                <NotesItem />
            </div>
            )}
        </div>
    )
}

export  default NotesList