import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EntryForm = () => {
  const [randomId, setRandomId] = useState("");

  // Function to generate a random 4-digit number
  function generateRandomNumber() {
    return Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
  }

  // Function to generate a random letter
  function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  }

  // Function to generate the random ID
  function generateRandomId() {
    const randomNumber = generateRandomNumber();
    const randomLetter = generateRandomLetter();
    return randomLetter + randomNumber;
  }

  // Use useEffect to generate the random ID when the component mounts
  useEffect(() => {
    const newRandomId = generateRandomId();
    setRandomId(newRandomId);
  }, []); // The empty dependency array ensures this runs once on mount

  const handleAddMember = (event) => {
    event.preventDefault();

    const form = event.target;
    const id = form.id.value;
    const name = form.name.value;
    const date = form.date.value;
    const deposit = form.deposit.value;
    const number = form.number.value;
    const newMember = { id, name, date, deposit, number };
    console.log(newMember);

    fetch("http://localhost:5000/all-member", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMember),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Added successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="h-screen">
      <form
        onSubmit={handleAddMember}
        className="my-9 mx-20 p-9 rounded-lg shadow-md grid grid-cols-2 gap-10"
      >
        <div className="">
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
            required
          />
        </div>
        <div className="">
          <label htmlFor="date" className="block text-gray-700 font-bold">
            Date:
          </label>
          <input
            type="date"
            name="date"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
            required
          />
        </div>
        <div className="">
          <label htmlFor="deposit" className="block text-gray-700 font-bold">
            Deposit:
          </label>
          <input
            type="number"
            name="deposit"
            placeholder="Amount"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
            required
          />
        </div>
        <div className="">
          <label htmlFor="number" className="block text-gray-700 font-bold">
            Phone:
          </label>
          <input
            type="number"
            name="number"
            placeholder="+880"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="account number" className="text-gray-700 font-bold">
            Account Number:
          </label>
          <input
            className="bg-transparent p-2"
            type="text"
            name="id"
            value={randomId}
            readOnly
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 w-1/2 font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default EntryForm;
