function area(num){
res=3.14*num*num
return(res)
}
radius = [20, 30, 40, 50, 60, 70, 80, 90]
// console.log(radius)
// radius.pop()
// console.log(radius)
// radius.push(66)
// console.log(radius)

for (i = 0; i < radius.length; i++){
    console.log(area(radius[i]))
}
console.log(radius[1])
