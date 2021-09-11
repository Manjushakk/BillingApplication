import axios from '../config/axiosConfig'

export const startGetCustomers = () => {

    return (dispatch) => {

        const token = localStorage.getItem('token')

        axios.get('/api/customers' , {

        headers : {

            'Authorization' : `Bearer ${token}`
        }
    })

        .then((response) => {

            const result = response.data

            dispatch(setCustomers(result))

            console.log(result)
        })

        .catch((err) => {

            alert(err.message)
        })

    }
}

export const setCustomers = (result) => {

    return {

        type : 'SET_CUSTOMERS',
        payload : result

    }
}

export const startAddCustomers = (values) => {

    //console.log('action', values)

    const token = localStorage.getItem('token')

    return (dispatch) => {

        axios.post('/api/customers' , values ,{

        headers : {

                    'Authorization' : `Bearer ${token}`
                }
        })

        .then((response) => {

            const result = response.data

            dispatch(addCustomers(result))

            console.log('result',result)
        })

        .catch((err) => {

            alert(err.message)
        })

    }
}

export const addCustomers = (result) => {

    return {

        type : 'ADD_CUSTOMERS',
        payload : result

    }
}

export const startRemoveCustomer = (id) => {

   

    const token = localStorage.getItem('token')

    return (dispatch) => {

        const confirmRemove = window.confirm('Are you Sure????')
        if(confirmRemove){

            axios.delete(`/api/customers/${id}` , {

            headers : {

                    'Authorization' : `Bearer ${token}`
                }
        })

            .then((response) => {

                const result = response.data

                
                dispatch(removeCustomer(result._id))

            })

            .catch((err) => {

                alert(err.message)
            })

        }
    }
}

export const removeCustomer = (id) => {

    return {

        type : 'REMOVE_CUSTOMER',
        payload : id

    }

    
}



export const startEditCustomers = (values, id) => {

    console.log('action', values)

    console.log(id)

    const token = localStorage.getItem('token')

    return (dispatch) => {

        axios.put(`/api/customers/${id}` , values ,{

        headers : {

                    'Authorization' : `Bearer ${token}`
                }
        })

        .then((response) => {

            const result = response.data

            dispatch(editCustomer(result))

            console.log('result',result)
        })

        .catch((err) => {

            alert(err.message)
        })

    }
}

export const editCustomer = (result) => {

    return {

        type : 'EDIT_CUSTOMER',
        payload : result

    }

    
}








