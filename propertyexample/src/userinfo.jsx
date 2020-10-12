import React, { Component } from "react";
export class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: 'brijesh', email: 'brijesh@dashtechinc.com', age: 30, tech: 'MeanStack' }
            ]
        };
        console.log(this.state.users);
    }

    printData() {
        var users = this.state.users;
        return users.map((user) => <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.tech}</td>
        </tr>
        );
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email ID</th>
                            <th>Age</th>
                            <th>Technology</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.printData()}
                    </tbody>
                </table>
            </div>
        );
    };
}
