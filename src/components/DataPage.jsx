import NavBar from "./NavBar";
import User from "./User.jsx";
import { useEffect, useState } from "react";

export default function DataPage() {
  const [data, setData] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const arrayPlz = await response.json();
      setData(arrayPlz);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    if (data) {
      console.log(data);
      const userComponents = data.map(user => {
        return <User key={user.id} name={user.name} />;
      });
      setUsers(userComponents);
    }
  }, [data]);

  return (
    <div id="artist-div">
      <NavBar />
      {users.length > 0 ? (
        <div id="artist-list" className="grid-container">
          {users}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
