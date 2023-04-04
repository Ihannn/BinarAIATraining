import { combineReducers } from "redux"
import categoryReducer from './category'

const indexReducer = combineReducers ({
    category: categoryReducer
})

export default indexReducer