// op1 = 10
// op2 = 20
// op = '+'

// if(op=='+'){
// 	res = op1 + op2
// }
// else if(op=='-'){
// 	res = op1 - op2
// }
// else if(op=='*'){
// 	res = op1 * op2
// }
// else if(op=='/'){
// 	if(op2==0){
// 		console.log("Cannot divide by zero")
// 		exit()
// 	}
// 	else{
// 		res=op1/op2
// 	}
// }
// console.log(res)



res=999999
op1 = 10
op2 = 0 
op = '/'

if(op=='+'){
	res=op1+op2
}
else if(op=='-'){
	res=op1-op2
}
else if(op=='*'){
	res=op1*op2
}
else if(op=='/'){
	if(op2==0){
		console.log("Cannot divide by zero")
	}
	else{
		res=op1/op2
	}
}
if (res!=999999) {
 	console.log(res)
}