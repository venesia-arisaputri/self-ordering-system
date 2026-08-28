"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    const request = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await request.json();
    console.log(data);
    console.log(request.status);
    if (request.ok) {
      router.push("/admin");
    }
  }

  return (
    <div className="h-[100vh] bg-gray-200 flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-1"
          placeholder="username"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-1"
          placeholder="password"
        />
        <button className="bg-green-600 px-4 py-2" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
