/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {createContext, useState, useEffect} from 'react';
import toast from "react-hot-toast";
export const CartContext = createContext();

export const CartProvider = ({ children }) => { 

  const [pizzas, setPizzas] = useState([]);

  const [cart, setCart] = useState([]);

  const addToCart = (pizza, quantity) => {
    const pizzaInCart = isInCart(pizza);
    if (pizzaInCart) {
      increaseQuantity(pizzaInCart);
      return;
    } 
    setCart([...cart, createObjectCart(pizza, quantity)]);
    toast.success("Pizza agregada al carrito", {
      position: "bottom-center",
      icon: '👏'
    });
  }

  const updateQuantity = (pizza, quantity) => {
    if(isNaN(quantity) || quantity < 1) return;

    const pizzaInCart = isInCart(pizza);
    if (pizzaInCart) {
      pizzaInCart.quantity = quantity;
      pizzaInCart.total = pizzaInCart.price * quantity;
      setCart([...cart]);
    }
   }

  const increaseQuantity = (pizza) => {
      pizza.quantity = Number(pizza.quantity) + 1;
      pizza.total = pizza.quantity * pizza.price;
    
    setCart([...cart]);
  }
  
  const decreaseQuantity = (pizza) => {
    if (pizza.quantity === 1) {
      removeFromCart(pizza);
      return;
    }
    pizza.quantity -= 1;
    pizza.total = pizza.quantity * pizza.price;
    setCart([...cart]);
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((p) => p.id !== id));
    toast.error("Pizza removida del carrito", {
      position: "bottom-center",
      icon: '🗑️'
    });
  }

  const clearCart = () => {
    setCart([]);
  }

  const isInCart = (pizza) => {
    return cart.find((p) => p.id === pizza.id);
  }

  const getTotalCart = () => {
    return cart.reduce((acc, pizza) => acc + pizza.total, 0);
  }

  const getQuantity = () => {
    return cart.length;
  }

 const getPizzaById = (id) => { 
    return pizzas.find((pizza) => pizza.id === id);
  }

  const createObjectCart = (
    pizza,
    quantity,
  ) => { 
    return {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      quantity: quantity,
      img: pizza.img,
      total: pizza.price * quantity,
    };
  }
  
 useEffect(() => {
   fetch("/pizzas.json")
     .then((res) => res.json())
     .then(( pizzas ) => {
        setPizzas(pizzas);
     });
 }, []);

  return (
    <CartContext.Provider
      value={{
        pizzas,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalCart,
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        updateQuantity,
        getPizzaById,
      }}>
      {children}
    </CartContext.Provider>
  );

};
export default CartProvider;