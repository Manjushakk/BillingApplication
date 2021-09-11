import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const CustomerForm = (props) => {

    const {name, email, mobile, formSubmission} = props

    const initialValues = {

        name :name ? name : '',
        mobile:  mobile ? mobile : '',
        email : email ? email : ''
    }
    
    
    const onSubmit = (values, {resetForm}) => {
    
        
        formSubmission(values)

        // onSubmitprops.setSubmitting(false)
        // onSubmitprops.resetForm()
        resetForm({values: ''})
        //console.log(values)
    }
    
    const validationSchema = Yup.object({
    
        name : Yup.string().required('Username cannot be blank'),
        mobile : Yup.string().required('Mobile number cannot be blank'),
        email : Yup.string().email('Enter the valid email address').required('Email cannot be blank'),
    })
    

   

    const formik = useFormik({

        initialValues,
        onSubmit,
        validationSchema
    })

    return (

    <div className = "form-group">
        <form onSubmit = {formik.handleSubmit}>
            <div class="form-group">
            <input type = "text" name = "name" placeholder = "Enter name" {...formik.getFieldProps('name')} class = "form-control" /><br/>
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name} </div> : null }
            </div>
            <div class="form-group">
            <input type = "text" name = "mobile"  placeholder = "Enter Phone Number" {...formik.getFieldProps('mobile')} class = "form-control" /><br/>
            {formik.touched.mobile && formik.errors.mobile ? <div>{formik.errors.mobile
            } </div> : null }
            </div>
            <div class="form-group">
            <input type = "text" name = "email"  placeholder = "Enter email" {...formik.getFieldProps('email')} class = "form-control" /><br/>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email} </div> : null }
            </div>

            <input type = "submit" name = "Submit" value = "save" class="btn btn-primary btn-block"/> <br/>

        </form>
    </div>
    )
}

export default CustomerForm