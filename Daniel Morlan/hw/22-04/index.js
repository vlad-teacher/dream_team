const arr = [4,7,1,3,9,3,6,2,6,9];
let numb = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        numb++;
    }
}
console.log(numb);
