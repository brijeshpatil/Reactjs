import React, { Component } from "react";
class UserDetails extends Component {
    render() {
        return (
            <div className="col-md-12">
                
                    <h2>User Details</h2>
                    <ul className="list-group">
                        <li className="list-group-item"><b>UserID</b> : {this.props.data.userid}</li>
                        <li className="list-group-item"><b>First Name</b> : {this.props.data.fname}</li>
                        <li className="list-group-item"><b>Last Name</b> : {this.props.data.lname}</li>
                        <li className="list-group-item"><b>EmailID</b> : {this.props.data.email}</li>
                    </ul>
                

            </div>
        );
    }
}

export default UserDetails;