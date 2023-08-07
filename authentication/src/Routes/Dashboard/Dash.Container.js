import React, { PureComponent } from "react";
import DashComponent from "./Dash.Component";
export default class DashContainer extends PureComponent {
state={
  logoutSuccess: false,
}

  handleLogout = (email, password) => {
    const logins = JSON.parse(sessionStorage.getItem("logins")) || [];

    const indexToDelete = logins.findIndex(
      (login) => login.email === email && login.password === password
    );

    if (indexToDelete !== -1) {
      logins.splice(indexToDelete, 1);
      sessionStorage.setItem("logins", JSON.stringify(logins));
      this.forceUpdate();
      this.setState({
      logoutSuccess: true,

      })
      setTimeout(() => {this.setState({
      logoutSuccess: false,

      })},1000)
    }
  };
  render() {
    const logins = JSON.parse(sessionStorage.getItem('logins')) || [];

    return (
      <div>
        <DashComponent 
        {...this.state}
        handleLogout={this.handleLogout}  logins={logins}
        />
      </div>
    );
  }
}
