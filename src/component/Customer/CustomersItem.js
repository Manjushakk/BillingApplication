import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { startRemoveCustomer } from '../../Actions/customersAction'
import EditCustomer from './EditCustomer'

const CustomersItem = (props) => {

    const {_id, name, email, mobile} = props

   
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()


    const handleRemove = (id) =>{

        dispatch(startRemoveCustomer(id))
    }

    const handleToggle = () => {

        setToggle(!toggle)
    }

    return (

        <>
            {
                 toggle ? (
                <>
                    <EditCustomer name = {name} email = {email} mobile = {mobile} id = {_id} handleToggle = {handleToggle}/>
                    <button onClick = {handleToggle} class="btn btn-secondary" >Cancel</button>
                </>
                ) :
                <>
                        <tr key = {_id}>
                            <td>{name}</td>
                            <td>{mobile}</td>
                            <td>{email}</td>

                       
                    {/* <p>{name} {mobile} {email}</p> */}
                    <td><button class = "btn btn-primary" onClick = {handleToggle}>Edit</button></td>
                    {/* <td> <button class = "btn btn-danger" onClick = {() => {

                        handleRemove(_id)
                    }}>X</button></td> */}

                    </tr>
                </>
            }
            

        </>
    )
}

export default CustomersItem