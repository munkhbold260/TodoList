// // function isPrime(x) {
// //   let prime;
// //   let val;
// //   let mult = 1;
// //   for (let i = 2; i < x; i = i + 1) {
// //     val = x % i;
// //     mult = mult * val;
// //     if (mult != 0) {
// //       prime = true;
// //     } else {
// //       prime = false;
// //     }
// //   }
// //   console.log(prime);
// //   return prime;
// // }

// // isPrime(55);

// function qwert(x) {
//   if (x == 2) {
//     return true;
//   } else if (x % 2 == 0) {
//     return false;
//   }
//   let prime = 1;
//   for (let i = 3; i < x; i = i + 1) {
//     k = x % i;
//     prime = prime * k;
//     console.log(k, prime);
//     if (prime != 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// // let ans = qwert(25);
// // console.log(ans);

function primeNumber(num) {
  if (num == 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(primeNumber(1));

function primeNumber(num) {
  if (num == 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
function betweenPrime(num1, num2) {
  let prime = [];
  let count = 0;
  for (let i = num1; i <= num2; i++) {
    if (primeNumber(i)) {
      prime[count] = i;
      count++;
    }
  }
  return prime;
}
console.log(betweenPrime(1, 100));


function home(a, b, c) {
  let floor = c / b - ((c / b) % 1);

} else if ((c / b) % 1 == 0) {
  floor = floor + 0;
} else if ((c / b) % 1 !== 0) {
  floor = floor + 1;
}