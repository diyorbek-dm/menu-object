const obj = receipt()
const delivery = 9000 + ' сум'
let count = 0
let sum = 0

for (const key in obj) {
  let price = obj[key].price
  let info = obj[key].info
  count++

  for (let i = 0; i < 1; i++) {
    sum += price
  }

  console.log(`Заказ ${count}: ${key}, ${info}, ${price} сум`)
}

console.log('---------- К оплате ----------')
console.log(sum + ' сум ' + ' Доствака: ' + delivery)
