import React,{useEffect} from 'react'
import { startGetCustomers } from '../../Actions/customersAction'
import { useDispatch} from 'react-redux'

import AddCustomers from './AddCustomers'
import CustomersList from './CustomersList'


const CustomersContainer = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(startGetCustomers())

    },[])

    return (

        <div className = "row" >
           
            <AddCustomers  /><br/>
            
            <CustomersList />
            
            

        </div>
    )

}

export default CustomersContainer

// import React,{useEffect} from 'react'
// import axios from 'axios'
// import { startGetNotes } from '../Actions/notesAction'
// import { useDispatch } from 'react-redux'

// import NotesList from './NotesList'
// import MyNotes from './MyNotes'


// const NotesContainer = (props) => {

//     const dispatch = useDispatch()

//     useEffect(() => {

//         dispatch(startGetNotes())
//     },[])

//     return (

//         <div>
//             <NotesList />
//             <MyNotes />
//            {/* <NotesList notes = {notes} removeNote = {removeNote}/>
//            <MyNotes addNotes = {addNotes} /> */}
//         </div>
//     )
// }

// export default NotesContainer