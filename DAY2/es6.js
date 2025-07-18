
let user = "Maha";
const cart = [
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Pen", qty: 3, price: 10 }
];

const updatedCart = [...cart, { name: "Eraser", qty: 1, price: 5 }];

const showItems = (items) => {
  console.log(` Cart for ${user}`);
  items.forEach(({ name, qty, price }) =>
    console.log(`- ${name}: ${qty} x ₹${price} = ₹${qty * price}`)
  );
};


const getTotal = (...items) =>
  items.reduce((sum, { qty, price }) => sum + qty * price, 0);


const confirm = (list) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      if (list.length) {
        res(" Order Confirmed!");
      } else {
        rej(" Failed");
      }
    }, 500);
  });


const checkout = async () => {
  showItems(updatedCart);
  console.log(` Total: ₹${getTotal(...updatedCart)}`);
  try {
    const result = await confirm(updatedCart);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

checkout();
