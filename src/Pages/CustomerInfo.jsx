import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const CustomerInfo = () => {
  const loadedMember = useLoaderData();
  console.log(loadedMember);

  const [details] = useState(loadedMember)

  
  
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
   {details.map (detail =>
   
     <tr key={detail.id}>
        <td>{detail.id} </td> 
        <td>{detail.name} </td> 
        <td><input className="h-8 bg-transparent outline outline-1 pl-2 rounded-sm" type="text" /> </td> 
        <td><input className="h-8 bg-transparent outline outline-1 pl-2 rounded-sm" type="text" /></td> 
        <td>{detail.deposit} </td> 
        <td>{detail.date} </td> 
        <td><Link to="/history"><img className="h-7 w-7" src="/public/History.svg" alt="" /></Link> </td>
        
      </tr>)}
    </tbody> 
   
  </table>
</div>
    );
};

export default CustomerInfo;