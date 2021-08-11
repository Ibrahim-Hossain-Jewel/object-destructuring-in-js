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
    const {sname = null,sage,sheight} = obj;
    if(!sname){
        console.log('error no username entered >:(');
        return;
    }
    else{
        console.log(`student name is ${sname} studnet age is ${sage} student height is ${sheight}`);
    }
    
}
const member1 = {sname: 'ibrahim hossain jewel', sage: 23, sheight: "5ft"};
const member2 = {sage: 12, sheight: 8};


//filter an object data using function
function sayIfValid({prop,a111}) {//object filtered by argument object
    //construct another object by the object argument properties.
    const internalObj = {
        prop,
        a111,
        constructed: true
    }
    return internalObj;
}
const myobj6 = {
    prop : 'I am valid',
    proop : 'I am not valid',
    a111 : 'I am also not valid'
}

const myConstructedObj = sayIfValid(myobj6);//here the sayIfValid() method return an object that's are destructured below.
const {constructed,prop,a111} = myConstructedObj;
console.log(constructed,prop,a111);

//destructuring object array object 
const myobj7 = {
    title: 'my address book',
    entries : [
        {
            name: 'bob',
            number: '222-22222',
            address: '123 Fake St',
            //now make nested rarray object
            others : {
                wifeName : 'jorina',
                wifeWeight: 60+'kg'
            }
        },
        {
            name: 'jewel',
            number: '111-22222',
            address: '111 fake St',
            others : {
                wifeName : 'jorina',
                wifeWeight: 60+'kg'
            }
        },
        {
            name: 'ibrahim hossain',
            number: '111-33344',
            address: '123-fake st',
            others : {
                wifeName : 'jorina',
                wifeWeight: 60+'kg'
            }
        }
    ], //Entry is totally iterator
    myPhone: '555-1111'
};
//Destructuring myobj7.
const {title,entries:[{},{},{name:mo}],entries} = myobj7; 
//if you destructured once then use can't be used while you dose't declare one more time.
console.log(mo);
//destructuring through loop with the array properties.
//you can destructuring inside forof location
for (const {name:nn,number:pn,address:addr, others:{wifeName,wifeWeight}} of entries) {
    console.log(`name is ${nn} phone number is ${pn} and address is ${addr} wife name is ${wifeName} and wife weight is ${wifeWeight}`);
    //the wifeweight is bounded inside for loop.
}
