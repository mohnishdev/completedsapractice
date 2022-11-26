// Intertion sort Algorithm code 

const insertionSort = (arr) => {
    // First Loop which will iterate through each of elements

    for (let i = 0; i < arr.length - 1; i++) {
        // second loop will check for the grater and swap if former and is greater than later and it will run backwards .
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }

    console.log(arr , "this is arr,,,,,,,,,,,,,,,,,,");
}

insertionSort([4,-1,-2,1,0])