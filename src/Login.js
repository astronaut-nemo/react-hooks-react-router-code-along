import React from "react";

function Login() {
    return(
      <div>
        <h1>Login</h1>
        <form>
          {/* Username Input */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
  
          {/* Password Input */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
  
          {/* Submit Input/Button */}
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
}

export default Login;