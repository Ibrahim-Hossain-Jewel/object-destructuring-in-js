//object destructuring.
/*Object destructuring is pretty similar to array destructuring in javascript 

*/
//Now making more commonly done an object in javascript.
const myObj = {//using curly brace purpose for object create.
    firstName: 'jewel',
    lastName : 'rana',
    age : 16,
    height: "6ft"
};
//Access to the property using dot notation in general.
//Now perform on it the destructuring assignment expression with the curly bracket.
//const firstN = myObj.firstName;//showing already has declared in the destructuring system.

const {firstName,lastName,age,height} = myObj;
console.log(firstName);
console.log(lastName);
console.log(age,height);
//object destructured computed in js.

//Object destructuring with a undefined variable.
let var1,var2;

const myobj2 = {
    var1 : 'a',
    var2 : 'b'
};
({var1,var2} = myobj2); 
/*if object property name and destructure variable name is same then use the first brace*/

//Reassign destructure variable on the object
const student = {
    q: 'ibrahim hossain',
    w : 23,
    e : 5+'ft',
    r : '1ft'
}
//Now destructuring the properties with new destructuring name for super descriptive 
const {q:sname,w:sage,e:sheight,r} = student;//Assign new variable for super descriptive here, sname is new name along with sage is new identifier sheight also a new identifier but  here w and r is default destrcturing extract value
