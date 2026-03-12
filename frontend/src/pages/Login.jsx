import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../css/Login.css";


function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async (e)=>{
e.preventDefault();

try{

const res = await API.post("/auth/login",{
email,
password
});

const token = res.data.token;

localStorage.setItem("token",token);

navigate("/projects");

}catch(err){

alert("Login Failed");

}

}

return(

<div className="login-container">

<form className="login-form" onSubmit={handleLogin}>

<h2> App Login</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">
Login
</button>
<p style={{ textAlign: "center", fontSize: "14px" }}>
  Don’t have an account? <a href="/register">Register</a>
</p>

</form>

</div>

)

}

export default Login