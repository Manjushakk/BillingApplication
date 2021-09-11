import React from 'react'
import CustomersForm from './CustomerForm'
import { useDispatch} from 'react-redux'

import { startAddCustomers } from '../../Actions/customersAction'

const AddCustomers = (props) => {

   
    const dispatch  = useDispatch()

    const formSubmission= (values) => {

        dispatch(startAddCustomers(values))
    }

   
    return (

        <div>
            <h2 class = "display-6" > Please Enter the details</h2>
            <CustomersForm formSubmission = {formSubmission} />
            
        </div>
    )

}

export default AddCustomers