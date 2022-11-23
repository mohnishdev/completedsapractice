const bubbleSort = (arr) => {

    // run the steps n-1 times 

    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        // for each step maximum item will come at last respective index.
        for(let j = 1 ; j <arr.length- i ; j++){
            // swap if item is smaller than previous one 

            if(arr[j]<arr[j-1]){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                swapped = true;
            }
        }
        if(swapped !== true){
            break;
        }
    }

    return arr
}

console.log(bubbleSort([-3,4,-1,-9,8]) , "this is bubble sort.............");