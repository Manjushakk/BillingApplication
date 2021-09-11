import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import BillingItem from './BillingItem'


const BillingList = (props) => {

    const billing = useSelector((state) => {

        return state.billing
    })

    return (

        <div>
             <h4 class = "display-6" >Listing Bills - {billing.length}</h4><br/>
             <table class = "table">
                 <thead>
                       <tr>
                           <th>Name</th>
                           <th>Created at</th>
                           <th>Remove</th>
                       </tr>
                            
                       
                </thead>
            <tbody>
                    {billing.map((bill) => {

                        return <BillingItem key = {bill._id} {...bill} />
                    })}
            </tbody>
            </table>
            
        </div>
    )
}

export default BillingList