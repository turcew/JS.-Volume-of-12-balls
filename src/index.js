let sumVolume = 0;
const step = 0.01;
const minRadius = 0.24;

for (let i = 1; i <= 12; i++) {
  const radius = minRadius + (i - 1) * step;
  sumVolume += (4 / 3) * Math.PI * radius ** 3;
}

console.log(`Сумма об'єму куль: ${sumVolume} м^3`);
