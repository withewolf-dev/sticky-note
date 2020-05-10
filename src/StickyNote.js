import React, { Component } from 'react'
import NewNotes from './NewNotes'
import List from './List'
import { v4 as uuidv4 } from 'uuid';
export default class StickyNote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sticky:[

             ]
        }
        console.log(this.state.sticky)
    }
    addnotes=(notes)=>{
        this.setState({
            sticky:[...this.state.sticky,notes]
        })
    }
    remove=(id)=>{
        this.setState({
            sticky:this.state.sticky.filter(t =>t.id !== id)
        })
    }
    render() {
         const  unq= uuidv4()
        const notes = this.state.sticky.map((note,index) =>{
        
            return <List notes ={note.notes} key={note.id}  id={note.id} remove={this.remove}/>
        })
        return (
            <div>
                <NewNotes addnote={this.addnotes}/>
              <li>
               <h3>{notes}</h3>
               </li>
            </div>
        )
    }
}
