import { useContext } from "react";
import { CartContext } from "../context/Cart.context";

export const Checkout = () => {

  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <>
      <div className="max-w-5xl mx-auto my-2">
        {cart.length ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-neutral uppercase bg-secondary dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Producto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cantidad
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Precio
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                      <img src={item.img} className="w-16 md:w-32 max-w-full max-h-full" alt={item.name} />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white capitalize">{item.name}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          disabled={item.quantity === 1}
                          onClick={() => decreaseQuantity(item)}
                          className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-secondary bg-neutral border border-gray-300 rounded-full focus:outline-none hover:bg-secondary hover:text-neutral focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 disabled:bg-gray-500"
                          type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>
                          <input
                            onChange={(event) => updateQuantity(item, event.target.value)}
                            value={item.quantity}
                            min={1}
                            type="number"
                            id="first_product"
                            className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1"
                            required
                          />
                        </div>
                        <button
                          onClick={() => increaseQuantity(item)}
                          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-secondary bg-neutral border border-gray-300 rounded-full focus:outline-none hover:bg-secondary hover:text-neutral focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {item.price.toLocaleString("es-CL")}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {" "}
                      {item.total === item.price
                        ? item.price.toLocaleString("es-CL")
                        : item.total.toLocaleString("es-CL")}
                    </td>

                    <td className="px-6 py-4">
                      <a
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h3 className="text-bold text-2xl text-center">No hay item agregados</h3>
        )}
      </div>
    </>
  );
};
