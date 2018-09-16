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

const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const generateFakeReceipts = () => {
  const transactionCount = Math.round(Math.random() * 100);
  const transactions = [];
  
  
  for(let i=0;i<transactionCount; i++){
    const customer = CUSTOMERS[Math.round(Math.random() * 100 % CUSTOMERS.length)];
    const transactionID = `${Math.round(Math.random() * 100000 )}`;
    const transactionDate = getRandomDate(new Date('10/20/2017'), new Date());
    const lineItems = [];
    
    let total = 0;
    for(let j=0; j< Math.round(Math.random() * 10); j++){
      curentItem = ITEMS[Math.round(Math.random() * 100 % ITEMS.length)];
      lineItems.push(currentItem);
      total += currentItem.price;
    }
    transactions.push({
      "lineItems":lineItems,
      "total": total,
      "transactionDate": transactionDate,
      "transactionID": transactionID,
      "customer": customer
    })
  }
}
  



app.get('/receipts', (req, res) => {
  
  const receipts = generateFakeReceipts()
  res.send(receipts);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))