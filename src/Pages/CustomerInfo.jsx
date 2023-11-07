import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const CustomerInfo = () => {
  const loadedMember = useLoaderData();
  console.log(loadedMember);

  const [details] = useState(loadedMember);

  const [deposit, setDeposit] = useState();
  const [withdraw, setWithdraw] = useState();
  const [total, setTotal] = useState(0);

  // Define functions to handle deposit and withdraw actions
  const handleDeposit = () => {
    const newTotal = total + deposit;
    setTotal(newTotal);
  };

  const handleWithdraw = () => {
    if (withdraw <= total) {
      const newTotal = total - withdraw;
      setTotal(newTotal);
    } else {
      alert("Insufficient balance");
    }
  };

  return (
    <div className="overflow-x-auto h-screen">
      <table className="table table-xs">
        <thead className="text-black">
          <tr>
            <th>Account No.</th>
            <th>Name</th>
            <th>Deposit</th>
            <th>Withdraw</th>
            <th>Total</th>
            <th>Last Updated</th>
            <th>History</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.id} </td>
              <td>{detail.name} </td>
              <td>
                <input
                  type="number"
                  value={deposit}
                  className="p-1 rounded bg-transparent border"
                  onChange={() => setDeposit()}
                />
                <button className="ml-2" onClick={() => handleDeposit()}>Click here</button>
              </td>
              <td>
                <input
                  type="number"
                  value={withdraw}
                  className="p-1 rounded bg-transparent border"
                  onChange={() => setWithdraw()}
                
                />
                <button className="ml-2" onClick={()=>handleWithdraw()}>Click here</button>
              </td>
              <td>{detail.deposit} </td>
              <td>{detail.date} </td>
              <td>
                <Link to="/history">
                  <img className="h-7 w-7" src="/public/History.svg" alt="" />
                </Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerInfo;
