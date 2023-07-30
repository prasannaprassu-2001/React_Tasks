import React, { PureComponent } from "react";
import DashComponent from "./Dash.Component";
export default class DashContainer extends PureComponent {
state={
  logoutSuccess: false,
}

  handleLogout = (email, password) => {
    const logins = JSON.parse(localStorage.getItem("logins")) || [];

    const indexToDelete = logins.findIndex(
      (login) => login.email === email && login.password === password
    );

    if (indexToDelete !== -1) {
      logins.splice(indexToDelete, 1);
      localStorage.setItem("logins", JSON.stringify(logins));
      this.forceUpdate();
      this.setState({
      logoutSuccess: true,

      })
    }
  };
  render() {
    const logins = JSON.parse(localStorage.getItem('logins')) || [];

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
