import { nanoid, customAlphabet } from "nanoid";

function generateNumberId(places) {
  return customAlphabet("1234567890", places);
}
function generateNameId() {
  return customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ   ", 12);
}
function generatePrice() {
  return (Math.random() * 200 + 0.99).toFixed(2);
}

const data = {
  title: "Invoice",
  id: nanoid(),
  outlet_number: "( 916 ) 373 - 7838",
  outlet_manager: "Garry pappu",
  outlet_street: "9479 TRUXEL RD",
  outlet_city: "British Columbia CA V3V 2Y7",
  counter_details: {
    st: generateNumberId(4),
    op: generateNumberId(6),
    te: generateNumberId(2),
    tr: generateNumberId(5),
  },
  cart: [
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
    {
      name: generateNameId(),
      _id: generateNumberId(12),
      price: generatePrice(),
      is_x: Math.random() < 0.5 ? "X" : " ",
    },
  ],
  subtotal: 538.38,
  tax: 23.26,
  total: 594.35,
  debit: 594.35,
  change: "00.00",
  cart_item: 12,
};

export default data;
