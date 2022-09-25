import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import "./Checkout.css";
import { Formik } from "formik";
//importamos firebase
import {
  addDoc,
  collection,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { totalPrice, cart, setCart } = useCartContext();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [numberCell, setNumberCell] = useState("");

  const [orderID, setOrderID] = useState("");

  const [formularioEnviado, setFormularioEnviado] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const order = {
  //     buyer: { name, email, numberCell },

  //     items: cart.map((product) => ({
  //       id: product.id,
  //       price: product.price,
  //       cantidad: product.cantidad,
  //     })),
  //     total: totalPrice(),

  //     //   items: [{ name: "bici", price: 100 }],
  //     //   total: 100,
  //   };
  //   const db = getFirestore();
  //   const orders = collection(db, "orders");
  //   addDoc(orders, order).then(({ id }) => setOrderID(id));

  //   console.log(order);
  //   setCart([]);
  // };

  // console.log(cart);
  // console.log(numberCell, name, email);
  // console.log(orderID);

  // console.log(totalPrice);

  const enviarFirebase = ({ name, email, phone }) => {
    const order = {
      buyer: { name, email, phone },

      items: cart.map((product) => ({
        id: product.id,
        price: product.price,
        cantidad: product.cantidad,
      })),
      total: totalPrice(),

      //   items: [{ name: "bici", price: 100 }],
      //   total: 100,
    };
    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, order).then(({ id }) => setOrderID(id));
    const orderDoc = doc(film, "85O1WFWj53tqEtIkUzpU");
    updateDoc(orderDoc, {
      stock: order.items.cantidad - stock,
    });

    console.log(order);
    setCart([]);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
      }}
      validate={(valores) => {
        let errores = {};

        //validacion para el input de name
        if (!valores.name) {
          errores.name = "por favor ingresa un nombre";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
          errores.name = "El nombre solo puede contener letras y espacios";
        }

        //validacion para el input de email
        if (!valores.email) {
          errores.email = "por favor ingresa un correo electronico";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.email
          )
        ) {
          errores.email =
            "El email solo puede contener letras, numeros, puntos, guiones y guion bajo.";
        }

        //validacion para el input de phone
        if (!valores.phone) {
          errores.phone =
            "por favor ingresa el numero de contacto con el indicativo del pais seguido del numero de celular";
        } else if (!/^[+|5|7|-][0-9]{13}$/.test(valores.phone)) {
          errores.phone = "El phone solo puede contener numeros.";
        }

        return errores;
      }}
      onSubmit={(valores, { resetForm }) => {
        enviarFirebase(valores);
        resetForm(); //reiniciamos el formulario
        setFormularioEnviado(true);
        setTimeout(() => {
          setFormularioEnviado(false);
        }, 2000);
        console.log(valores);
      }}
    >
      {({
        handleSubmit,
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
      }) => (
        <div className="content-checkout">
          {orderID ? (
            <div className="content-titulo1">
              <h1 className="checkout-title1">Gracias por su compra!!</h1>
              <Link className="linkSeguirComprando" to={"/CoderFilm/Peliculas"}>
                Seguir comprando
              </Link>
            </div>
          ) : (
            <>
              <h1 className="checkout-title2">
                Ingresa los datos para generar la orden.
              </h1>
              <div className="content-checkout-formulario">
                <form onSubmit={handleSubmit} className="content-checkout-form">
                  <div className="form-div">
                    <label htmlFor="bane">Nombre: </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      placeholder="agrega tu nombre"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // onChange={(e) => setName(e.target.value)}
                    />
                    {touched.name && errors.name && (
                      <div className="error">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-div">
                    <label htmlFor="email">Correo: </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      placeholder="ejemplo@ejemplo.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                    {touched.email && errors.email && (
                      <div className="error">{errors.email}</div>
                    )}
                  </div>

                  <div className="form-div">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={values.phone}
                      placeholder="+57-3127629854"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // onChange={(e) => setNumberCell(e.target.value)}
                    />
                    {touched.phone && errors.phone && (
                      <div className="error">{errors.phone}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="checkout-botton"
                    // onClick={handleCompra}
                  >
                    Generar Orden
                  </button>
                  {formularioEnviado && (
                    <p className="exito">Formulario enviado con exito</p>
                  )}
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </Formik>
  );
};

export default Checkout;
