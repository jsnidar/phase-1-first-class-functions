function receivesAFunction(array) {
    return array()
}

receivesAFunction(function () {return [1,2,3,4,5,6]})

function returnsANamedFunction () {
    return function named(arr) {
        arr = [1,2,3,4,5]
        const newArr = arr.push()
        return newArr
        }
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function() {4 + 5}
}

returnsAnAnonymousFunction()
