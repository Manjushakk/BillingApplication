import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'


const ShowBill = (props) => {

    const { _id } = props.match.params
    const [singleBill, setSingleBill] = useState({})
    const [lineItemsArray, setLineItemsArray] = useState([])
    
  

    useEffect(() => {

        const token = localStorage.getItem('token')

     
            axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${_id}` ,{
    
            headers : {
    
                        'Authorization' : `Bearer ${token}`
                    }
            })
    
            .then((response) => {
    
                const result = response.data

                    setSingleBill(result)
                    
                    
                    setLineItemsArray(result.lineItems)
                   
                
                
            })
    
            .catch((err) => {
    
                alert(err.message)
            })
    
        
    
    },[])

    const customers = useSelector((state) => {

        return state.customers
    })

    const products = useSelector((state) => {

        return state.products
    })

    const billing = useSelector((state) => {

        return state.billing
    })



    

       const customerName = customers.map((cus) => {

            if(singleBill.customer === cus._id){

                return cus.name
            }


       
    })

    console.log(customerName)
    // console.log(singleBill.lineItems)

    // const lineItemsArray = singleBill.lineItems

    

  
   
   

    
  


 


  
    return (
        <>
            <p>Invoice ID: {singleBill._id} </p>
            <p>CustomerName: {customerName}</p>

            <table class = "table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>

                    </tr>
                </thead>

        <tbody>
                
                    {lineItemsArray.map((ele) => {

                            return products.map((prod) => {

                                if(prod._id === ele.product)
                                {

                                    return (
                                    <tr>
                                            <td>{prod.name}</td>
                                            <td>{ele.price}</td>
                                            <td>{ele.quantity}</td>
                                            <td>{ele.subTotal}</td>
                                    </tr>)

                                }
                            })

                    })}

        </tbody>          
                
            </table>
            
            <p>Total: {singleBill.total}</p>  
            <Link to = "/billing">back</Link>
         
        </>
    )
}

export default ShowBill