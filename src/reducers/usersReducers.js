const usersInitialState = []

const usersReducer = (state = usersInitialState,action) => {
    switch(action.type) {
        case 'USERS_LIST' :{
            return [].concat(action.payload)
        }
        default : {
            return [].concat(state)
        }
    }
}

export default usersReducer