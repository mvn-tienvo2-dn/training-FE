// 1. Define a variable
const MAX_SIZE=25 * 1024 * 1024;
let title = "Hello World";
title = 'Hello ES6';
// Let có thể thay đổi giá trị trước đó bằng một giá trị mới.
// Còn Const thì chỉ giữ nguyên giá trị ban đầu không thể thay đổi
// 2. String Interpolation

let user = {name:'David'};
let card = { amount: 7, product: "Bar", unitprice: 42 };
let message = `
  Hello ${user.name} ,
  want to buy ${card.amount} ${card.product} for
  a total of ${(card.amount * card.unitprice)} bucks?`;
// 3. Rest Parameter
function foo (x, y, ...a) {
    return (x + y) * a.length
}
foo(1, 2, 'hello', true, 7) === 9;

// 4. Default Parameter Values
function sum(x, y=7, z=42) {
    return x + y + z;
  };
// 5. Arrow Functions
var evens = [1, 2, 3, 4, 5, 6];
  var odds  = evens.map(v => v + 1);
  var pairs = evens.map(v => ({even: v, odd: v + 1 }));
  var nums  = evens.map((v, i) =>  v + i);
  var fives = [];
  nums.forEach(v => {
    if (v % 5 === 0) {
      fives.push(v);
    }
  });
//6. Classes
class Shape {
	constructor(id, x, y) {
		this.id = id;
		this.move(x, y);
	}

	move(x, y) {
		this.x = x;
		this.y = y;
	}
}
// 7.Modules
let Utils = {
   sum:function(x,y){
      return x+y ;
   },
   pi:3.141593
}
export default Utils;
import Utils from 'lib/utils.js';
let math = Utils;
console.log("2π = " + math.sum(math.pi, math.pi));
import Utils from 'lib/utils.js';
let {sum,pi}=Utils;
console.log('2π = ' + sum(pi, pi));
// 8. Promise
function showMessAfterTimeout (msg, who, timeout) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
	})
}
showMessAfterTimeout('', 'Foo', 100, function(msg) {
	showMessAfterTimeout(msg, 'Bar', 200, function(msg) {
		console.log('Finish after 300ms:' + msg);
	});
});
//9. Loops
let arr =[1,2,3,4,5,6,7];
for (i of arr) {
	console.log(i);//1,2,3,4,5,6,7
}
arr.findIndex(check);//return 5
function check(arr) {
  return arr > 5;
}
