const time = new Date()

// random array generator
function randomArrayGenerator(numberOfElements) {
    newArray = [] // create array
    for (i = 0; i < numberOfElements; i++) { // loop through a number of times specified by the function
        let element = Math.floor(Math.random() * 50) // generate random integer
        if (!newArray.includes(element)) {
            newArray.push(element)
        }
    }

    return newArray
}

// recursive search
function recursiveBinarySearch(array, target, start = 0, end = array.length - 1) { // O(n)
    // base case: when start is greater than end, we have exhausted our search and should return the result
    if (start > end) {
        return -1
    }

    const middleIndex = Math.floor((start + end) / 2)
    const middleElement = array[middleIndex]

    // create a loop that runs while start is not greater than end
    while (start <= end) {
        // if the target is greater than the middleElement, we want to call the function recursively with new args
        if (target > middleElement) {
            // call the function again with the altered start variable
            return recursiveBinarySearch(array, target, middleIndex + 1, end )
        }
        // if the target is less than the middleElement, we want to call the function recursively with new args
        else if (target < middleElement) {
            // call the function again with altered end variable
            return recursiveBinarySearch(array, target, start, middleIndex - 1)
        }
        // this condition means we have found the element
        else {
            return middleIndex
        }
    }
}

// iterative search
function binarySearch(array, target) { // O(n)
    // define start and end points
    let start = 0
    let end = array.length - 1
    
    // loop through array as long as start is less than end
    while(start <= end) {
        // define middle index and value
        const middleIndex = Math.floor((start + end) / 2)
        const middleElement = array[middleIndex]
        // base case: return the result if target is found
        if (middleElement === target) {
            return middleIndex
        }
        // if target is greater than middle element, we eliminate the lower half of the array by setting the start value to middleIndex
        else if (target > middleElement) {
            start = middleIndex + 1
        }
        // if target is less than middle element, we eliminate the upper half of the array by setting the end value to middleIndex
        else {
            end = middleIndex - 1
        }
    }

    // if no match is found
    return -1
}

// sort by insertion
function insertionSort(array) { // O(n^2)
    // start sorting with the second element in the array, since array[0] is a list of 1 and is sorted
    for (i = 1; i < array.length; i++) {
        // we need to hold on to the value of the current index
        let insertionValue = array[i] // 98, 943, 1
        // we can also assign a variable to represent the last sorted index
        let lastIndex = i - 1 // 0, 1, 2

        // until we hit the 0 element in the array and while the last index is larger than the current, move elements up in array
        while (lastIndex >= 0 && array[lastIndex] > insertionValue) { // skipped, skipped, while 2 >= 0 & 943 > 1 -> while 1 >= 0 & 98 > 1 -> while 0 >= 0 & 24 > 1
            array[lastIndex + 1] = array[lastIndex] // array[3] = array[2] -> array[2] = array[1] -> array[1] = array[0]
            lastIndex --  // 1 -> 0 -> -1 (exits loop)
        }

        array[lastIndex + 1] = insertionValue // array[0] = 98, array[2] = 943, array[-1] = 1
    }

    return array
}

function quickSort(array) {
    if (array.length === 1) {
        return array
    }

    const pivot = array[array.length - 1] // assign a pivot at the end of the array
    const leftArray = [] // create two arrays: left is values smaller than pivot - right is values larger than pivot
    const rightArray = []

    for (i = 0; i < array.length - 1; i++) { // loop through the array (minus the pivot)
        if (array[i] >= pivot) {
            rightArray.push(array[i]) // if the iteration is greater or equal to pivot, push to the right array
        }
        else {
            leftArray.push(array[i]) // same as above but the opposite
        }
    }

    if (leftArray.length > 0 && rightArray.length > 0) { // recursively call quicksort depending on array lengths
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } else if (leftArray.length > 0) {
        return [...quickSort(leftArray), pivot]
    } else {
        return [pivot, ...quickSort(rightArray)]
    }
}

s = 'abbc'
b = 'cbbabcdabbdfabcb'

function string_permutation(s, b) {
    
}


module.exports = { recursiveBinarySearch, binarySearch, insertionSort, randomArrayGenerator, quickSort }
