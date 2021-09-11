import React, {useState}  from 'react'
import { useSelector } from 'react-redux'
import CustomersItem from './CustomersItem'

 

const CustomersList = (props) => {

    const[search, setSearch] = useState('')

    const customers = useSelector((state) => {

        return state.customers
    })

    
    
    
    const handleChange = (e) => {

        
        setSearch(e.target.value)

    }

    const result =  customers.filter((ele) => {


        return ele.name.toLowerCase().includes(search) || ele.mobile.toString().includes(search)
    })
   
    return (
            
        
         
            // <div class="input-group">
            // <div className = "form-outline">

            // <input type = "text" value = {search} placeholder = "Search by name or phone" onChange = {handleChange} class = "form-control"/>
            
            

            <div className = "form-group has-feedback">
                <div class="form-group">
                <input id="search-focus"  class="form-control mr-sm-2"  placeholder = "Search by name or phone" type="search" id="form1" class="form-control"  onChange = {handleChange}  />
                {/* <span class = "glyphicon glyphicon-search form-control-feedback" ></span> */}
            </div>
                  
            <h4 class = "display-6" >Listing customers - {customers.length}</h4><br/>
            <table className = "table ">
                <thead>
                    <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Edit</th>
                           

                    </tr>
             </thead>
            <tbody>
                {result.map((cus) => {
        
                    return <CustomersItem key = {cus._id} {...cus}/> 
           
                
            
                // return <CustomersItem key = {cus._id} {...cus}/>
            })}
        </tbody>
       
        </table>
        </div>
    )
}

export default CustomersList