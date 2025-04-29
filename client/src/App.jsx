import "./App.css";
import axios from "axios";
import { useState } from "react";
import { items } from "./config/items.js";
import Packages from "./components/packages.jsx";

function App() {
  const [selected, setSelected] = useState([]);
  const [packages, setPackages] = useState([]);

  const toggleItem = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const placeOrder = async () => {
    const response = await axios.post(
      "http://localhost:5000/ebay/place-order",
      {
        items: selected,
      }
    );
    setPackages(response.data.packages);
  };
  return (
    <>
      <div className="p-4 max-w-xl mx-auto">
        <h1 className="text-xl font-bold mb-4">Select Products</h1>
        <table>
          <tr>
            <td>Name</td>
            <td>Price </td>
            <td>Weight</td>
          </tr>
          {items.map((item, i) => (
            <tr>
              <td>
                <label key={i} className="block">
                  <input
                    type="checkbox"
                    onChange={() => toggleItem(item)}
                    checked={selected.includes(item)}
                  />
                  {/* {` ${item.name} - $${item.price} - ${item.weight}g`} */}

                  {item.name}
                </label>
              </td>
              <td>{` $${item.price}`}</td>
              <td>{`${item.weight}g`}</td>
            </tr>
          ))}
        </table>
        <button
          onClick={placeOrder}
          className="bg-blue-500 text-white px-4 py-2 mt-4"
        >
          Place Order
        </button>

        {packages?.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Packages:</h2>
            {packages.map((pkg, idx) => (
              <Packages pkg={pkg} idx={idx} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
