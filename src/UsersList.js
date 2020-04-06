import React from 'react'
import {connect} from 'react-redux'
import {startGetUsers} from './actions/usersAction'
//import axios from 'axios'
import {Link} from 'react-router-dom'

class UsersList extends React.Component{

    componentDidMount(){
        if(this.props.users.length === 0) {
            this.props.dispatch(startGetUsers())
        }
    }

    render(){
        return(
            <div>
                <h1>Users List - {this.props.users.length}</h1>
                <ul>
                    {
                        this.props.users.map(user => {
                            return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        users : state.users
    }
}

export default connect(mapStatetoProps)(UsersList)

// below code was before redux introduced -old code

// import React from 'react'
// import axios from 'axios'
// import {Link} from 'react-router-dom'

// class UsersList extends React.Component{
//     constructor (){
//         super()
//         this.state = {
//             users : []
//         }
//     }

//     componentDidMount(){
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((response) =>{
//             const users = response.data
//             this.setState({users})
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Users List - {this.state.users.length}</h1>
//                 <ul>
//                     {
//                         this.state.users.map(user => {
//                             return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// export default UsersList