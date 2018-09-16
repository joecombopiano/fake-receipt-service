const express = require('express');
const app = express();

const CUSTOMERS = [
  {
    firstName: "Kaizer",
    lastName: "Soze",
    email: "kaizer.soze@email.com",
    phoneNumber: "814-882-1020"


  },
  {
    firstName: "Rick",
    lastName: "Astley",
    address: {
      line1: "3948 S Eddy St",
      line2: null,
      city: "Seattle",
      state: "Washington",
      zipcode: "98118"
    }

  },
  {
    firstName: "Joh",
    lastName: "Smith",
    phoneNumber: "814-833-1020"
  },
  {
    firstName: "Bruce",
    lastName: "Wayne",
    email: "batman@email.com"
  },
]

const ITEMS = [
  {
    name: "Shoes",
    price: 65,
    sku: "abc123456"
  },
  {
    name: "Tshirt ",
    price: 12,
    sku: "def123456"
  },
  {
    name: "Pants",
    price: 32,
    sku: "ghi123456"
  },
  {
    name: "Jacket",
    price: 110,
    sku: "jkl123456"
  },
]

const getRandomDate = (start, end) => (new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));


const generateFakeReceipts = () => {
  const transactions = [];
  const transactionCount = Math.floor(Math.random() * 100);
  for(let i=0; i<transactionCount; i++){
    const customer = CUSTOMERS[Math.floor(Math.random() * 100 % CUSTOMERS.length)];
    const transactionID = `${Math.floor(Math.random() * 100000 )}`;
    const transactionDate = getRandomDate(new Date('10/20/2017'), new Date());
    const lineItems = [];
    const lineItemCount =  Math.floor(Math.random() * 10) || 1;
    let total = 0;

    for(let j=0; j< lineItemCount; j++){
      const itemIndex = Math.floor(Math.random() * 100 % ITEMS.length);
      const currentItem = ITEMS[itemIndex];
      lineItems.push(currentItem);
      total += currentItem.price;
    }
    transactions.push({
      "lineItems":lineItems,
      "total": total,
      "transactionDate": transactionDate,
      "transactionID": transactionID,
      "customer": customer
    });
  }
  return transactions;
}

app.get('/receipts', (req, res) => {
  const receipts = generateFakeReceipts();
  res.send({response: receipts});
});

app.listen(3000, () => console.log('Fake transaction service'));
