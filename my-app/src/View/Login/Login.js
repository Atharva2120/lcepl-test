import "./login.css";
import { useState } from "react";


function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   
    return(
   

      <div class="wrapper">
         <div class="title">
            Login Form
         </div>
         <form >
            <div class="field">
               <input type="text"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required />
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required />
               <label>Password</label>
            </div>
            <div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me" />
                  <label for="remember-me">Remember me</label>
               </div>
               <div class="pass-link">
                  <a href="#">Forgot password?</a>
               </div>
            </div>
            <div class="field">
                <button type="button" class="submit" onClick={(e)=>alert(email,",",password)}>Login</button>
               
            </div>
            <div class="signup-link">
               Not a member? <a href="#" >Signup now</a>
            </div>
         </form>
      </div>

    );
}

export default Login;