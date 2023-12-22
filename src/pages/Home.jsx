
import { useContext } from 'react';
import hero from '../assets/hero.jpg'
import { Card } from '../components/Card';
import { CartContext } from '../context/Cart.context';

export const Home = () => {

  const { pizzas } = useContext(CartContext);


  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Bienvenido a Pizza Mia</h1>
            <h3 className="mb-5 text-lg">La mejor pizza de la ciudad. ¡Pruébala ahora!</h3>
            <a href="#menu">
              <button className="btn btn-accent">Pedir Ahora</button>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-base-content">
        <div id="menu" className="grid gap-4 max-w-7xl p-12 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pizzas.length > 0 ? (
            pizzas.map((pizza) => <Card key={pizza.id} pizza={pizza} />)
          ) : (
            <h1 className="text-3xl text-center">No hay pizzas en el menú</h1>
          )}
        </div>
      </div>
    </>
  );
}
