// minimum
let minNumber = 0; let massiv = [];
for (let i = 1; i < 10; i++) {
    if (i === 1) { minNumber = massiv[i]; continue; }
    else if (minNumber < massiv[i]) { minNumber = massiv[i]; }
    else { }
};
console.log(minNumber);