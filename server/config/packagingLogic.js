const COURIER_RATES = [
  { maxWeight: 200, price: 5 },
  { maxWeight: 500, price: 10 },
  { maxWeight: 1000, price: 15 },
  { maxWeight: 5000, price: 20 },
];

const getCourierPrice = (weight) => {
  for (let courier of COURIER_RATES) {
    if (weight <= courier.maxWeight) return courier.price;
  }
  return 0;
};

export const packageOrder = (products) => {
  try {
    const packages = [];
    const sorted = [...products].sort((a, b) => b.price - a.price); // sorted products from expensive to cheap
    while (sorted.length > 0) {
      let pack = [],
        totalPrice = 0,
        totalWeight = 0;
      for (let i = 0; i < sorted.length; ) {
        const product = sorted[i];
        if (totalPrice + product.price <= 250) {
          pack.push(product);
          totalPrice += product.price;
          totalWeight += product.weight;
          sorted.splice(i, 1); //iterates through sorted without changing i
        } else {
          i++;
        }
      }
      packages.push({
        items: pack.map((item) => item.name),
        totalPrice,
        totalWeight,
        courierPrice: getCourierPrice(totalWeight),
      });
    }
    return { packages };
  } catch (error) {
    console.log("error in packaging order");
  }
};
