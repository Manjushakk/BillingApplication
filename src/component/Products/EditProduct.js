import React from 'react'
import ProductsForm from './ProductsForm'
import { useDispatch} from 'react-redux'
import { startEditProduct } from '../../Actions/productsAction'

const EditProduct = (props) => {

    const {id, name, price, handleToggle} = props

    
    const dispatch = useDispatch()

    const formSubmission = (values) => {

        console.log(values)
        dispatch(startEditProduct(values, id))

        handleToggle()
    }

    return (

        <div>
            <ProductsForm name = {name} price = {price} formSubmission = {formSubmission} id = {id}/>
        </div>
    )
}

export default EditProduct