let sumVolume = 0;

for (let i = 1; i <= 12; i++) {
  const radius = 0.24 + (i - 1) * 0.01;
  sumVolume += (4 / 3) * Math.PI * radius ** 3;
}

console.log(`Сумма об'єму куль: ${sumVolume} м^3`);
