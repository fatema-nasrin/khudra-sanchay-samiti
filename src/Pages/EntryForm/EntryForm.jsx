import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./EntryForm.css"

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

  useEffect(() => {
    const newRandomId = generateRandomId();
    setRandomId(newRandomId);
  }, []);

  const handleAddMember = (event) => {
    event.preventDefault();

    const form = event.target;
    const id = form.id.value;
    const name = form.name.value;
    const date = form.date.value;
    const total = form.total.value;
    const number = form.number.value;
    const newMember = { id, name, date, total, number };
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
  const background = {
    background: "linear-gradient(45deg, #609c8f, #d27282)",
    animation: 'pulse 3s infinite',
    backgroundSize: '200% 200%',
  };
  return (
    <div className="h-screen water-bg">
      <form
        onSubmit={handleAddMember}
        className="my-9 mx-20 p-9 rounded-lg shadow-md grid grid-cols-2 gap-10"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="w-full px-3 py-2 text-amber-950 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
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
            className="custom-date-input w-full px-3 py-2 text-amber-950 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
            required
          />
        </div>
        <div className="">
          <label htmlFor="deposit" className="block text-gray-700 font-bold">
            Deposit:
          </label>
          <input
            type="number"
            name="total"
            placeholder="Amount"
            className="w-full px-3 py-2 text-amber-950 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
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
            className="w-full px-3 py-2 text-amber-950 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="account number" className="text-gray-700 font-bold">
            Account Number:
          </label>
          <input
            className="bg-transparent p-2 text-amber-950"
            type="text"
            name="id"
            value={randomId}
            readOnly
          />
        </div>

        <div>
          <button
            style={background}
            type="submit"
            className=" text-amber-950 py-2 w-1/2 font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            Add
          </button>
        </div>
      
      </form>
    </div>
  );
};

export default EntryForm;
