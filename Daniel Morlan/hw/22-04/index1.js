const arr = [4,7,1,3,9,3,6,2,6,9];
let min = [0];
for(let i = 1; i < arr.length;i++){
    if(arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);
//найти наименьшее число из этого же массива