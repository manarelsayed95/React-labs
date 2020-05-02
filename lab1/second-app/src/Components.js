import React from "react";
import '../src/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        "Attend lec2",
        "Complete lab2",
        "Complete Bouns1",
        "Attend lec3",
        "Complete lab3",
        "Complete Bouns2"
      ],

        input: " ",
    };
  }
    
    //get input value
    onInput = (e) =>{
         this.setState({
            input: e.target.value
        });
        // console.log(this.state.input);
    }

    // submit handler
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.input);
        this.state.data.push(this.state.input);
        this.setState({ data: this.state.data });
        // console.log(this.state.data);
        // console.log(this.state);
    }

    handleRemove=(i)=>{
        alert("remove");
        var newItems = this.state.data.slice();
        newItems.splice(i, 1);
        this.setState({ data: newItems });
    };
    onTrue=()=>{
        alert("true");
    };

  render() {
    return (
      <div>
            <table>
                <tbody>
                    {this.state.data.map((item, i) => (
                        <TableRow  key={i} item={item} handleRemove={this.handleRemove} itemNo={i}  onTrue={this.onTrue}/>
                    ))}
                </tbody>
            </table>
            <br/>
            <Task onInput={this.onInput} onSubmit={this.onSubmit}></Task>
      </div>
    );
  }
}
class TableRow  extends React.Component {
  render() {
    return (
        <tr>
          <td colSpan="8"> {this.props.item} </td>
          <td colSpan="3" ><button type="button" className="btn btn-primary" onClick={this.props.onTrue}>true</button> </td>
          <td colSpan="3" ><button type="button" className="btn btn-danger" onClick={this.props.handleRemove}>X</button></td>
        </tr>
    );
  }
}


class Task extends React.Component{
    render(){
      return(
        <div>
            <form onSubmit={this.props.onSubmit}>
                <label htmlFor="addTask"> Task </label>
                <input
                type="text"
                onChange={ this.props.onInput }
                placeholder="AddTask" />
                <button type="submit">Add to list</button>
            </form>
        </div>
      );
    }
}

export default App;