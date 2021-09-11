import React from 'react'
import { useDispatch } from 'react-redux'
import { startLoginUser } from '../Actions/usersAction'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Login = (props) => {

   

    const initialValues = {

        email : '',
        password : ''
        
    }
    
    const onSubmit = values => {
    
        dispatch(startLoginUser(values, props.history, props.handleAuth))
    }
    
    const validationSchema = Yup.object({
    
        email : Yup.string().email('Enter the valid email address').required('Email cannot be blank'),
        password : Yup.string().required('Password cannot be blank')
        
    })

    const dispatch = useDispatch()

    const formik = useFormik({

        initialValues,
        onSubmit,
        validationSchema
    })


    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleChange = (e) => {

    //     if(e.target.name === "email"){

    //         setEmail(e.target.value)
    //     }
    //     else if(e.target.name === "password"){

    //         setPassword(e.target.value)
    //     }
    // }

    // const handleSubmit = (e) => {

    //     e.preventDefault()

    //     const formData = {

    //         email : email,
    //         password : password
    //     }

    //     dispatch(startLoginUser(formData, props.history, props.handleAuth))
        
    // }

    return (

        <div>
            <div className= "container">
            <div className = "card mt-4" >
                <div className = "card body" align = "center" >
                    <h4>Login here</h4>
                </div>
             </div>
             </div>
        
            <form align = "center" onSubmit = {formik.handleSubmit}><br/>
                <input type="text" name = "email" {...formik.getFieldProps('email')} placeholder = "Enter your email"/><br/>
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email} </div> : null }
                <input type="password" {...formik.getFieldProps('password')} placeholder = "Enter your password"/><br/>
                {formik.touched.password && formik.errors.password ? <div>{formik.errors.password} </div> : null }
                <input type = "submit"  class="btn btn-primary" /> 

            </form>
        </div>
    )
}

export default Login