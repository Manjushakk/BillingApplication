import React from 'react'
import CustomerForm from './CustomerForm'
import { useDispatch} from 'react-redux'
import { startEditCustomers } from '../../Actions/customersAction'

const EditCustomer = (props) => {

    const {id, name, mobile, email, handleToggle} = props

    
    const dispatch = useDispatch()

    const formSubmission = (values) => {

        console.log(id)
        dispatch(startEditCustomers(values, id))

        handleToggle()
    }

    return (

        <div>
            <CustomerForm name = {name} email = {email} mobile = {mobile} formSubmission = {formSubmission} id = {id}/>
        </div>
    )
}

export default EditCustomer