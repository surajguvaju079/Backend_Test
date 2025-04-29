import React from "react";

function Packages({ pkg, idx }) {
  return (
    <div key={idx} className="border p-3 my-2 rounded-md shadow-md bg-gray-50">
      <p>
        <strong>Package {idx + 1}</strong>
      </p>
      <p>Items - {pkg.items.join(", ")}</p>
      <p>Total weight - {pkg.totalWeight}g</p>
      <p>Total price - ${pkg.totalPrice}</p>
      <p>Courier price - ${pkg.courierPrice}</p>
    </div>
  );
}

export default Packages;
