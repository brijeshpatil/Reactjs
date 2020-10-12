import React, { Component } from 'react';

class Userinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            userList: [
                { userid: 1, fname: 'Brijesh', lname: 'Patil', email: 'brijesh@gmail.com' },
                { userid: 2, fname: 'Bhadresh', lname: 'Gosai', email: 'bhadresh@gmail.com' },
                { userid: 3, fname: 'Kiran', lname: 'Soni', email: 'Kiran@gmail.com' },
                { userid: 4, fname: 'Kailash', lname: 'Solanki', email: 'kailash@gmail.com' },
                { userid: 5, fname: 'Smit', lname: 'Macwan', email: 'smit@gmail.com' }
            ]
        };
    }

    ExtractUserData() {
        var ulist = this.state.userList;
        return ulist.map((user, i) =>
            <tr key={i}>
                <td>{user.userid}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-link">Edit</button>&nbsp;
                    <button className="btn btn-link">Delete</button>
                </td>
            </tr>
        );
    }

    AddNewUser() {
        var str = "";
        if (this.state.fname.length === 0) {
            str += "Enter First Name\n";
        }
        if (this.state.lname.length === 0) {
            str += "Enter Last Name\n";
        }
        if (this.state.email.length === 0) {
            str += "Enter EmailID\n";
        }

        if (str.length === 0) {

            var ulist = this.state.userList;
            var userid = ulist[ulist.length - 1].userid;
            var obj = { userid: ++userid, fname: this.state.fname, lname: this.state.lname, email: this.state.email };

            ulist.push(obj);
            this.setState({ userList: ulist });
        }
        else {
            alert(str);
        }
    }

    UpdateStateValues(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-md-6">
                    <h4>Add New User</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>First Name</th>
                                    <td>
                                        <input type="text" name="fname" className="form-control" value={this.state.fname || ''} onChange={(evt) => this.UpdateStateValues(evt)} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Last Name</th>
                                    <td>
                                        <input type="text" name="lname" className="form-control" value={this.state.lname || ''} onChange={(evt) => this.UpdateStateValues(evt)} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>EmailID</th>
                                    <td>
                                        <input type="text" name="email" className="form-control" value={this.state.email || ''} onChange={(evt) => this.UpdateStateValues(evt)} />
                                    </td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>
                                        <input type="button" value="Save" className="btn btn-primary" onClick={() => this.AddNewUser()}></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <h4>User List</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>First Nmame</th>
                                    <th>Last Name</th>
                                    <th>EmailID</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.ExtractUserData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Userinfo;