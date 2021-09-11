import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import notesReducer from "../Reducers/notesReducer"
import customersReducer from '../Reducers/customersReducer'
import productsReducer from '../Reducers/productsReducer'
import billingReducer from '../Reducers/billingReducer'
import cartReducer from '../Reducers/cartReducer'

const configureStore = () => {

    const store = createStore(combineReducers({

        notes : notesReducer,
        customers : customersReducer,
        products : productsReducer,
        billing : billingReducer,
        cart: cartReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore