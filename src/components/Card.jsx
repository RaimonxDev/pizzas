/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/Cart.context";
import { Link } from "react-router-dom";
export const Card = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);
  const handleCart = () => { 
    addToCart(pizza, 1);
  }
  return (
    <div className="card w-full xl:max-w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={pizza.img} alt={pizza.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">
          {pizza.name}
          {pizza.bestSeller && <div className="badge badge-error text-white">Mas Vendida</div>}
        </h2>
        <p className="text-gray-600">{pizza.desc}</p>
        <p>Ingredientes</p>
        <div className="flex gap-2 flex-wrap">
          {pizza.ingredients.map((ingredient) => (
            <div key={ingredient} className="badge badge-outline capitalize ">
              {ingredient}
            </div>
          ))}
        </div>

        <div className="card-actions justify-end gap-2 mt-4">
          <div className="flex justify-between items-center gap-2 w-full">
            <p className="text-2xl font-bold">{pizza.price.toLocaleString("es-CL")}$</p>
            <button onClick={handleCart} className="btn btn-sm btn-secondary">
              Agregar
            </button>
          </div>
        </div>

        <Link to={`/details/${pizza.id}`} className="btn btn-outline btn-sm btn-neutral">
          Detalles
        </Link>
      </div>
    </div>
  );
};
