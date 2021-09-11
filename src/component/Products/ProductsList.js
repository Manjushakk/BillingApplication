import React, {useState}  from 'react'
import { useSelector } from 'react-redux'
import ProductsItem from './ProductsItem'

const ProductsList = (props) => {

    const[search, setSearch] = useState('')

    const products = useSelector((state) => {

        return state.products
    })

    

    const handleChange = (e) => {

        
        setSearch(e.target.value)

    }

    const result =  products.filter((ele) => {


        return ele.name.toLowerCase().includes(search)
    })
   
    return (
            
        <div>
            <input type = "text" value = {search} placeholder = "Search..." onChange = {handleChange} />
            <h4 class = "display-6"  >Listing Products - {products.length}</h4>
        <table className = "table ">

        <thead>
                    <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Remove</th>
                    </tr>
             </thead>
        <tbody>
            {result.map((prod) => {

                return <ProductsItem key = {prod._id} {...prod}/>
            })}
        </tbody>
        </table>
        </div>
    )
}

export default ProductsList