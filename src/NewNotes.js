import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

export default class NewNotes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: "",
            isWriting: false,
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }; 
    handleNotes = (e) => {
        e.preventDefault();
        this.props.addnote({...this.state.notes,id:uuidv4()})
        
       
    };
    handleWrite = () => {
        this.setState({
            isWriting: true,
        });
    };
    render() {
        return (
            <div>
                {this.state.isWriting ? (
                    <form onSubmit={this.handleNotes}>
                        <input
                            name="notes"
                            placeholder="write your sticky note here"
                            value={this.state.notes}
                            onChange={this.handleChange}
                        />
                        <button>add note </button>
                    </form>
                ) : (
                        <button onClick={this.handleWrite}> write</button>
                    )}
            </div>
        );
    }
}
