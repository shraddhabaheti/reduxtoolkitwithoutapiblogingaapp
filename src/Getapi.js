import axios from 'axios'

import React, { Component } from 'react'

export default class Getapi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[]
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            this.setState({post:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
  render() {
      const {post}=this.state;
    return (
      <div>
        <h1>List of item</h1>
        {
            post.map((posts)=><div key={posts.id}>{posts.title}</div>)
        }
      </div>
    )
  }
}
