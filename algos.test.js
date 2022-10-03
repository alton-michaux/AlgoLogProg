const search = require('./algos')

test('generates a random array', () => {
    expect(search.randomArrayGenerator(10)).toBeDefined()
    expect(search.randomArrayGenerator(10)).toBeInstanceOf(Array)
})

test('searches an array recursively', () => {
    array = [ 2, 4, 6, 8 ]
    expect(search.recursiveBinarySearch(array, 4)).toBeDefined()
    expect(search.recursiveBinarySearch(array, 4)).toEqual(1)
})

test('searches an array iteratively', () => {
    array = [ 1, 3, 5, 7, 9 ]
    expect(search.binarySearch(array, 9)).toBeDefined()
    expect(search.binarySearch(array, 9)).toEqual(4)
})

test('sorts an array', () => {
    array = [ 24, 5, 39, 99, 1 ]
    expect(search.insertionSort(array)).toBeDefined()
    expect(search.insertionSort(array)).toEqual([ 1, 5, 24, 39, 99 ])
})

test('uses quicksort to sort an array', () => {
    array = [ 98, 34, 87, 1, 99, 5 ]
    expect(search.quickSort(array)).toBeDefined()
    expect(search.quickSort(array)).toEqual([ 1, 5, 34, 87, 98, 99 ])
})
