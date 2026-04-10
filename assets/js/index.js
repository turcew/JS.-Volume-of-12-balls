let sumVolume = 0;
const PI = Math.PI;
let radius;
let volume;

for (let i = 1; i <= 12; i++) {
  radius = 0.24 + (i - 1) * 0.01;
  volume = (4 / 3) * PI * radius ** 3;
  sum_volume += volume;
}

console.log(`Сумма об'єму куль: ${sum_volume} м^2`);
