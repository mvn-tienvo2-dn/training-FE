//### Knowledge round-up
var x =1;
var y= '1';
if(x==y){
	console.log(true);
}
else{
	console.log(false);
}
if(x===y){
	console.log(true);
}
else{
	console.log(false);
}
var arr=[1,2,3,4,5,6,7];
var arr1 =arr.map(ar=>{
	ar+=1;
	return ar;
});
console.log('arr1:',arr1);
var arr2=arr.filter(ar=>{
  return ar>=5;
});
console.log('arr2:',arr2);
var total=arr.reduce((total,ar)=>{
  return total+ar;
});
console.log(total);
var arr3 =arr.find(ar=>ar>5);
console.log(arr3);
var arr4=arr.some(ar=>ar>0);
console.log(arr4);
arr.push(8);
console.log("Add element 8 at the end: ",arr);
arr.unshift(0);
console.log("Add element 0 at the begin: ",arr);
arr.splice(8);
console.log("remove element 8 : ",arr);
//### Playground
//1. Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.
function SumofTwoNum(a,b){
	if(a===b){
   return (a+b)*3;
	}
	else{
		return a+b;
	}
}
console.log("Sum of Two Numbers: ",SumofTwoNum(2,2));
//2. Write a JavaScript program to compute the absolute difference between a specified number and 19.
// Returns triple their absolute difference if the specified number is greater than 19.
function Diff(a){
	if(a<=19){
		return 19-a;
	}
	else{
		return Math.abs(19-a)*3;
	}
}
console.log("compute the absolute difference between a specified number and 19: ",Diff(21));
//3. A masked number is a string that consists of digits and one asterisk (*) 
//that should be replaced by exactly one digit.
// Given a masked number find all the possible options to replace the asterisk
// with a digit to produce an integer divisible by 3.
function MarkedNum3(a){
	var result=[];
	var anew=null;
	for (var i =0; i <10; i++){
		anew=a.replace("*",i);
		if(anew%3===0){
			result.push(anew);
		}
 	}
 	return result;
}
console.log('Number divisible by 3 :',MarkedNum3('1234567890*'));
//4. A masked number is a string that consists of digits and one asterisk (*) 
//that should be replaced by exactly one digit.
// Given a masked number find all the possible options to replace the asterisk
// with a digit to produce an integer divisible by 6.
function MarkedNum6(a){
	var result=[];
	var anew=null;
	for (var i =0; i <10; i++){
		anew=a.replace("*",i);
		if(anew%6===0){
			result.push(anew);
		}
 	}
 	return result;
}
console.log('Number divisible by 6 :',MarkedNum6('1*6'));
