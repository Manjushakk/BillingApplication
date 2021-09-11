import React, {useState}  from 'react'
import { useSelector } from 'react-redux'

import ListingCartItem from './ListingCartItem'
 

const CartList = (props) => {

    //const[search, setSearch] = useState('')

    const cart = useSelector((state) => {

        return state.cart
    })

    // const customers = useSelector((state) => {

    //     return state.customers
    // })
    

    // const result1 = cart.map((ele) => {

    //     return customers.filter((ele1) => {

    //         return ele1._id === ele.user
    //     })
    // }) 

    // console.log(result1)
    
    
    
    // const handleChange = (e) => {

        
    //     setSearch(e.target.value)

    // }

    // const result =  billing.filter((ele) => {


    //     return ele.name.toLowerCase().includes(search) || ele.mobile.toString().includes(search)
    // })
   
    return (
            
        <div>
            {/* //<input type = "text" value = {search} placeholder = "Search by name or phone" onChange = {handleChange} /> */}
            
            {cart.map((ele,i) => {

                return <ListingCartItem key = {i} {...ele}/>
            })}
            
        </div>
    )
}

export default CartList