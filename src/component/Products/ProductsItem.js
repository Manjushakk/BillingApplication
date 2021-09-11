import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { startRemoveProduct } from '../../Actions/productsAction'
import { startSelectedProduct } from '../../Actions/productsAction'
import EditProduct from './EditProduct'

const ProductsItem = (props) => {

    const {_id,name, price} = props

   
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()


    const handleRemove = (id) =>{

        dispatch(startRemoveProduct(id))
        console.log(id)
    }

    const handleToggle = () => {

        setToggle(!toggle)
    }

    // const handleChange = (id) => {

    //     dispatch(startSelectedProduct(id))

    //     console.log(id)
    // }

    return (

        <>
            {
                 toggle ? (
                <>
                    <EditProduct name = {name} price = {price} id = {_id} handleToggle = {handleToggle}/>
                    <button onClick = {handleToggle}>Cancel</button>
                </>
                ) :
                <>
                    <tr>
                        <td>{name}</td>
                        <td> ₹ {price}</td>
                    

                    {/* <p onClick = {() => {

                        handleChange(_id)
                        
                        }}>{name} {price}</p> */}

                    <td><button onClick = {handleToggle} button class = "btn btn-primary">Edit</button></td>
                    <td><button button class = "btn btn-danger" onClick = {() => {

                        handleRemove(_id)

                    }}>X</button></td>
                </tr>
                </>
            }
            

        </>
    )
}

export default ProductsItem