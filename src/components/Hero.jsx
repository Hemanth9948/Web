import React from "react";
import styled from "styled-components";
import home from "../assets/home.jpg";
import heroDesign from "../assets/HeroDesign.png";
export default function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src={home} alt="Background Loading....." />
      </div>
      <div className="content">
        <div className="sale">
          <img src={heroDesign} alt="" />
          <h1>
            <span>Welcome,</span>
            <span><p>To the Food &Friends you can find and meet friends ...</p></span>
          </h1>
        </div>
        <div className="info">
          <h2>Start your <span>journey</span></h2>
          <em>
          
          </em>
          <button>REGISTER</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
      background-color: transparent;
    }
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(90%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 10%;
      img {
        height: 70vh;
      }
      h1 {
        color: white;
        position: absolute;
        top: 15vh;
        left: 15vh;
        right: 15vh;
        font-size: 4.5rem;
        span {
          display: block;
          font-size: 3vw;
        }
      }
    }
    .info {
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: #f9c74f;
        font-size: 3rem;
        letter-spacing: 0.5rem;
      }
      span {
        color: #fc4958;
        font-size: 3rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #fc4958;
        border-radius: 50%;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #f9c74f;
          transition: 0.5s ease;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
