const cartInitialState = []

const cartReducer = (state = cartInitialState, action ) => {

    switch(action.type){

        // case 'SET_CART' : {

        //     return [{...action.payload}]
        // }

        // case 'REMOVE_NOTES' : {

        //     return state.filter((ele) => {

        //         return ele._id !== action.payload
        //     })
            
        // }

        case 'ADD_CART' : {

            return [{...action.payload},...state]

        }

        case 'RESET_CART' : {

            return cartInitialState
        }

        case 'DEC_QUANTITY' : {

            return state.map((ele) => {

                if(ele.product === action.payload){

                    return {...ele, quantity: ele.quantity - 1}
                }
                else{

                    return {...ele}
                }
            })
        }

        case 'INC_QUANTITY' : {

            return state.map((ele) => {

                if(ele.product === action.payload){

                    return {...ele, quantity: ele.quantity + 1}
                }
                else{

                    return {...ele}
                }
            })
        }

        case 'DELETE_PRODUCT' : {

            return state.filter((ele) => {

                return ele.product !== action.payload
            })
        }
        default : {

            return [...state]
        }
    }


}

export default cartReducer