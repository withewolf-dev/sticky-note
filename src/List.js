import React, { Component } from 'react'
import  './List.css'
export default class List extends Component {

    handleremove=()=>{
        this.props.remove(this.props.id)
    }
    render() {
        
        return (
            <div>
            
            <button>edit</button>
            <button onClick={this.handleremove} >delete</button>
            <li className={'square'} key={this.props.id} >
            {this.props.notes}
            </li>

            </div>
        )
    }
}
