const customersInitialState = []

const customersReducer = (state = customersInitialState, action ) => {

    switch(action.type){

        case 'SET_CUSTOMERS' : {

            return [...action.payload]
        }

        case 'REMOVE_CUSTOMER' : {

            return state.filter((ele) => {

                return ele._id !== action.payload
            })
            
        }

        case 'ADD_CUSTOMERS' : {

            return [{...action.payload},...state]
        }

        case 'EDIT_CUSTOMER' : {

            
            return state.map((ele) => {

                if(ele._id === action.payload._id){

                    return {...ele, ...action.payload}
                }
                else{

                    return {...ele}
                }
            })

           
        }


       

        default : {

            return [...state]
        }
    }


}

export default customersReducer
