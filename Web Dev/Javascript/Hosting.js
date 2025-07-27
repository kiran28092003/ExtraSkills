// function addtwonumber(num1, num2) {
//     res=num1+num2
// }
// addtwonumber(2, 3)
// console.log(res)


// addtwonumber(2, 3)
// function addtwonumber(num1, num2) {
//     res = num1 + num2
//     return res
// }
// console.log(res)

 // hosting is defining before initializing


// sqr(10)
// function sqr(num) {
//     res = num * num
//     console.log(res)
// }

// greet()
// function greet(){
//     console.log("Helooooooo")
// }


// area(11)
// function area(num) {
//     res = 3.14 * num * num
//     return(res)
// }
// console.log(res)



//factorial

function fact(num) {
    if (num == 0) {
        return 1
    }
    return num * fact(num - 1)
}
console.log(fact(5))
