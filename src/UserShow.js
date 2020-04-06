// import React from 'react'
// import { connect } from 'react-redux'
// import { startGetPosts } from './actions/postsAction'
// import {Link} from 'react-router-dom'

// class UserShow extends React.Component {
//     componentDidMount() {
//         if (this.props.posts.length === 0) {
//             this.props.dispatch(startGetPosts())
//         }
//     }
//     render(){
        
//         return(
//             <div>
//                 {
//                 this.props.userPosts && this.props.user ? (<div><h2>users name - {this.props.user.name}</h2>
//                     <h2>listing users posts - {this.props.userPosts.length}</h2>
//                     <ul>
//                         {
//                             this.props.userPosts.map(post=>{
//                                 return (<li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>)
//                             })
//                         }
//                     </ul>
//                     </div>) : <h3>Loading....</h3>
//             }
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state,props) => {
//     return {
//         userPosts : state.users.posts.filter(post=>post.userId === props.match.params.id),
//         user : state.users.users.find(user=>user.id === props.match.params.id)
//     }
// }

// export default connect(mapStateToProps)(UserShow)

// below code was before redux introduced -old code

import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user : {},
            posts : []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        .then( (response) => {
            const user = response.data
            this.setState({user})
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

        .then( (response) => {
            const posts = response.data
            this.setState({posts})
        })
        .catch( (err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <h1>Username : {this.state.user.name}</h1>
                <h3>Posts written by user</h3>
                <ul>
                    {
                        this.state.posts.map(function(post) {
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserShow