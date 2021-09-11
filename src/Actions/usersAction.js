import axios from '../config/axiosConfig'
import { startGetCustomers } from './customersAction'
import { startGetProducts } from './productsAction'
import { startGetBills } from './billingAction'

export const startRegisterUser = (formData, history) => {

    return (dispatch) => {
        axios.post('/api/users/register', formData)

        .then((response) => {

                const result = response.data

                if(result.hasOwnProperty('errors')){

                    alert(result.message)
                }

                else{

                    alert('user Successfully created')
                    history.push('/login')
                }
        })
        .catch((err) => {

            alert(err.message)
        })
    }
}

export const startLoginUser = (formData, history, handleAuth) => {

    return(dispatch) => {

        axios.post('/api/users/login', formData)

        .then((response) => {

            const result = response.data

            if(result.hasOwnProperty('errors')){

                alert(result.errors)
            }

            else{

                console.log('successfully logged in')
                localStorage.setItem('token', result.token)
                history.push("/")
                handleAuth()
                dispatch(startGetBills())
                dispatch(startGetCustomers())
                dispatch(startGetProducts())
                
                
              }

        })

        .catch((err) => {

            console.log(err.message)
        })


    }
}

export const startUsersAccount = (setUser) => {

    const token = localStorage.getItem('token')
     
    
    return(dispatch) => {

        axios.get('/api/users/account' , {

        headers : {

            'Authorization' : `Bearer ${token}`
            
        }
    })
        .then((response) => {

                
            const result = response.data
            setUser(result)
        })
        .catch((err) => {

            alert(err.message)
        })
    }
}