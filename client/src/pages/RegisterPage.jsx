import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        username,
        email,
        password,
      });
      alert("Registrasi berhasil, silahkan masuk");
    } catch (e) {
      alert("Registrasi gagal, email sudah digunakan. silahkan coba lagi");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-80">
        <h1 className="font-bold text-primary text-2xl text-center mb-4">
          Daftar
        </h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Daftar</button>
          <div className="text-center py-2 text-gray-500">
            Sudah punya akun?{" "}
            <Link className="underline text-primary" to={"/login"}>
              Masuk disini
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
