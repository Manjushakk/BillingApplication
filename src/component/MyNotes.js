import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import { startMyNotes } from '../Actions/notesAction'

const MyNotes = (props) => {

    const dispatch = useDispatch()

    const [id, setId] = useState(uuidv4())
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isSaved, setIsSaved] = useState(false)

    

    useEffect(() => {

        if(isSaved){

            setId(uuidv4())
            setTitle('')
            setBody('')
            toggleIsSaved()
            
        }

    }, [isSaved])

    const toggleIsSaved = () => {

        setIsSaved(false)
    }
    
    const handleChangeTitle = (e) => {

        setTitle(e.target.value)
    }

    const handleChangeBody = (e) => {

        setBody(e.target.value)
    }

    const handleSubmit = (e) =>{

        e.preventDefault()

        const notesData = {

            id : id,
            title : title,
            body : body
        }

        dispatch(startMyNotes(notesData, setIsSaved))
        
    }


    return (

        <div>
            <h3>Add Note</h3>
            <form onSubmit = {handleSubmit}> 
                <input type = "text" value = {title} placeholder = "Title" onChange = {handleChangeTitle}/><br/>
                <textarea value = {body} placeholder = "Body" onChange = {handleChangeBody}></textarea><br/>
                <input type = "submit" value = "save" /><br/>
            </form>
            
        </div>
    )
}

export default MyNotes
