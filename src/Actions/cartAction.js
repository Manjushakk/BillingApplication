export const setCart = (result) => {

    return {

        type : 'SET_CART',
        payload : result

        

    }

    
}

export const addCart = (result) => {

    return {

        type : 'ADD_CART',
        payload : result

    }

    
}

export const resetCart = () => {

    return {

        type : 'RESET_CART'
    }
}

export const decQuantity = (result) => {

    return {

        type : 'DEC_QUANTITY',
        payload : result
    }
}

export const incQuantity = (result) => {

    return {

        type : 'INC_QUANTITY',
        payload : result
    }
}

export const deleteProduct = (result) => {

    return {

        type : 'DELETE_PRODUCT',
        payload : result
    }
}