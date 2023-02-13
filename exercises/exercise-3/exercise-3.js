let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// let [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6] = order;

 let total = 0;
 for (let {itemName: food, quantity: num, unitPrice: price} of order){
  console.log(`${num} ${food} ${price * num}`)
  total = price * num + total;
 }

 console.log(`Total: ${total}`)
