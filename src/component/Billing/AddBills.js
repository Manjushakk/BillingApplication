import React, {useState, useEffect} from 'react'
import CartItems from './CartItems'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { startAddBills } from '../../Actions/billingAction'
import { startSelectedUser } from '../../Actions/billingAction'
import GenerateBill from './GenerateBill'
//import { startSelectedUser } from '../../Actions/billingAction'

const AddBills = (props) => {

    //const {handleToggle} = props
    const [customerID, setCustomerID] = useState('')
   // const [value, setValue] = useState()
    //const [toggle, setToggle] = useState(true)
    const dispatch  = useDispatch()

    const billing = useSelector((state) => {

        return state.billing
    })

    console.log(billing.length)

    const customers = useSelector((state) => {

        return state.customers
    })

    
    // const handleToggle = () => {

    //     setToggle(!toggle)
    // }

    const cart = useSelector((state) => {

            return state.cart
        })

    const formSubmission = (values) => {

        //setValue(values)
        // console.log('value in state', value)
        // console.log('add bills values', values)
      
        dispatch(startAddBills(values))

       
       
        //setCustomerID(values.customer)
        console.log('customerID',values.customer)
       


        
}

const setCustomer = (info) => {

    setCustomerID(info)
}

//console.log('info', customerID)

const result = billing.filter((ele) => {

    return ele.customer === customerID

})



console.log('result', result)


    return (


       
        <div>
            
            
            <h2>Items Billing</h2>
            <CartItems formSubmission = {formSubmission} setCustomer = {setCustomer}/>
           

                {result.map((ele) => {

                    return <GenerateBill key = {ele._id} {...ele}/> 
                })
            }
            
            
            
            
            
        </div>
    )

}

export default AddBills