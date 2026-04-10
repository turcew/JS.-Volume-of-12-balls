let sum_volume = 0;
const PI = Math.PI;
let r;
let v;

for (let i = 1; i <= 12; i++) {
  r = 0.24 + (i - 1) * 0.01;
  v = (4 / 3) * PI * r ** 3;
  sum_volume += v;
}

console.log(`Сумма об'єму куль: ${sum_volume} м^2`);
