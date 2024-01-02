// let display = [
//   { brand: "LG", inch: "23", price: 200000, year: "2022" },
//   { brand: "sony", inch: "31", price: 300000, year: "2021" },
//   { brand: "sony", inch: "31", price: 300000, year: "2021" },
//   { brand: "sony", inch: "31", price: 300000, year: "2021" },
//   { brand: "sony", inch: "31", price: "300000", year: "2021" },
//   { brand: "sony", inch: "31", price: "300000", year: "2021" },
//   { brand: "sony", inch: "31", price: "300000", year: "2021" },
//   { brand: "sony", inch: "31", price: "300000", year: "2021" },
// ]
// display[0].price = display[0].price * 0.9;
// console.log(display);

let products = [
  {
    name: "iphone12",
    price: 20000,
    category: "phone",
    brand: "apple",
    stock: 11,
  },
  {
    name: "bmw-x7",
    price: 100000,
    category: "car",
    brand: "bmw",
    stock: 2,
  },
  {
    name: "imac",
    price: 25000,
    category: "computer",
    brand: "apple",
    stock: 3,
  },
  {
    name: "dell",
    price: 20000,
    category: "laptop",
    brand: "dell",
    stock: 4,
  },
  {
    name: "washer1",
    price: 15000,
    category: "washing",
    brand: "samsung",
    stock: 5,
  },
  {
    name: "blue esse",
    price: 4000,
    category: "cigar",
    brand: "esse",
    stock: 6,
  },
  {
    name: "ecos",
    price: 3100,
    category: "food",
    brand: "monos",
    stock: 7,
  },
  {
    name: "alpengold",
    price: 5000,
    category: "food",
    brand: "alpen",
    stock: 8,
  },
  {
    name: "govi sun",
    price: 50000,
    category: "cloth",
    brand: "govi",
    stock: 9,
  },
  {
    name: "tcl-98",
    price: 17000,
    category: "display",
    brand: "tcl",
    stock: 10,
  },
];

// filterBybrand
// filterByPrice(max,min) 1000,000 doosh uneteig gargaj irn
// sortByStock-

// function setSale(saleAmount) {
//   for (let i = 0; i < 10; i = i + 1) {
//     products[i].price = products[i].price * (1 - saleAmount / 100);
//   }
// }
// setSale(20);
// console.log(products);

// for (let i = 0; i < 10; i = i + 1) {
//   if (products[i].category == "food") {
//     console.log(products[i]);
//   }
// }
// function findByCategory(cate) {
//   for (let i = 0; i < 10; i = i + 1) {
//     if (products[i].category == cate) {
//       console.log(products[i].name);
//     }
//   }
// }
// findByCategory("car");

// function findAboveAvg(prods) {
//   return [];
// }

// let aboveAVG = findAboveAvg(products);
// console.log(aboveAVG);

// //dundaj uniig oloh
// function findAVG(prods) {
//   let avgPrice = 0;
//   return avgPrice;
// }

// //products--n dundaj price-s unetei productsuudiig oloh

// function findAboveAvg(prods) {
//   let avgPrice = 0;
//   let sumPrice = 0;
//   for (let i = 0; i < prods.length; i = i + 1) {
//     sumPrice = sumPrice + prods[i].price;
//   }
//   console.log("sumPrice:", sumPrice);
//   avgPrice = sumPrice / prods.length;

//   // now filter price above avg

//   let filterdProd = [];
//   let count = 0;
//   for (let i = 0; i < prods.length; i++) {
//     if (prods[i].price > avgPrice) {
//       filterdProd[count] = prods[i];
//       count++;
//     }
//   }
//   return filterdProd;
// }
// let aboveAVG = findAboveAvg(products);
// console.log("aboveAVG:", aboveAVG);
//////////////////////////////////////////////////////////////////////
///////// filterBybrand

let filterByBrand = products.filter((brand) => {
  return brand.brand == "apple";
});
console.log("filterByBrand", filterByBrand);

////////////////////////////////////////////////////////////////////////
/////// sortByStock-
let sortByStock = products.sort(function (stock1, stock2) {
  return stock1.stock - stock2.stock;
});
console.log("sortByStock", sortByStock);

let sortByPrice = products.sort(function (price1, price2) {
  return price1.price - price2.price;
});
console.log("sortByPrice", sortByPrice);

//////////////////////////////////////////////////////////////////////
////////////////// filterByPrice(max,min) 1000,000 doosh uneteig gargaj ir

let filterByPrice = products.filter(function (price) {
  return price.price >= 10000 && price.price <= 20000;
});
console.log("filterbyprice", filterByPrice);
////////////////////////////////////////////////////////////////
//////////sort by
