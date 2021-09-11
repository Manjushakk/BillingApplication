import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {style} from 'bootstrap'
import DatePicker from 'react-datepicker'
import { addCart } from '../../Actions/cartAction'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch} from 'react-redux'
import { startAddBills } from '../../Actions/billingAction'
import { resetCart } from '../../Actions/cartAction'




// import { useFormik } from 'formik'
// import * as Yup from 'yup'


const CartItems = (props) => {

    const {formSubmission, getCustomerID, handleToggle, setCustomer} = props
    const [customerSelect, setcustomerSelect] = useState('')
    const [productSelect, setProductSelect] = useState('')
    const [lineItems, setLineItems] = useState([])
    const [selectedDate, setSelectedDate] = useState(null)
    
    

   

    const customers = useSelector((state) => {

        return state.customers
    })

    const products = useSelector((state) => {

        return state.products
    })

    const dispatch  = useDispatch()

    const billing = useSelector((state) => {

        return state.billing
    })

    const handleDateChange = (date) => {

        setSelectedDate(date)
    }

    const handleCustomerChange = (e) => {

        setcustomerSelect(e.target.value)
        //setLineItems([])
        dispatch(resetCart())
       
        setCustomer(e.target.value)
      
    }

    const cart = useSelector((state) => {

        return state.cart
    })


    const handleProductChange = (e) => {

        setProductSelect(e.target.value)
        console.log('selected product', e.target.value)
    
       
    //setListing([list, ...listing])
   
    // setLineItems([list, ...lineItems])

    // lineItemsSubmission(lineItems)
    
    
     //setProductSelect([list, ...productSelect])
     //console.log('productSelect', productSelect )
    
    //  console.log('lineItems', lineItems)
    
    
}


const handleAdd = (id) => {

    // e.preventDefault()

    console.log('product ID', id)
   
    let listCartItems = {

        product: id,
        quantity: 1
    }
     console.log('listCartItems', listCartItems)
    dispatch(addCart(listCartItems))
   
   
    //setLineItems([listCartItems, ...lineItems])

}


const handleSubmit = (e) => {
    
    e.preventDefault()

    const BillingObject = {

        date: selectedDate,
        customer:customerSelect,
        lineItems : cart
    }

    console.log('BillingDispatch', BillingObject )
    formSubmission(BillingObject) 

   
    
    
}
console.log('lineItems', lineItems)






return (

    <div>

                <label class = "form-control">Enter date</label>
                <DatePicker type="email" selected = {selectedDate} onChange = {handleDateChange} /> 
            
        {/* <label class = "form-select form-select-lg mb-3" >Enter Date</label>
         <DatePicker selected = {selectedDate} onChange = {handleDateChange} class = "form-select form-select-lg mb-3"/> */}
        <form >
            <select  class="form-select form-select-lg mb-3" value = {customerSelect} onChange  = {handleCustomerChange} >
                <option value = "">Select customer</option>
                {customers.map((cus) => {

                    return <option value = {cus._id} key = {cus._id}>{cus.name}</option>
                })}
            </select>
            
           
           {/* <select value = {productSelect} class="form-select form-select-lg mb-3" onChange  = {handleProductChange} >
                <option value = "">Select Product</option>
              )  {products.map((prod) => {

                    return <option value = {prod._id} key = {prod._id}>{prod.name}</option>
                })}
            </select> */}
           
           
            {/* <button onClick = {handleAdd} class="btn btn-dark" > Add Item </button> &nbsp;&nbsp;&nbsp; */}
           
        </form>
            {products.map((prod) => {

                return ( <div>

                        <div class="card" >
                        <div class="row">
                        <div class="card-body">
                        <div class="col-sm-3">
                        <p value = {prod._id} class="form-control me-auto" > {prod.name} </p>
                                <button type="button" class="btn btn-secondary" onClick = {() => {

                                    handleAdd(prod._id)

                                    }}>add</button>
                                     
                                

                        </div>
                        </div>
                        </div>
                       
                   
                    </div>
                    
                </div>)
            })}
            
        
        <button onClick = {handleSubmit} class = "btn btn-primary">Checkout</button>
        
       
    </div>
    )
}

export default  CartItems