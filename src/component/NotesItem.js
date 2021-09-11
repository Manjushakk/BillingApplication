import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { startRemoveNotes } from '../Actions/notesAction'

const NotesItem = (props) => {

    const dispatch = useDispatch()

    const notes = useSelector((state) => {

        return state.notes
    })

    const handleRemove = (_id) => {

        console.log(_id)

        dispatch(startRemoveNotes(_id))
    }

    return (

       <div>
           {notes.map((note) => {

               return <li key = {note._id}>{note.title}
               <button onClick = {() => {
                   handleRemove(note._id)
               }}>Remove</button></li>
           })}
       </div>
    )

    
}

export default NotesItem 