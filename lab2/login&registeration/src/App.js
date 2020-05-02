import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";

// import Login from "./login";
// import SignUp from "./signup";

class App extends React.Component {

    // submit handler
    onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.input);
      this.state.data.push(this.state.input);
      this.setState({ data: this.state.data });
      // console.log(this.state.data);
      // console.log(this.state);
    }

  render() {
    return (
      <Router>
          <div className="App">
            <div>
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                  <Link className="navbar-brand" to={"/sign-in"}>React Lab</Link>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"}>Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <br/>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={SignUp} />
                </Switch>
              </div>
            </div>
        </div>
      </Router>
    );
  }
}

// class Login extends React.Component
// {
//   constructor(){
//     super();
//     this.state={
//         username:" ",  
//         password:" "
//     }
//     }
//     handleChange = event =>{
//       this.setState({ [event.target.name]:event.target.value })
//     }

//     handleSubmit = event =>{
//       event.preventDefault();
//       console.log("User name : " + this.state.username);
//       console.log("User password : " + this.state.password);
//       const url ="http://todoapp.ahmedrohym.com/api.php?apicall=login";
//       const data = { 
//           username:this.state.username, 
//           password:this.state.password 
//         }
//       fetch(url, { method: 'POST', // or 'PUT’
//       headers:{ 
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(data) // data can be `string` or {object}!
//        })
//       .then(res => res.json())
//       .catch(error => console.error('Error:', error))
//       .then(response => console.log('Success:', response));
//     }

//     render() {
//         return (
//           <div className="container">
//             <form onSubmit={this.handleSubmit}>
//               <h3>Sign In</h3>
//                 <div className="form-group">
//                     <label>UserName</label>
//                     <input 
//                       name="username"
//                       type="text" 
//                       className="form-control" 
//                       placeholder="Enter your name"
//                       onChange={this.handleChange} />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input 
//                       name="password"
//                       type="password" 
//                       className="form-control" 
//                       placeholder="Enter password"
//                       onChange={this.handleChange} />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//           </div>
//         );
//     }
// }

// class SignUp extends React.Component
// {
//   constructor(){
//     super();
//     this.state={
//         username:" ", 
//         email:" " , 
//         password:" ",
//         gender:" "
//     }
//     }
//     handleChange = event =>{
//       this.setState({ [event.target.name]:event.target.value })
//     }

//     handleSubmit = event =>{
//       event.preventDefault();
//       console.log("User name : " + this.state.username);
//       console.log("User Email : " + this.state.email);
//       console.log("User password : " + this.state.password);
//       console.log("User gender: " + this.state.gender);
//       const url ="http://todoapp.ahmedrohym.com/api.php?apicall=signup";
//       const data = { 
//           username:this.state.username, 
//           email:this.state.email,
//           password:this.state.password, 
//           gender:this.state.gender  
//         }
//       fetch(url, { method: 'POST', // or 'PUT’
//       headers:{ 
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(data) // data can be `string` or {object}!
//        })
//       .then(res => res.json())
//       .catch(error => console.error('Error:', error))
//       .then(response => console.log('Success:', response));
//     }

//     render() {
//         return (
//           <div className="container">
//             <form onSubmit={this.handleSubmit}>
//               <h3>Sign Up</h3>
//               <div className="form-group">
//                   <label>UserName</label>
//                   <input 
//                     name="username"
//                     type="text"
//                     className="form-control" 
//                     placeholder="user name"
//                     onChange={this.handleChange}
//                     />
//               </div>

//               <div className="form-group">
//                   <label>Email address</label>
//                   <input 
//                     name="email"
//                     type="email" 
//                     className="form-control" 
//                     placeholder="Enter email"
//                     onChange={this.handleChange}
//                     />
//               </div>

//               <div className="form-group">
//                   <label>Password</label>
//                   <input 
//                     name="password"
//                     type="password" 
//                     className="form-control" 
//                     placeholder="Enter password" 
//                     onChange={this.handleChange}
//                     />
//               </div>

//               <div className="form-group">
//                   <label htmlFor="gender">Gender: </label><br/>
//                   <select 
//                     name="gender"
//                     id="gender" 
//                     onChange={this.handleChange}
//                    >
//                     <option value="male">male</option>
//                     <option value="female">female</option>
//                   </select>
//               </div>

//               <button type="submit" className="btn btn-primary">Sign Up</button>
//             </form>
//           </div>
//         );
//     }
// }
export default App;
