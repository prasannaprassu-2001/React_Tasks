import React, { PureComponent } from "react";
import LoginComponent from "./Login.Component";
import withNavigate from "./withNavigate";

 class LoginContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailData: false,
      loginSuccess: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    const existingLogins = JSON.parse(localStorage.getItem("logins")) || [];

    const emailExists = existingLogins.some((login) => login.email === email);

    if (emailExists) {
      this.setState({
        emailData: true,
      })

    } else {

      this.setState({
        loginSuccess: true,
      })

      existingLogins.push({ email, password });

      localStorage.setItem("logins", JSON.stringify(existingLogins));
    
      setTimeout(() => {
        this.props.navigate('./Dashboard');
      }, 1500);
    
    }
    this.setState({
      email:"",
      password:""
    })
  };
  render() {

    return (
      <div>
        <LoginComponent
        {...this.state}
          handleInputChange={this.handleInputChange}
          handleLogin={this.handleLogin}
        />
      </div>
    );
  }
}

export default withNavigate(LoginContainer)
