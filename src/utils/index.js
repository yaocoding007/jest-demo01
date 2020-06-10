export function sum(a, b) {
    return a + b
}

export function fetchData(callback) {
    callback('fetchData')
}

export function fetchPromise() {
    return new Promise((resolve) => {
        resolve('fetchPromise')
    })
}