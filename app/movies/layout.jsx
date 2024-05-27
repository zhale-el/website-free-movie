"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function RootLayout({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex justify-between items-start gap-9 flex-row-reverse ">
      <main>{children}</main>
      <aside className="w-[25rem] bg-gray-100 p-4 rounded-lg mt-6 shadow-xl flex flex-col mb-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-200 border shadow-md my-4 rounded p-3 pl-6"
          >
            <p className="font-bold mb-3">{user.name}</p>
          </div>
        ))}
      </aside>
    </div>
  );
}
