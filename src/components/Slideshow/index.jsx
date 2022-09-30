import React from "react";
import "./Slideshow.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRef, useEffect } from "react";

const SlideShow = ({ children }) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguienteImagen = () => {
    console.log(slideshow.current);
    if (slideshow.current.children.length > 0) {
      console.log("siguiente");

      //obtenemos el primer elemento del slideshow
      const primerElemento = slideshow.current.children[0];

      //Establecemos la transicion para el slideshow
      slideshow.current.style.transition = `400ms ease-out all`;

      //tamaño slide
      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      //Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        // Reiniciamos la  posicion del slideshow
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        //tomamos el primer elemento y lo mandamos al final
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      //EventListener para cuando termina la animacion
      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anteriorImagen = () => {
    console.log("anteriorImagen");
    if (slideshow.current.children.length > 0) {
      //Obtener el ultimo elemento del slideshow
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];

      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";

      //tamaño slide
      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = "300ms ease-out all";
        //Movemos el slideshow
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      siguienteImagen();
    }, 5000);

    //Eliminamos los intervalos
    // slideshow.current.addEventListener("mouseenter", () => {
    //   clearInterval(intervaloSlideshow.current);
    // });

    //Volvemos  a reanudar el intervalo
    // slideshow.current.addEventListener("mouseleave", () => {
    //   intervaloSlideshow.current = setInterval(() => {
    //     siguienteImagen();
    //   }, 5000);
    // });
  }, []);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={slideshow}>
        {children}
        {/* Se compone de dos partes */}
        {/* del propio carrusel y de los controles */}
        {/* <Slide>
          <Link>
            <img src={img1} alt="" />
          </Link>
          <Textoslide colorFondo="navy" colorTexto="white">
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
        </Slide> */}
      </ContenedorSlideshow>

      {/* seccion de controles carrousel */}
      <Controles>
        <Botton onClick={anteriorImagen}>
          <i className="fas fa-chevron-left"></i>
        </Botton>
        <Botton derecho onClick={siguienteImagen}>
          <i className="fas fa-chevron-right"></i>
        </Botton>
      </Controles>
    </ContenedorPrincipal>
  );
};

// Estilos del contenedor

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: ${(props) => (props.tamaño ? props.tamaño : "100%")};
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 9;
  max-height: 500px;
  position: relative;

  img {
    width: 100%;
    vertical-align: top;
  }
`;

const Textoslide = styled.div`
  background: rgba(0, 0, 0, 0.5);
  /* background: ${(props) =>
    props.colorFondo ? props.colorFondo : "rgba(0, 0, 0, 0.3)"};
  color: ${(props) => (props.colorTexto ? props.colorTexto : "#fff")}; */
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 700px) {
    position: relative;
    background: black;
  }
`;

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Botton = styled.div`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 30px;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease;

  /* &:hover {
    background: rgba(0, 0, 0, 0.2);
  } */

  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;

export { SlideShow, Textoslide, Slide };
