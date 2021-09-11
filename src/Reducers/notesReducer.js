const notesInitialState = []

const notesReducer = (state = notesInitialState, action ) => {

    switch(action.type){

        case 'SET_NOTES' : {

            return [...action.payload]
        }

        case 'REMOVE_NOTES' : {

            return state.filter((ele) => {

                return ele._id !== action.payload
            })
            
        }

        case 'ADD_NOTES' : {

            return [{...action.payload},...state]
        }
        default : {

            return [...state]
        }
    }


}

export default notesReducer