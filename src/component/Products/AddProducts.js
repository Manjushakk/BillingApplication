import React from 'react'
import { useDispatch} from 'react-redux'

import ProductsForm from './ProductsForm'
import { startAddProducts } from '../../Actions/productsAction'

const AddProducts = (props) => {

    const dispatch  = useDispatch()

    const formSubmission= (values) => {

        console.log('add products', values)

        dispatch(startAddProducts(values))
    }

    return (

        <div>
            <h2 class = "display-6" >Enter product details</h2><br/>
            <ProductsForm formSubmission = {formSubmission}/>
        </div>
        
    )
}

export default AddProducts