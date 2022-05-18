import React from "react";

export default function Login() {
  return (
    <div>
      <form>
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
