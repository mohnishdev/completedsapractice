// const bubbleSort = (arr) => {

//     // run the steps n-1 times 

//     for (let i = 0; i < arr.length; i++) {
//         let swapped = false;
//         // for each step maximum item will come at last respective index.
//         for(let j = 1 ; j <arr.length- i ; j++){
//             // swap if item is smaller than previous one 

//             if(arr[j]<arr[j-1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j-1];
//                 arr[j-1] = temp;
//                 swapped = true;
//             }
//         }
//         if(swapped !== true){
//             break;
//         }
//     }

//     return arr
// }

// console.log(bubbleSort([-3,4,-1,-9,8]) , "this is bubble sort.............");




const bubbleSortAlgorithm = (arr) => {
    // Step 1 => one loop we will run outer to iterate over all elements of the array.

    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        // Step 2 => second loop we will iterate over each elements and compare them and swap them if the first one is smaller than the second .
        debugger;
        for (j = 1; j < arr.length - i; j++) {
            debugger
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                swapped = true;
            }
        }
        if(!swapped === true){
            break;
        }
    }
}

bubbleSortAlgorithm([5,4,3,2,1])
