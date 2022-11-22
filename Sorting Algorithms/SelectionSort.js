// const selectionSort = (arr) => {
//     const findMaxIndex = (arr, start, end) => {
//         let max = start;

//         for (let i = start; i <= end; i++) {

//             if (arr[max] < arr[i]) {
//                 max = i
//             }
//         }

//         return max
//     }

//     const swapIndices = (arr , first , second)=>{
//         debugger
//         let temp = arr[first];

//         arr[first] = arr[second];
//         arr[second] = temp;

//     }

//     // Loop Through each of the indices 

//     for (let i = 0; i < arr.length; i++) {
//         // Here we need to find two things 1. The last index in the each iteration and the max index . once we get those we will swap both . 
//         debugger
//         let lastIndex = arr.length - i - 1;
//         let maxIndex = findMaxIndex(arr, 0, lastIndex)
//         swapIndices(arr , maxIndex , lastIndex)
//     }



//     console.log(arr , "this is array");
// }

// selectionSort([1,5,2,6,0])

const selectionSortAlgo = (arr) => {

    const findMaxIndex = (arr, start, end) => {
        let max = start

        for (let i = start; i < end; i++) {
            if (arr[max] < arr[i]) {
                max = i
            }
        }
        return max
    }
    
    const swapIndices = (arr, max, end) => {
        let temp = arr[max];
        arr[max] = arr[end];
        arr[end] = temp;
    }


    // First step is to loop through the whole array 

    for (let i = 0; i < arr.length; i++) {
        //  Let first see till how much index we need to check for the maximum 
        // It will be basically one less than current index . 

        let lastIndex = arr.length - i - 1

        // Now lets first calculate maximum index

        let maximumIndex = findMaxIndex(arr, 0, lastIndex)

        // Now We have got the maximum index and we have also got the last index . Lets just swap them both and our job is pretty much done. 
        swapIndices(arr, maximumIndex, lastIndex)
    }

    console.log(arr, "this is arr");


}

selectionSortAlgo([4, 1, 5, 6, 2]);










































