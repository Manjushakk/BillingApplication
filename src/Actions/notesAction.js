import axios from 'axios'
export const startGetNotes = () => {

    return (dispatch) => {

        axios.get('http://dct-user-auth.herokuapp.com/api/notes' , {

        headers : {

            'x-auth' : localStorage.getItem('token')
        }
    })

        .then((response) => {

            const result = response.data

            dispatch(setNotes(result))
        })

        .catch((err) => {

            alert(err.message)
        })

    }
}

export const setNotes = (result) => {

    return {

        type : 'SET_NOTES',
        payload : result

    }

    
}

export const startRemoveNotes = (_id) => {

    return (dispatch) => {

        const confirmRemove = window.confirm('Are you Sure????')
        if(confirmRemove){

            axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}` , {

        headers : {

                        'x-auth' : localStorage.getItem('token')
                }
        })

            .then((response) => {

                const result = response.data

                
                dispatch(removeNotes(result._id))

            })

            .catch((err) => {

                alert(err.message)
            })

        }
    }
}

export const removeNotes = (_id) => {

    return {

        type : 'REMOVE_NOTES',
        payload : _id

    }

    
}

export const startMyNotes = (notesData, setIsSaved) => {

    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes' , notesData ,{

        headers : {

                     'x-auth' : localStorage.getItem('token')
                }
        })
        
        .then((response) => {

            const result = response.data
            console.log(result)
            dispatch(addNotes(result))
            setIsSaved(true)

            
        })

        .catch((err) => {

            alert(err.message)
        })
    }
}

export const addNotes = (result) => {

    return {

        type : 'ADD_NOTES',
        payload : result

    }

    
}