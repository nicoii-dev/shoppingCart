import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionType"

const initialState = {
    items:[]
  }

const cartItems = (state = initialState.items, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter(state => state.id !== action.payload.id)
        default:
            return state
    }

}

export default cartItems