import React from 'react'
import { Component } from 'react';

class UserLogin extends Component {
    EmpData
    constructor(props) {
        super(props);
        this.state = {
            EmpID: 0,
            UName: "",
            Pass: ""
        }
    }

    setFormValues(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    CheckUserLogin(e) {
        e.preventDefault()
        var obj = this.EmpData.filter(o => o.UserName === this.state.UName && o.Password === this.state.Pass);
        console.log(obj);
        if (obj.length > 0) {

        }
        else {

        }
    }

    componentDidMount() {
        //localStorage.setItem('document',JSON.stringify(this.state));
        this.EmpData = JSON.parse(localStorage.getItem('EmployeeTbl'));
        if (localStorage.getItem('EmployeeTbl')) {
            console.log("Data Received from EmployeeTbl");
            console.log(this.EmpData);
            // console.log("IF");
            // this.setState({
            //     EmpID: this.EmpData.EmpID
            // })
        } else {
            // console.log("ELSE");
            // this.setState({
            //     EmpID: 0
            // })
        }
    }

    render() {

        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Shope</b>ME</a>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={(evt) => this.CheckUserLogin(evt)}>
                            <div className="input-group mb-3">
                                <input type="text" name="UName" className="form-control" placeholder="Username" onChange={(evt) => this.setFormValues(evt)} required />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" name="Pass" className="form-control" placeholder="Password" onChange={(evt) => this.setFormValues(evt)} required />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Remember Me
              </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        {/* <div className="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-primary">
                            <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
                        <a href="#" className="btn btn-block btn-danger">
                            <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
                    </div> */}
                        {/* /.social-auth-links */}
                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                        </p>
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>

        );
    }

}

export default UserLogin;