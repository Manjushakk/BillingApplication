import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { startGetProducts } from '../../Actions/productsAction'


import AddProducts from './AddProducts'
import ProductsList from './ProductsList'

const ProductsContainer = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(startGetProducts())

    },[])

    return (

        <div>
        
        <AddProducts /><br/>
        <ProductsList /><br/>
       
        </div>
    )
}

export default ProductsContainer