import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/usersReducers'
import postsReducer from '../reducers/postsReducers'


const configureStore = () => {
    const store = createStore(combineReducers({
        users : usersReducer,
        posts : postsReducer,
        // comments : commentsReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore