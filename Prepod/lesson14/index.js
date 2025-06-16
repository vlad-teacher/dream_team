// TODO: closure, bind ?
// promise, DOM, import, npm

function counterMaker() {
    let count = 0;

    return function () {
        count = count + 1;
        
        console.log(count);
    }
}

const counter = counterMaker();
const counter2 = counterMaker();


// counter(); // 1
// counter(); // 2
// counter2(); // 1




// console.log(counter());
// console.log(counter());
// console.log(counter());
