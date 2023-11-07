
// const BasicInfo = () => {
//   return (
//     <div>
//       <h1>Deposit/Withdraw Page</h1>
//       <select onChange={(e) => setSelectedMember(e.target.value)} value={selectedMember}>
//         <option value="">Select Member</option>
//         {members.map((member, index) => (
//           <option key={index} value={member.name}>
//             {member.name}
//           </option>
//         ))}
//       </select>
//       <input
//         type="number"
//         placeholder="Enter amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <button onClick={() => handleDepositWithdraw('deposit')}>Deposit</button>
//       <button onClick={() => handleDepositWithdraw('withdraw')}>Withdraw</button>
//     </div>
//   );
// };

// export default BasicInfo;