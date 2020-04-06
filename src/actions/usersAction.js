import axios from 'axios'

// sync
export const usersList = (users) => {
    return {type : 'USERS_LIST', payload : users}
}

// async
export const startGetUsers = () => {
    return(dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
            const users = response.data
            dispatch(usersList(users))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}