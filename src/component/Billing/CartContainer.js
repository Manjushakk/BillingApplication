import React, {useEffect, useState} from 'react'
import AddBills from './AddBills'
import CartList from './CartList'



import { useDispatch} from 'react-redux'
import { startGetBills } from '../../Actions/billingAction'

const CartContainer = (props) => {

    // const [toggle, setToggle] = useState(false)

    // const handleToggle = () => {

    //     setToggle(!toggle)
    // }

    const dispatch = useDispatch()
    
        useEffect(() => {
    
            dispatch(startGetBills())
    
        },[])


    
    return (

        <div>
               
               <AddBills />
               <CartList /> 
             
                
               
        </div>
    )

}

export default CartContainer