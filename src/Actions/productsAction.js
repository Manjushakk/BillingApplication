import axios from '../config/axiosConfig'

export const startGetProducts = () => {

    return (dispatch) => {

        const token = localStorage.getItem('token')

        axios.get('/api/products' , {

        headers : {

            'Authorization' : `Bearer ${token}`
        }
    })

        .then((response) => {

            const result = response.data

            dispatch(setProducts(result))

            console.log(result)
        })

        .catch((err) => {

            alert(err.message)
        })

    }
}

export const setProducts = (result) => {

    return {

        type : 'SET_PRODUCTS',
        payload : result

    }
}

export const startAddProducts = (values) => {

    console.log('action', values)

    const token = localStorage.getItem('token')

    return (dispatch) => {

        axios.post('/api/products' , values ,{

        headers : {

                    'Authorization' : `Bearer ${token}`
                }
        })

        .then((response) => {

            const result = response.data

            dispatch(addProducts(result))

            console.log('result',result)
        })

        .catch((err) => {

            alert(err.message)
        })

    }
}

export const addProducts = (result) => {

    return {

        type : 'ADD_PRODUCTS',
        payload : result

    }
}

export const startRemoveProduct = (id) => {

    console.log(id)

    const token = localStorage.getItem('token')

    return (dispatch) => {

        const confirmRemove = window.confirm('Are you Sure????')
        if(confirmRemove){

        axios.delete(`/api/products/${id}` ,{

        headers : {

                    'Authorization' : `Bearer ${token}`
                }
        })

        .then((response) => {

            const result = response.data

            dispatch(removeProduct(result._id))

            //console.log('result',result)
        })

        .catch((err) => {

            alert(err.message)
        })

        }
    }
}

export const removeProduct = (id) => {

    return {

        type : 'REVOME_PRODUCT',
        payload : id

    }
}

export const startEditProduct = (values, id) => {

    console.log('action', values)

    console.log(id)

    const token = localStorage.getItem('token')

    return (dispatch) => {

        axios.put(`/api/products/${id}` , values ,{

        headers : {

                    'Authorization' : `Bearer ${token}`
                }
        })

        .then((response) => {

            const result = response.data

            dispatch(editProduct(result))

            console.log('result',result)
        })

        .catch((err) => {

            alert(err.message)
        })

    }
}

export const editProduct = (result) => {

    return {

        type : 'EDIT_PRODUCT',
        payload : result

    }

    
}

// export const startGetProducts = () => {

//     return (dispatch) => {

//         const token = localStorage.getItem('token')

//         axios.get('http://dct-billing-app.herokuapp.com/api/products' , {

//         headers : {

//             'Authorization' : `Bearer ${token}`
//         }
//     })

//         .then((response) => {

//             const result = response.data

//             dispatch(setProducts(result))

//             console.log(result)
//         })

//         .catch((err) => {

//             alert(err.message)
//         })

//     }
// }

// export const setProducts = (result) => {

//     return {

//         type : 'SET_PRODUCTS',
//         payload : result

//     }
// }

export const startSelectedProduct = (id) => {

    

    const token = localStorage.getItem('token')

    return (dispatch) => {

        axios.get(`/api/products/${id}` ,{

        headers : {

                    'Authorization' : `Bearer ${token}`
                }
        })

        .then((response) => {

            const result = response.data

            console.log('result',result)

            alert(`Product ID: ${result._id} - Created at: ${result.createdAt}`)
        })

        .catch((err) => {

            alert(err.message)
        })

    }
}

