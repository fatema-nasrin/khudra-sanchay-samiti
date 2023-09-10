const CustomerInfo = () => {
    return (
        <div className="overflow-x-auto h-screen">
  <table className="table table-xs">
    <thead className="text-black">
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Deposit</th> 
        <th>Withdraw</th> 
        <th>Total</th> 
        <th>Date</th> 
        <th>History</th>
        <th>Delete</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td><input className="h-8 bg-transparent outline outline-1 pl-2" type="text" /> </td> 
        <td><input className="h-8 bg-transparent outline outline-1 pl-2" type="text" /></td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td><img className="h-7 w-7" src="/public/History.svg" alt="" /></td>
        <td><img className="h-10 w-10" src="/public/delete.svg" alt="" /> </td>
      </tr>
    </tbody> 
   
  </table>
</div>
    );
};

export default CustomerInfo;