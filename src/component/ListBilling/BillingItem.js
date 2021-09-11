import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
//import CustomersList from '../Customer/CustomersList'
import { startRemoveBilling } from '../../Actions/billingAction'
import { startViewBilling } from '../../Actions/billingAction'
import { startSelectedUser } from '../../Actions/billingAction'
import { useDispatch } from 'react-redux'

const BillingItem = (props) => {

    const {_id, date, customer, total} = props

    const dispatch = useDispatch()

    const customers = useSelector((state) => {

        return state.customers
    })

    const result = customers.map((ele) => {

        if(ele._id === customer){

            return ele.name
        }

    })

const handleRemove = (id) => {

    dispatch(startRemoveBilling(id))

        console.log(id)
}


return (

        <>

            <tr>
              
            <td>{customers.map((ele) => {

                if(ele._id === customer){

                        return <Link to = {`/billing/${_id}`}>
                            
                           
                                    {ele.name} <br/>
                          </Link>     
                }

            })} </td>

            <td>{date}</td>
          
            <td><button onClick = {() => {

                        handleRemove(_id)

                    }}>Remove</button></td>
             </tr>    
                   
        </>
    )


}

export default BillingItem