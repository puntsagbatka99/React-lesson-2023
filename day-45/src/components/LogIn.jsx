import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function LogIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loginName: "Khangaikhuu@gmail.com",
    password: "123456",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      toast("User is permitted");
      navigate("/", { replace: true, state: { bookName: "Fake Title" } });
    } else {
      toast("User is not permitted");
      navigate("/register", {
        replace: true,
        state: { bookName: "Fake Title" },
      });
    }
  };
  return (
    <div>
        <Header/>
        <h1>Log In Page</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">LogIn name: </label>
        <input type="email" name="username" />
        <br />
        <label htmlFor="username">Password: </label>
        <input type="password" name="password" />
        <br />
        <button>Sign-In</button>
      </form>
      <ToastContainer />
    </div>
  );
}
