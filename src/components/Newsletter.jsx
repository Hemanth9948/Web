import React, { useState } from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import user from "./Verifyuser";


const Newsletter=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
      return <div>{user}</div>;
    };

      const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            console.log(error);
          });
          return <div>{user}</div>;
      };
  return (
    <Section id="newsletter">
      <div className="title">
        <h1>
          <span>Signin  </span>/ Signup
        </h1>
        <p>
          Enter the cerdentials to Login , you almost had to start the journey
        </p>
      </div>
      <div className="container">
        
        <span>Username</span>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
       
      </div>
      <div className="container">
        
        <span>Password</span>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        
      </div>
      <div className="container">
      <span>
          <button type="submit" onClick={signIn}>SignIn</button>
      </span>
      <span className="button-space">
          <button type="submit" onClick={signUp}>SignUp</button>
      </span>
      </div>
    </Section>
  );
}

const Section = styled.section`
  border: 0.01rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
  .container {
    background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
    padding: 0.3vw;
    input {
      border: none;
      padding: 1.5rem 8rem 1.5rem 1rem;
      font-size: 1.3rem;
      &:focus {
        outline: none;
      }
    }
    span {
      padding: 1rem 2rem;
      padding-right:2rem;
      background-color: transparent;
      border: none;
      font-size: 1.2rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
    }
      p{
        padding: 1rem 1rem;
        display: inline-block;
        background-color: white;
      }
    button {
      padding: 1rem 2rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 4.7rem;
      }
    }
      .button-space {
      display: inline-block;
      background-color:#f9c74f;
      width: 17rem; /* Adjust the width to control the space */
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
export default Newsletter;