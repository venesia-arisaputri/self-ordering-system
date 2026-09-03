"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
    } else {
      setError(true);
      setErrorMessage(data.errorMessage);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setError(false);
      }, 3000);
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-1"
          placeholder="password"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />
        <button className="bg-green-600 px-4 py-2" onClick={handleLogin}>
          Login
        </button>
      </div>
      {error && (
        <div className="fixed bottom-5 right-5 rounded-lg bg-white p-4 pr-8 shadow-lg border-l-8 border-red-500">
          <p className="font-bold text-red-600">Login Gagal</p>
          <p className="mt-1 text-sm text-gray-600">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
