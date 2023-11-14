import { useState } from "react";
import cors from "cors";
import NavBar from "./NavBar";

export default function CreateForm() {
  const [nameData, setNameData] = useState("");

  function handleChange(event) {
    const nameInput = event.target.value;

    setNameData(nameInput);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const user = nameData;

    setNameData("");

    const dataRoute = "http://localhost:3000/";
    console.log(user);
    await fetch(dataRoute, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: user }),
    });
  }

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name: </label>
        <input type="text" id="name" placeholder="Type your name here" value={nameData} onChange={handleChange} required />

        <button id="form-button">submit</button>
      </form>
    </div>
  );
}
