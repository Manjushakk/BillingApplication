import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { startRemoveCustomer } from '../../Actions/customersAction'
import { incQuantity } from '../../Actions/cartAction'
import { decQuantity } from '../../Actions/cartAction'
import { deleteProduct } from '../../Actions/cartAction'

//import EditCustomer from './EditCustomer'

const ListingCartItem = (props) => {

    const {Date, quantity, product , user} = props

   console.log('Date', Date)
    // const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    const products = useSelector((state) => {

        return state.products
    })

    const customers = useSelector((state) => {

        return state.customers
    })

    const cart = useSelector((state) => {

        return state.cart
    })

    // const prod = products.map((ele) => {

    //     if(ele._id === product){

    //         return ele.name

    //     }
    // })


    const prodQuantity = cart.map((ele) => {

        if(ele.product === product ){

            return ele.quantity
        }
    })
    
    
    
    // const handleRemove = (id) =>{

    //     dispatch(startRemoveCustomer(id))
    // }

    // const handleToggle = () => {

    //     setToggle(!toggle)
    // }

    const handleIncQuantity = (product) => {

        dispatch(incQuantity(product))
    }

    const handleDecQuantity = (product) => {

        dispatch(decQuantity(product))
    }

    const handleDelete = (product) => {

        dispatch(deleteProduct(product))
    }
    return (

        <div>
             
                    {products.map((ele) => {

                        if(ele._id === product){

                            return (
                            <div ke = {ele._id}>
                                <p>{ele.name}</p>
                                <p>INR {ele.price}</p>
                            </div>)

                        }
                   })}
                    
                    <button onClick = { () => {

                        handleDecQuantity(product)

                    }} disabled = {quantity === 1} class="btn btn-secondary" >-</button>
                     
                        {prodQuantity} 
                    
                    <button onClick = { () => {
                        
                        handleIncQuantity(product)
                    
                    }} class="btn btn-secondary" >+</button>


                    <button onClick = {() => {

                    handleDelete(product)

                    }}class="btn btn-link">Remove</button>
               
        
            

        </div>
    )
}

export default ListingCartItem