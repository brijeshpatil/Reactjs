import React, { Component } from "react";
import UserDetails from "./userdetails";
import { render } from "@testing-library/react";

class Userinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            userList: [
                { userid: 1, fname: 'Brijesh', lname: 'Patil', email: 'brijesh@gmail.com' },
                { userid: 2, fname: 'Smit', lname: 'Macwan', email: 'smit@gmail.com' },
                { userid: 3, fname: 'Hardik', lname: 'Patel', email: 'hardik@gmail.com' },
                { userid: 4, fname: 'Divyang', lname: 'Shah', email: 'divyang@gmail.com' },
                { userid: 5, fname: 'Kailash', lname: 'Solanki', email: 'kailash@gmail.com' }
            ],
            userObj: { userid: 0, fname: '', lname: '', email: '' },
            IsVisible: false,
            IsEdit: 0

        };

    }

    RemoveUser(user) {

        var ulist = this.state.userList;
        ulist = ulist.filter(u => u.userid !== user.userid);
        this.setState({ userList: ulist });
    }

    EditUserDetails(user) {
        this.setState({ IsEdit: 1 });
        this.setState({ fname: user.fname });
        this.setState({ lname: user.lname });
        this.setState({ email: user.email });
        this.setState({ userid: user.userid });
    }

    UpdateDetails() {
        var uid = this.state.userid;

        var ulist = this.state.userList;

        var user = ulist.filter(function (u) {
            return u.userid === uid;
        });
        user.userid = uid;
        user.fname = this.state.fname;
        user.lname = this.state.lname;
        user.email = this.state.email;

        ulist[uid - 1] = user;
        this.setState({ userList: ulist });
        this.setState({ IsSuccess: true });
        this.ClearForm();

    }
    ClearForm() {
        this.setState({ IsEdit: 0 });
        this.setState({ fname: '' });
        this.setState({ lname: '' });
        this.setState({ email: '' });
        this.setState({ userid: '' });
    }

    ShowDetails(user) {
        console.log(this.state.IsVisible);
        this.setState({ IsVisible: true });
        this.setState({ userObj: user });
    }

    HideDetails() {
        this.setState({ IsVisible: false });
    }

    ShowAllUsers() {
        var ulist = this.state.userList;
        return ulist.map((u, i) =>
            <tr key={i}>
                <td >{u.userid}</td>
                <td>{u.fname}</td>
                <td>{u.lname}</td>
                <td>{u.email}</td>
                <td>

                    <button onClick={() => this.EditUserDetails(u)} className="btn btn-link" title="Edit Info">Edit</button>&nbsp;
                    <button onClick={() => { if (window.confirm('Are you sure to delete this user?')) this.RemoveUser(u) }} className="btn btn-link"  title="Delete Info">Delete</button>&nbsp;|&nbsp;
                    <button onClick={() => this.ShowDetails(u)} className="btn btn-link"  title="Show Info">Show</button>
                </td>
            </tr>
        );
    }

    UpdateState(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    SaveNewUser() {
        if (this.state.IsEdit === 0) {
            var ulist = this.state.userList;
            var uid = ulist[ulist.length - 1].userid;
            var str = "";

            if (this.state.fname.length === 0) {
                str += "Please Enter First Name\n";
            }
            if (this.state.lname.length === 0) {
                str += "Please Enter Last Name\n";
            }
            if (this.state.email.length === 0) {
                str += "Please Enter EmailID\n";
            }

            if (str.length === 0) {
                var newUser = { userid: ++uid, fname: this.state.fname, lname: this.state.lname, email: this.state.email };
                ulist.push(newUser);
                this.setState({ userList: ulist });
                this.ClearForm();
            }
            else {
                alert(str);
            }
        }
        else {
            this.UpdateDetails();
        }
    }

    render() {
        return (
            <div className="">
                <div className="row" >
                    <div className="col-md-6" >
                        {/* Written for Add New User Details */}
                        < table className="table" >
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>First Name</td>
                                    <td>
                                        <input type="text" name="fname" value={this.state.fname} className="form-control" onChange={(evt) => this.UpdateState(evt)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>
                                        <input type="text" name="lname" value={this.state.lname} className="form-control" onChange={(evt) => this.UpdateState(evt)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email ID</td>
                                    <td>
                                        <input type="text" name="email" value={this.state.email} className="form-control" onChange={(evt) => this.UpdateState(evt)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => this.SaveNewUser()}>{this.state.IsEdit ? "Update" : "Save"}</button>&nbsp;
                                    <button type="button" className="btn btn-primary" onClick={() => this.ClearForm()}>Clear</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table >



                        {
                            this.state.IsVisible && (<div><hr />
                                <UserDetails data={this.state.userObj} />
                                <div className="col-md-12">
                                    <button className="btn btn-danger float-right" onClick={() => this.HideDetails()}>Hide</button>
                                </div>
                            </div>)
                        }
                    </div >
                    <div className="col-md-6">
                        {/* Writtent for User List */}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>EmailID</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.ShowAllUsers()}
                            </tbody>
                        </table>
                    </div>


                </div >
            </div>
        );
    }
}

export default Userinfo;