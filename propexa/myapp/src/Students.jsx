import React, { Component } from "react";

class Student extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentList: [
                { rno: 1, name: 'Brijesh', math: 12, sci: 32, eng: 42 },
                { rno: 2, name: 'Hardik', math: 20, sci: 32, eng: 32 },
                { rno: 3, name: 'Divynag', math: 10, sci: 22, eng: 42 },
                { rno: 4, name: 'Smit', math: 22, sci: 12, eng: 42 },
                { rno: 5, name: 'Dipak', math: 32, sci: 22, eng: 13 }
            ]

        };
    }
    ShowAllStudents() {
        var studentList = this.state.studentList;
        return studentList.map((student) =>
            <tr>
                <td>{student.rno}</td>
                <td>{student.name}</td>
                <td>{student.math}</td>
                <td>{student.sci}</td>
                <td>{student.eng}</td>
                <td>{student.eng + student.sci + student.math }</td>
                <td>{ Number((student.eng + student.sci + student.math)/3).toFixed(2) }</td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Roll Number</th>
                            <th>Student Name</th>
                            <th>Maths</th>
                            <th>Science</th>
                            <th>English</th>
                            <th>Total</th>
                            <th>Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ShowAllStudents()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Student;