import React from "react";
import NavBar from "../components/NavBar";

export default function Login() {
  return (
    <>
      <header>
        {/* Save space for NavBar */}
        <NavBar />
      </header>
      <main>
        <h1>Login</h1>
        <form>
          <div>
            <label for="username">Username: </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <br />
          <div>
            <label for="password">Password: </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}