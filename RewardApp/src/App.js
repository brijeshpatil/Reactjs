import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [strCustomerName, setCustomerName] = useState("");
  const [strSpendAmount, setSpendAmount] = useState(0);
  const [strDate, setDate] = useState("");
  const [arrCustomers, setCustomers] = useState([]);
  const [arrRewards, setRewards] = useState([]);
  useEffect(() => {

  }, []);


  const controlHandler = (e) => {
    if (e.target.name === "cname") {
      setCustomerName(e.target.value);
    }
    else if (e.target.name === "amount") {
      setSpendAmount(e.target.value);
    }
    else {
      setDate(e.target.value);
    }

  }

  const addNewTransaction = () => {

    var ulist = arrCustomers;

    var obj = {
      "cname": strCustomerName,
      "amount": parseInt(strSpendAmount),
      "date": strDate
    };

    ulist.push(obj);

    setCustomers(ulist);
    setCustomerName("");
    setSpendAmount(0);
    setDate("");
    filterRewards();
  }

  const filterRewards = () => {
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    var ulist = arrCustomers;
    var filteredValues = [];
    ulist.reduce(function (res, value) {
      if (!res[value.cname]) {
        res[value.cname] = { cname: value.cname, total: 0, month: "" };
        filteredValues.push(res[value.cname])
      }
      //res[value.cname].month = months[new Date(value.date).getMonth()];
      var totaldifference = 0;
      if (value.amount > 50) {
        (value.amount < 100) ? totaldifference = value.amount - 50 : totaldifference = 50;
      }
      if (value.amount > 100) {
        totaldifference += ((value.amount - 100) * 2);
      }

      res[value.cname].total += totaldifference;
      return res;
    }, {});

    setRewards(filteredValues);

  }

  return (<div className="container">
    <div className="row">
      <h1>Rewards Program</h1>
      <hr></hr>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h4>Add New Transactions</h4>
        <table className="table">
          <thead>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Customer Name</td>
              <td>
                <input type="text" name="cname" className="form-control" value={strCustomerName} onChange={(evt) => { controlHandler(evt) }} />
              </td>
            </tr>
            <tr>
              <td>Order Amount</td>
              <td>
                <input type="number" name="amount" className="form-control" value={strSpendAmount} onChange={(evt) => { controlHandler(evt) }} />
              </td>
            </tr>
            <tr>
              <td>Order Date</td>
              <td>
                <input type="date" name="date" className="form-control" value={strDate} onChange={(evt) => { controlHandler(evt) }} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="btn btn-default" onClick={addNewTransaction}>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-6" >
        <h4>Total Transactions</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {arrCustomers.map((e, i) => <tr key={i}>
              <td>{e.cname}</td>
              <td>{e.amount}</td>
              <td>{e.date}</td>
            </tr>
            )}

          </tbody>
        </table>

      </div>
    </div>
    <div className="row">
      <hr></hr>
      <h4>Reward on Transaction</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Amount</th>
            <th>Month</th>
          </tr>
        </thead>
        <tbody>
          {arrRewards.map((e, i) => <tr key={i}>
            <td>{e.cname}</td>
            <td>{e.total}</td>
            <td>{e.month}</td>
          </tr>
          )}

        </tbody>
      </table>

    </div>
  </div>)
}

export default App;
