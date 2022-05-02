import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../Redux/actions";

export const Login = () => {
  const [un, setUn] = useState("");
  const [pas, setPas] = useState("");
  const isAuth = useSelector((store) => store.login);
  console.log(isAuth);
  const disPatch = useDispatch();
  const navigate = useNavigate;

  async function getData() {
    let res = await fetch("https://localhost:8000/users");
    let data = await res.json();

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].username == un &&
        data[i].pass == pas &&
        un == "admin" &&
        pas == "1234"
      ) {
        disPatch(logIn);
        navigate("/orders");
      } else if (data[i].username == un && data[i].pass == pas) {
        disPatch(logIn);
        navigate("/neworder");
      }
    }
  }
  const handleChange = (e) => {
    if (e.target.name == "username") {
      setUn(e.target.value);
    } else {
      setPas(e.target.value);
    }
  };
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={getData}>
        Login
      </button>
    </div>
  );
};
