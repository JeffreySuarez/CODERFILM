import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

//creamos el hooks personalizado

const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //funcion que nos devuelva true o false si hay producto en el carrito

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };

  //funcion para limpiar el carrito
  const clearCart = () => setCart([]);

  //funcion para remover el producto del carrito
  const removeProduct = () => {
    setCart(cart.filter((product) => product.id !== id));
  };
  //vamos a setear el carrito y todos los productos que no sean ese id se mostraran.  creara un array que mostrara todos los productos que no tengan ese id

  //funcion para agregar el producto al carrito
  //podemos hacerlo de varias formas

  /* Primera forma */
  const addProduct = (item, nuevaCantidad) => {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, cantidad: nuevaCantidad });
    setCart(newCart);
  };

  console.log("carrito : " + JSON.stringify(cart));

  /*
  
    Esta primera forma funciona de la siguiente manera, desde PeliculasDetails en la constante onAdd pasamos a  addProduct, la data y la cantidad hacia el contexto. ahi la recibimos como parametro en item que va a ser un objeto y  una nueva cantidad (newQuantity). 
  
    Una vez que los recibimos lo que debo que hacer es crear un nuevo carrito pero filtrado, donde esten todos los productos menos el que coincida con ese id.  despues me creo un nuevo objeto con el spread operator y ademas estoy creando uno con la nueva cantidad y al finalizar setea el carrito nuevamente.
    Lo que va a hacer en general es sobreescribir la cantidad.
  
  
  
    */

  //tendra la logica para no aceptar duplicados

  const context = {
    clearCart,
    isInCart,
    removeProduct,
    addProduct,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export { useCartContext, CartProvider };
