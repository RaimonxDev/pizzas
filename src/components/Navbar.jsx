import { useContext } from "react";
import { CartContext } from "../context/Cart.context";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const { getQuantity, getTotalCart } = useContext(CartContext);


  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex-1">
          <NavLink to="/" className="text-xl font-bold">
            <p className="btn btn-ghost text-xl">PizzaMia</p>
          </NavLink>
        </div>
        <div className="flex-none">
          <NavLink to="/" className="btn btn-ghost btn-circle">
            <p className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </p>
          </NavLink>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{getQuantity()}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow right-[-100px]">
              <div className="card-body">
                <span className="font-bold text-lg">Pizzas agregadas: {getQuantity()}</span>
                <span className="text-info text-xl">Total: {getTotalCart().toLocaleString("es-CL")}</span>
                <div className="card-actions">
                  <NavLink to="/cart" className="btn btn-primary btn-block btn-sm">
                    <button className="btn btn-primary btn-block btn-sm">View cart</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
