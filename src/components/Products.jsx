import React from "react";
import styled from "styled-components";
//import product1 from "../assets/product1.jpg";
//import product2 from "../assets/product2.jpg";
//import product3 from "../assets/product3.jpg";
//import product4 from "../assets/product4.jpg";
import andhra from "../assets/andhra.jpeg";
import Telangana from "../assets/Telangana.jpeg";
import maharastra from "../assets/maharastra.jpeg";
import Tamilnadu from "../assets/Tamilnadu.jpeg"
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: andhra,
      name: "Andhra Pradesh",
      price: "$22.4/pcs",
    },
    {
      image: Telangana,
      name: "Telangana",
      price: "$5.5/pcs",
    },
    {
      image: maharastra,
      name: "Maharastra",
      price: "$8/pcs",
    },

    {
      image: Tamilnadu,
      name: "Tamilnadu",
      price: "$12.5/pcs",
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Locate YOUR</span> Restaurent!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              
              <p>You can Locate your Restaurent  spot where you want to meet</p>
              <button>PREMIUM</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      a {
        color: #fc4958;
        font-size: 1.4rem;
        transition: 0.5s ease-in-out;
        
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d04);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #e85d04, #fc4958);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
