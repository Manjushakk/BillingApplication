import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const ProductsForm = (props) => {

    const {name, price, formSubmission} = props

    const initialValues = {

        name : name ? name : '',
        price: price ? price : ''
   }
    
    
    const onSubmit = (values, {resetForm}) => {
    
        
        formSubmission(values)

        //console.log(values)

        // onSubmitprops.setSubmitting(false)
        //onSubmitprops.resetForm()
        resetForm({values: ''})
        //console.log(values)
    }
    
    const validationSchema = Yup.object({
    
        name : Yup.string().required('Please enter the product name'),
        price : Yup.string().required('Please enter the price')
       
    })
    

   

    const formik = useFormik({

        initialValues,
        onSubmit,
        validationSchema
    })

    return (

    <div className = "form-group">
        <form onSubmit = {formik.handleSubmit}>
        <div className = "form-group">
            <input type = "text" name = "name" class = "form-control" placeholder = "Enter product name" {...formik.getFieldProps('name')}/><br/>
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name} </div> : null }
        </div>
        <div className = "form-group">
            <input type = "text" name = "price" class = "form-control" placeholder = "Enter price" {...formik.getFieldProps('price')}/><br/>
            {formik.touched.price && formik.errors.price ? <div>{formik.errors.price} </div> : null }
        </div>
        <input type = "submit" name = "Submit" value = "save" class="btn btn-primary btn-block"/> <br/>
        </form>
    </div>
    )
}

export default  ProductsForm