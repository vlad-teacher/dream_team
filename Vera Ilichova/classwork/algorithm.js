//Sliding Window :

//arr = [2, 1, 5, 1, 3, 2];  k = 3; (length of subarray)

//2 1 5 = 8   // get , sum 
//1 3 2 = 6
//1 5 1 = 7
//5 1 3 = 9   Max Sum = 9;

//2 1 5
//  1 5 1
//    5 1 3
//      1 3 2
      
//let maxSum = 0;      
//for( let i = 0; i < arr.length-k; i++) { // 0 1
    
  //  let sum = 0;
   // for(let j = i; j < i + 3; j++ ) { // 0 < 3, 1 < 4
    
    //    sum = sum + arr[j]; // arr[0] + arr[1] + arr[2] // arr[1] + arr[2] + arr[3]
    
    //}
    //if( maxSum < sum) {
    //    maxSum = sum;
    //}
    
//}

//let arr =  [2, 1, 5, 1, 3, 2]; 
//let k = 3;
//console.log(`Max sum  subarray is ${calculateMaxSumSubarray(arr, k)}`);

//function calculateMaxSumSubarray(arr, k) {
//    let maxSum = 0;
//    let startIndex = 0; // индекс элемента , который отнимаем слева от суммы
//    let currentSum = 0;

 //   for(let i = 0; i < arr.length; i++) { 
 //       if( i > k - 1 ) {  
  //          if(maxSum < currentSum) { 
    //            maxSum = currentSum; 
      //      }
      //      currentSum = currentSum - arr[startIndex]; 
      //      startIndex++; 
      //  }
      //  currentSum = currentSum + arr[i];
   // }
   // if(maxSum < currentSum) {
    //    maxSum = currentSum;
   // }
   // return maxSum;
//}
//let arr =  [2, 1, 5, 1, 3, 2]; 
//let k = 3;
//console.log(`Max sum  subarray is ${calculateMaxSumSubarray(arr, k)}`);

//function calculateMaxSumSubarray(arr, k) {
  //  let maxSum = 0;
  //  let startIndex = 0; // индекс элемента , который отнимаем слева от суммы
  //  let currentSum = 0;

    //for(let i = 0; i < arr.length; i++) { 
     //   if( i > k - 1 ) {  
       //     if(maxSum < currentSum) { 
        //        maxSum = currentSum; 
        //    }
        //    currentSum = currentSum - arr[startIndex]; 
        //    startIndex++; 
        //}
        //currentSum = currentSum + arr[i];
    //}
    //if(maxSum < currentSum) {
    //    maxSum = currentSum;
    //}
    //return maxSum;
//}

//let arr =  [2, 1, 5, 1, 3, 2]; 
//let k = 3;
//console.log(`Max sum  subarray is ${calculateMaxSumSubarray(arr, k)}`);

//function calculateMaxSumSubarray(arr, k) {
  //  let maxSum = 0;
   // let startIndex = 0; // индекс элемента , который отнимаем слева от суммы
   // let currentSum = 0;

  //  for(let i = 0; i < arr.length; i++) { 
  //      if( i > k - 1 ) {  
   //         if(maxSum < currentSum) { 
    //            maxSum = currentSum; 
      //      }
      //      currentSum = currentSum - arr[startIndex]; 
        //    startIndex++; 
      //  }
       // currentSum = currentSum + arr[i];
    //}
    //if(maxSum < currentSum) {
     //   maxSum = currentSum;
   // }
   // return maxSum;
//}