const billingInitialState = []

const billingReducer = (state = billingInitialState, action ) => {

    switch(action.type){

        case 'SET_BILLS' : {

            return [...action.payload]
        }

        case 'REMOVE_BILL' : {

            return state.filter((ele) => {

                return ele._id !== action.payload
            })
            
        }

        case 'ADD_BILLS' : {

            return [action.payload,...state]
        }

        case 'SET_BILL' : {

            
            // return state.filter((ele) => {

            //     return ele._id === action.payload
            // })

             //return action.payload
        }

        // case 'DEC_QUANTITY' : {

        //     return state.map((ele)) => {

        //         if(ele._id === billing_id){


        //         }
        //     }
        // }

        // case 'EDIT_CUSTOMER' : {

            
        //     return state.map((ele) => {

        //         if(ele._id === action.payload._id){

        //             return {...ele, ...action.payload}
        //         }
        //         else{

        //             return {...ele}
        //         }
        //     })

           
        // }


       

        default : {

            return [...state]
        }
    }


}

export default billingReducer
