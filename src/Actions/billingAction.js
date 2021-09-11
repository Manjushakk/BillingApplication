//import axios from 'axios'
import axios from '../config/axiosConfig'

export const startGetBills = () => {

    return (dispatch) => {

        const token = localStorage.getItem('token')

        axios.get('/api/bills' , {

        headers : {

            'Authorization' : `Bearer ${token}`
        }
})

        .then((response) => {

            const result = response.data

            dispatch(setBills(result))

            console.log(result)
        })

        .catch((err) => {

            alert(err.message)
        })

    }
}

export const setBills = (result) => {

    return {

        type : 'SET_BILLS',
        payload : result

    }
}

export const startAddBills = (values) => {

    console.log('action', values)

    const token = localStorage.getItem('token')

    return (dispatch) => {

        axios.post('/api/bills' , values ,{

        headers : {

                    'Authorization' : `Bearer ${token}`
                }
        })

        .then((response) => {

            const result = response.data

            dispatch(addBills(result))

           console.log('Billing result',result)
        })

        .catch((err) => {

            alert(err.message)
        })

    }
}

export const addBills = (result) => {

    return {

        type : 'ADD_BILLS',
        payload : result

    }
}

export const startRemoveBilling = (id) => {

    console.log(id)

    const token = localStorage.getItem('token')

    return (dispatch) => {

        const confirmRemove = window.confirm('Are you Sure????')
        if(confirmRemove){

        axios.delete(`/api/bills/${id}` ,{

        headers : {

                    'Authorization' : `Bearer ${token}`
                }
        })

        .then((response) => {

            const result = response.data

            dispatch(removeBill(result._id))

        })

        .catch((err) => {

            alert(err.message)
        })

        }
    }
}

export const removeBill = (id) => {

    return {

        type : 'REMOVE_BILL',
        payload : id

    }
}


