import React, { Component } from 'react';

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [
                { name: 'brijesh', math: 13, sci: 45, eng: 34 },
                { name: 'bhadresh', math: 33, sci: 45, eng: 34 },
                { name: 'Kiran', math: 43, sci: 45, eng: 34 },
                { name: 'Kailash', math: 53, sci: 45, eng: 34 },
                { name: 'Smit', math: 63, sci: 45, eng: 34 }
            ]
        };

    }

    GetTotal(stu) {
        var total = stu.math + stu.eng + stu.sci;
        return total;
    }

    GetAvg(stu) {
        return Number(this.GetTotal(stu) / 3).toFixed(2);
    }

    ImportHTML() {
        var slist = this.state.studentList;
        return slist.map((stu, i) =>
            <tr key={i}>
                <td>{stu.name}</td>
                <td>{stu.math}</td>
                <td>{stu.sci}</td>
                <td>{stu.eng}</td>
                <td>{this.GetTotal(stu)}</td>
                <td>{this.GetAvg(stu)}</td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Maths</th>
                            <th>Science</th>
                            <th>English</th>
                            <th>Total</th>
                            <th>Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ImportHTML()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Student;