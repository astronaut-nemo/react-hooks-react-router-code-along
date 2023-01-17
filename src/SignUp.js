import React from "react";

function SignUp() {
    return(
      <div>
        <h1>Sign Up</h1>
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
  
          <label>Sign me up for the newsletter</label>
          <input
            type="checkbox"
          />
  
          {/* Submit Input/Button */}
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }

export default SignUp;