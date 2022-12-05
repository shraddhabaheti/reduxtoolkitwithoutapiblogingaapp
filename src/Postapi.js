
import axios from 'axios'

import React, { Component } from 'react'

export default class Postapi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    changeHandeler=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandeler=e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
          console.log(response)
        })
        .catch(error=>{
          console.log(error)
        })
    }
  render() {
      const {userId,title,body}=this.state
    return (
      <div>
        <form onSubmit={this.submitHandeler}>
            <input type="text" name="userId" value={userId} onChange={this.changeHandeler}/>
            <input type="text" name="title" value={title} onChange={this.changeHandeler}/>
            <input type="text" name="body" value={body} onChange={this.changeHandeler}/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
