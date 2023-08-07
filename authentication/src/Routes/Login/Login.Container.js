import React, { PureComponent } from "react";
import LoginComponent from "./Login.Component";
import Dashboard from "../Dashboard";
import withNavigate from "./withNavigate";

 class LoginContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailData: false,
      authenticationSuccess: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    const existingLogins = JSON.parse(sessionStorage.getItem("logins")) || [];

    const emailExists = existingLogins.some((login) => login.email === email);

    if (emailExists) {
      this.setState({
        emailData: true,
      })

    } else {

      this.setState({
        authenticationSuccess: true,
      })

      existingLogins.push({ email, password });

      sessionStorage.setItem("logins", JSON.stringify(existingLogins));
    
      setTimeout(() => {
        this.setState({authenticationSuccess:true});
      }, 1500);
    
    }
    this.setState({
      email:"",
      password:""
    })
  };
  render() {
     const{authenticationSuccess}=this.state
    return (
      <div>
        {authenticationSuccess? <Dashboard />: <LoginComponent 
          {...this.state}
          handleInputChange={this.handleInputChange}
          handleLogin={this.handleLogin}
        />}
       
      </div>
    );
  }
}

export default withNavigate(LoginContainer)
