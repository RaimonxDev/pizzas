import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/Cart.context";
import { useNavigate } from "react-router-dom";
export const Details = () => {
  const { id } = useParams();
  const { getPizzaById, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const pizza = getPizzaById(id);

  useEffect(() => {
    if (!pizza) {
      navigate("/");
    }
  }, [pizza, navigate]); 

  if (!pizza) {
    return null;
  }
  return (
    <>
      <div className="hero bg-base-200 p-20">
        <div className="hero-content flex-col lg:flex-row">
          <img src={pizza?.img} alt={pizza?.name} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold capitalize">{pizza?.name}</h1>
            <p className="py-6 text-gray-500">{pizza?.desc}</p>

            <p>Ingredientes</p>
            <div className="flex gap-2 flex-wrap">
              {pizza?.ingredients.map((ingredient) => (
                <div key={ingredient} className="badge badge-outline capitalize ">
                  {ingredient}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-6">
              <p className="text-2xl font-bold">Precio: ${pizza?.price}</p>
              <button onClick={() => addToCart(pizza, 1)} className="btn btn-secondary ">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
