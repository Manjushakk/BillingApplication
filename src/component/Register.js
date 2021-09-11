import React from 'react'
import { useDispatch } from 'react-redux'
import { startRegisterUser } from '../Actions/usersAction'
import { useFormik } from 'formik'
import * as Yup from 'yup'



const Register = (props) => {

    const initialValues = {

        username : '',
        email : '',
        password : '',
        businessName : '',
        address : ''
    
    }
    
    const onSubmit = values => {
    
        dispatch(startRegisterUser(values, props.history))
    }
    
    const validationSchema = Yup.object({
    
        username : Yup.string().required('Username cannot be blank'),
        email : Yup.string().email('Enter the valid email address').required('Email cannot be blank'),
        password : Yup.string().required('Password cannot be blank'),
        businessName : Yup.string().required('Businessname cannot be blank'),
        address : Yup.string().required('Address cannot be blank')
    })
    

    const dispatch  = useDispatch()

    const formik = useFormik({

        initialValues,
        onSubmit,
        validationSchema
    })

    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [businessName, setBusinessName] = useState('')
    // const [address, setAddress] = useState('')
    
    // const handleChange = (e) => {

    //     if(e.target.name === "username"){

    //         setUsername(e.target.value)
    //     }
    //     else if(e.target.name === "email"){

    //         setEmail(e.target.value)
    //     }
    //     else if(e.target.name === "password"){

    //         setPassword(e.target.value)
    //     }
    //     else if(e.target.name === "businessName"){

    //         setBusinessName(e.target.value)
    //     }
    //     else if(e.target.name === "address"){

    //         setAddress(e.target.value)
    //     }
    // }

    // const handleSubmit = (e) => {

    //     e.preventDefault()

    //     const formData = {

    //         username : username,
    //         email : email,
    //         password : password,
    //         businessName : businessName,
    //         address : address
    //     }

    //     console.log(formData)
    //     dispatch(startRegisterUser(formData, props.history))
    // }
    return (

    <div>
       <div className= "container">
            <div className = "card mt-4" >
                <div className = "card body" align = "center" >
                    <h4>Register here</h4>
                </div>
             </div>
             </div>
        <form align = "center" onSubmit = {formik.handleSubmit}>
            
   
        <label>Username</label><br/>
        <input type = "text" name = "username" placeholder = "Enter username" {...formik.getFieldProps('username')}/><br/>
            {formik.touched.username && formik.errors.username ? <div>{formik.errors.username} </div> : null }
    
        
        <label>Email</label><br/>
            <input type = "text" name = "email"   placeholder = "Enter email" {...formik.getFieldProps('email')}/><br/>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email} </div> : null }
       
        
        <label>Password</label><br/>
            <input type = "password" name = "password" placeholder = "Enter password" {...formik.getFieldProps('password')}/><br/>
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password} </div> : null }
        
        
        <label>Business Name</label><br/>
            <input type = "text" name = "businessName"  placeholder = "Business Name" {...formik.getFieldProps('businessName')}/><br/>
            {formik.touched.businessName && formik.errors.businessName ? <div>{formik.errors.businessName} </div> : null }
        
        
        <label>Address</label><br/>
            <textarea type = "text" name = "address"  placeholder = "Address" {...formik.getFieldProps('address')} ></textarea><br/>
            {formik.touched.address && formik.errors.address ? <div>{formik.errors.address} </div> : null }
       
            <input type = "submit" class="btn btn-primary" name = "Submit"/>
        </form>
    </div>
    )
}

export default Register