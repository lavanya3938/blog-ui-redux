import React from 'react'
import { connect } from 'react-redux'
import { startGetPosts } from './actions/postsAction'
import {Link} from 'react-router-dom'

class PostsList extends React.Component{
    componentDidMount() {
        if (this.props.posts.length === 0) {
            this.props.dispatch(startGetPosts())
        }
    }

    render(){
        return(
            <div>
                <h1>Listing Posts - {this.props.posts.length}</h1>
                <ul>
                    {
                        this.props.posts.map(post => {
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsList)

// import React from 'react'
// import axios from 'axios'
// import {Link} from 'react-router-dom'

// class PostsList extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             posts : []
//         }
//     }

//     componentDidMount () {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then( (response) => {
//             const posts = response.data
//             this.setState({posts})
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Listing Posts - {this.state.posts.length}</h1>
//                 <ul>
//                     {
//                         this.state.posts.map(post => {
//                             return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// export default PostsList