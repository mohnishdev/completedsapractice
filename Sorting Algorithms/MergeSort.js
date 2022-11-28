const mergeSort = (arr) => {
    // first lets write base condition for recursion

    if (arr.length < 2) {
        return arr
    }

    // Lets calculate floor of  half array 

    const half = Math.floor(arr.length / 2);

    // Now let's calculate left and write of the array ;

    const left = arr.slice(0, half);
    const right = arr.slice(half);

    return merge(mergeSort(left), mergeSort(right));
}

// Now right the merge function which will merge two already sorted arrays 

const merge = (left, right) => {
    const newArr = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            newArr.push(left.shift());
        } else {
            newArr.push(right.shift())
        }
    }

    return [...newArr, ...left, ...right]
}

console.log(mergeSort([-3,-1,6,9,1]));