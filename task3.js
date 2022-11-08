let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let multipleOf3 = someNumbers.some(function(numbers){
    return numbers % 3 === 0
})

let multipleOf5 = someNumbers.some(function(numbers){
    return numbers % 5 === 0
})

let multipleOf60 = someNumbers.some(function(numbers){
    return numbers % 60 === 0
})

let multipleOf90 = someNumbers.some(function(numbers){
    return numbers % 90 === 0
})