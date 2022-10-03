const algos = require('./algos')

// timeout for console program
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds)).then(resolve => { return resolve })
}

// console program
async function buildLog(){
    console.log("Generating array...")

    await sleep(2000)

    let start = performance.now()

    let array = algos.randomArrayGenerator(20)

    let finish = performance.now()

    console.log('\x1b[33m%s\x1b[0m', `randomArrayGenerator done in ${finish - start} milliseconds`)

    console.log(`Array created: [${array}]`)

    sortLog(array)
}

async function sortLog(array) {
    await sleep(2000)
    
    console.log("Sorting array...")

    await sleep(2000)

    let start = performance.now()

    let sortedArray = algos.insertionSort(array)
    
    let finish = performance.now()

    console.log('\x1b[33m%s\x1b[0m', `insertionSort done in ${finish - start} milliseconds`)

    console.log(`Array sorted: [${sortedArray}]`)

    searchLog(sortedArray)
}

async function searchLog(array) {
    await sleep(2000)

    let value = Math.floor(Math.random() * 50)

    console.log(`Searching for the number ${value}`)

    await sleep(2000)

    let start = performance.now()

    let search = algos.binarySearch(array, value)
    
    let finish = performance.now()

    console.log('\x1b[33m%s\x1b[0m', `binarySearch done in ${finish - start} milliseconds`)

    parseLog(search, value)
}

async function parseLog(search, value) {
    if (search === -1) {
        console.log('\x1b[31m%s\x1b[0m', `${value} is not present in the array`)
    }
    else {
        console.log('Found it.')

        await sleep(1000)

        console.log('\x1b[32m%s\x1b[0m', `${value} is the ${search + 1} element at the ${search} index`)
    }
}

// call the function to trigger the console program
buildLog().then(function () {
    return
})