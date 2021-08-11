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
console.log(sname,sage,sheight,sheight);

const myobj4 = {
    uuid : 1212121,
    userName : 'es6 jewel',
    loggedin : new Date()
}
//now destructuring with assign new variable for super descriptive.
const {uuid : userId, userName : name, loggedin: lastLoginDate} = myobj4;
console.log(lastLoginDate.toLocaleString());    

//set default value with object destructuring
const myobj5 = {
    a1 : 12,
    b1 : 13,
    c1 : 14,
    d1 : 15
};
//Now destructure myobj5 with default value
const {a1,b1,c1,d1,e1="this value is absent"} = myobj5;
console.log(e1);
//set default value as function argument.
function stateUser({user = "bob", memberType}) {
    console.log(`username ${user} and memberType is ${memberType}`);
}
//Pass an object to the function as argument in js.
stateUser({user: 'ibrahim hossain', memberType : 'premium'});

function destrucureArgument(obj) {
    const {sname,sage,sheight} = obj;
    console.log(`student name is ${sname} studnet age is ${sage} student height is ${sheight}`);
}
destrucureArgument({sname: 'ibrahim hossain jewel', sage: 23, sheight: "5ft"});
