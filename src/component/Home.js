import React from 'react'
import { useSelector } from 'react-redux'

const Home = (props) => {

    

    const products = useSelector((state) => {

        return state.products
    })

    const customers = useSelector((state) => {

        return state.customers
    })

    
    const billing = useSelector((state) => {

        return state.billing
    })

    return (

        <h1>Billing Application</h1>
        // <div className= "col md-4">
            
        //     <div className = "card mt-4" >
        //         <div className = "card body" >
                
        //             <h3>Customers - {customers.length}</h3>
        //         </div>
        //     </div>
        //         <div className = "card mt-4" >
        //             <div className = "card body" >
                 
        //                 <h3>Products - {products.length}</h3>
                    
        //             </div>
        //         </div>

        //         <div className = "card mt-4" >
        //             <div className = "card body" >
                 
        //             <h3>Bills - {billing.length}</h3>
                    
        //             </div>
        //         </div>

        
        // </div>
    )
}

export default Home