import React from "react";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
          Number: 1,
        };
    }

    userClickedDiv = () => {
        // alert("clicked");
        this.setState({ Number: this.state.Number + 1});
    };
    
    render() {
        return (
        <div>
            <span style={{border: "solid"}}> {this.state.Number} </span>
            <br/>
            <Header ifuserclick={this.userClickedDiv } />
        </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
        <div>
            <button onClick={this.props.ifuserclick}>Click to increment the number </button>
        </div>
        );
    }
}