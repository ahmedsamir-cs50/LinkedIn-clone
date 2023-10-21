import React from "react";
import loginHero from "../../../public/images/login-big.svg"

const HomeLogin = () => {
  return (
    <section className="HomeLogin">
      <div className="login-wrapper">
        <h1>Welcome to your professional community</h1>
        <div className="login-card ">
          <form>
            <label htmlFor="E-mail">E-mail</label>
            <input id="E-mail" placeholder="E-mail"></input>
            <label htmlFor="Password">Password</label>
            <input id="Password" placeholder="Password"></input>
            <a>Forgot Password?</a>
            <button>Sign in</button>
          </form>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={loginHero} alt=""></img>
      </div>
    </section>
  );
};

export default HomeLogin;
