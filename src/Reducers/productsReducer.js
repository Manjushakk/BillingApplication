const productsInitialState = []

const productsReducer = (state = productsInitialState, action ) => {

    switch(action.type){

        case 'SET_PRODUCTS' : {

            return [...action.payload]
        }

        case 'ADD_PRODUCTS' : {

            return [{...action.payload},...state]
        }

        case 'REVOME_PRODUCT' : {

            return state.filter((ele) => {

                return ele._id !== action.payload
            })
        }

        case 'EDIT_PRODUCT' : {
            
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

export default productsReducer
