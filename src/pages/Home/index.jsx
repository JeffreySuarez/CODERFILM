import React from "react";
// import Slideshow from "../../components/Slideshow";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlideShow, Textoslide, Slide } from "../../components/Slideshow";

import img1 from "../../components/Slideshow/img/a1.jpg";
import img2 from "../../components/Slideshow/img/a6.jpg";
import img3 from "../../components/Slideshow/img/a3.jpg";
import img4 from "../../components/Slideshow/img/a4.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div className="content-Home">
      <ContentSlide>
        <SlideShow>
          <Slide>
            <Link>
              <img src={img1} alt="" />
            </Link>
            <Textoslide>
              <p>15% descuento en Peliculas Marvel</p>
            </Textoslide>
          </Slide>
          <Slide>
            <Link>
              <img src={img2} alt="" />
            </Link>
            <Textoslide>
              <p>15% descuento en Peliculas Marvel</p>
            </Textoslide>
          </Slide>
          <Slide>
            <Link>
              <img src={img3} alt="" />
            </Link>
            <Textoslide>
              <p>15% descuento en Peliculas Marvel</p>
            </Textoslide>
          </Slide>
          <Slide>
            <Link>
              <img src={img4} alt="" />
            </Link>
            <Textoslide>
              <p>15% descuento en Peliculas Marvel</p>
            </Textoslide>
          </Slide>
        </SlideShow>
        <Titulo>Productos destacados</Titulo>
        <SlideShow>
          <Slide tamaño="300px">
            <Link>
              <img src={img1} alt="" />
            </Link>
            <Textoslide colorFondo="navy" colorTexto="white">
              <p>15% descuento en Peliculas Marvel</p>
            </Textoslide>
          </Slide>
          <Slide tamaño="300px">
            <Link>
              <img src={img2} alt="" />
            </Link>
            <Textoslide>
              <p>15% descuento en Peliculas Marvel</p>
            </Textoslide>
          </Slide>
          <Slide tamaño="300px">
            <Link>
              <img src={img3} alt="" />
            </Link>
            <Textoslide>
              <p>15% descuento en Peliculas Marvel</p>
            </Textoslide>
          </Slide>
          <Slide tamaño="300px">
            <Link>
              <img src={img4} alt="" />
            </Link>
            <Textoslide>
              <p>15% descuento en Peliculas Marvel</p>
            </Textoslide>
          </Slide>
        </SlideShow>
      </ContentSlide>
    </div>
  );
};

const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin: 30px 0px 30px 0px;
`;

const ContentSlide = styled.div`
  margin-bottom: 30px;
`;

export default Home;
