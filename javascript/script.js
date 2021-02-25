// console.log("i am sidherth sid");
// console.log("second line");
// document.write("i am sidherth sid");
// var x;
// x = prompt("enter your name");
// console.log(x);
// document.write(x);
// console.log(x)

// var c;
// var f;
// c = prompt("enter your number");
// f = 9 / 5 * c + 32;
// alert("farenhite  " + f + "  degree");

// console.log("task complete");

// console.log(`first line 
// second line`);
// let name = "sidhu"
// let age = "23"
// let country = "Bangladesh"
// console.log(`My name is ${name}
// I'm ${age} years old
// The name of my country is ${country}`)




// var a = 20;
// var b = 30;
// if (a > b) {
//     console.log("executed");
// } else {
//     console.log("not executed");
// }



// var a = prompt();

// if (a <= 18) {
//     console.log("Teen age");
// } else if (a > 18 && a <= 40) {
//     console.log("mature");
// } else { console.log("old"); }



// largest nmbr 
//   

// normal solution

// if (n1 > n2 && n1 > n3) {
//     console.log("n1 is largest nmbr");
// } else if (n2 > n1 && n2 > n3) {
//     console.log("n2 is largest")
// } else {
//     console.log("n3 is largest")
// }


// nested solution
// if (n1 > n2) {
//     if (n1 > n3) {
//         console.log("n1 is largest");
//     } else {
//         console.log("n3 is the largest")
//     }
// } else {
//     if (n2 > n3) {
//         console.log("n2 is largest");
//     } else {
//         console.log("n3 is largest");
//     }
// }


// switch case

// console.log(`select your option
// a. option 1
// b. option 2
// c. option 3`);
// choice = prompt("choose your option");
// var text;

// switch (choice) {
//     case "a":
//         text = "option 1"
//         break;
//     case "b":
//         text = "option 2"
//         break;
//     case "c":
//         text = "option 3"
//         break;
//     default:
//         text = "no option selected"
//         break;

// }
// console.log(text);



// gadding

// var a = prompt("enter your nmbr");
// a = parseFloat(a);

// if (a >= 1 && a < 40) {
//     console.log(" fail");
// } else if (a >= 40 && a < 50) {
//     console.log("d");
// } else if (a >= 50 && a < 60) {
//     console.log("c");
// } else if (a >= 60 && a < 70) {
//     console.log("b");
// } else if (a >= 70 && a < 80) {
//     console.log("a");
// } else if (a >= 80 && a <= 100) {
//     console.log("a+");
// } else {
//     console.log(" Invalid Input");
// }


// math solution
// console.log(" your option:  \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Modulas");

// var a = prompt("Enter Firtst Number ");
// a = parseInt(a);
// var b = prompt("Enter Second number");
// b = parseInt(b);
// var c = prompt("Select your Option");
// c = parseInt(c);

// var d;
// d = parseFloat(d);
// switch (c) {
//     case 1:
//         d = a + b;
//         break;
//     case 2:
//         d = a - b;
//         break;
//     case 3:
//         d = a * b;
//         break;
//     case 4:
//         d = a / b;
//         break;
//     case 5:
//         d = a % b;
//         break;
//     default:
//         d = "Invalid Input"
//         break;

// }
// console.log(d);





// for in for of
// let name = " mridul baral sidhu";
// let food = ["cake", "chocolate", "ice cream"]
// let person = {
//     name: "sidhu",
//     profession: "student",
//     age: "23"
// }

// for (var i in person) {
//     console.log(`property : ${i}
//     value: ${person[i]}`);
// }



// var n = prompt("number if terms")
// n = parseInt(n);
// var sum = 0;
// var series = "";

// for (var i = 1; i <= n; i++) {
//     sum = sum + i * i;
//     series += (i ** 2).toString();
//     if (i == n) { continue; }
//     series = series + " + "
// }
// console.log(`${series} = ${sum}`);




// function


// function myfunction() {
//     console.log("hello world");
//     console.log("sidhu")
// }
// myfunction();
// myfunction();


// function parameter


// function myfunction(firstname, lastname) {
//     console.log(`My name is ${firstname}${lastname}`);
// }
// var i = "sidherth "
// var j = "sid"

// myfunction(i, j);



// function myfunction(a, b) {
//     return a + b;
// }

// var i = parseInt(prompt("first"));
// var j = parseInt(prompt("second"));

// console.log(myfunction(i, j));


// function return

// function myfunction(a, b) {
//     console.log(`${a} +  ${b} = ${a+b}`);
//     return a + b;
// }

// var i = parseInt(prompt("first"));
// var j = parseInt(prompt("second"));

// var sum = myfunction(i, j)
// console.log(sum);





//   array iteration usuing forEach

// var foods = ["cake", "chocolate", "ice cream"];
// var number = [1, 2, 3, 4, 5];

// foods.forEach(function(x, y, z) {
//     console.log(`item: ${x} ; index: ${y} ; full array ${z}`);

// })




// array iteration usuing mapping


// var foods = ["cake", "chocolate", "ice cream"];
// var number = [1, 2, 3, 4, 5];

// function addSomething(item) {
//     return `${item} is a food`

// }

// var res = foods.map(addSomething);
// console.log(res);


// var z = number.map(function(x) {
//     return x * x;
// })
// console.log(z)




// object method

// let person = {
//     Firstname: "Sidherth",
//     Lastname: "Sid",
//     dob: "11-5-1998",
//     fullname: function() {
//         return `${this.Firstname} ${this.Lastname}`
//     }
// }
// console.log(person.Firstname);
// console.log(person.fullname());
// let str = "Sidher sid"

// console.log(str.length);
// console.log(str.split());
// console.log(str.slice());



// math object 

// let val;

// val = Math.PI;
// val = Math.E;



// console.log(val);


// date object 
// let val;
// let today = new Date();
// console.log(today);


// var click = 0;

// function abc() {

//     click += 1;
//     if (click % 2 == 1) {
//         m = "India";
//     } else {
//         m = "Bangladesh";
//     }



//     var x = document.getElementById("root");
//     x.innerHTML = m;
// }





// dom 
// let val;

// val = this;
// val = window;
// val = window.document;
// console.log(val);

// links = document.links;
// let arr = Array.from(links);
// arr.forEach(function(link) {
//     console.log(link);
// });






// dom selector 
// document.getElementById() 
//  gettiing element 
// let val;
// val = document.getElementById('document-title');
// val = document.getElementById('document-title').id;
// val = document.getElementById('document-title').className;

// changing style
// document.getElementById('document-title').style.background = '#333';
// document.getElementById('document-title').style.color = 'white'
// document.getElementById('document-title').style.padding = '30px'
// document.getElementById('document-title').style.display = 'block';


// changing content 
// document.getElementById('document-title').textContent = 'New Title';
// document.getElementById('document-title').innerText = ' Abar notun Title'
// document.getElementById('document-title').innerHTML = '<i> sidherth sid <\i>'

// let val = document.getElementById('document-title');
// val.innerText = 'Mridul Baral';
// val.innerHTML = "<i> Sidherth sid<\i>"


// queryselector 

// val = document.querySelector('ol li');
// val.style.background = 'blue'
// val.style.color = 'white'

// val = document.querySelector('li:nth-child(3)');
// val.style.background = 'red';
// val.style.color = 'white'
// val.style.fontWeight = 'bold'
// console.log(val);




// Multiselector
// document.getElementsByClassName 


// let val = document.getElementsByClassName('sample-class');

// val[0].style.background = 'red';
// val[0].style.color = 'white  '
// val[0].style.padding = '30px'
// val[0].textContent = 'Hello World'
// console.log(val[0]);


// document.getElementsByTagName()

// let list = document.getElementsByTagName('li');
// console.log(list[7]);

// let list = document.querySelector('ol').getElementsByTagName('li');

// let lis = Array.from(list);
// lis.forEach(function(last) {
//     console.log(last)
// })
// console.log(list);


// document.querySelectorAll()
//ID ->#
//CLASS -> .
//tagname -> nothing

// let list = document.querySelectorAll('ol li');

// list.forEach(function(list) {
//     console.log(list)
// })
// console.log(list)

// let listeven = document.querySelectorAll('li:nth-child(even)');
// listeven.forEach(function(even) {
//     even.style.background = "red"
// })

// let listodd = document.querySelectorAll('li:nth-child(odd)');
// listodd.forEach(function(odd) {
//     odd.style.background = "gray";
//     odd.style.color = 'white'

// })



// add element to Dom 
// let olitem = document.createElement('li');

// add class or id 
// olitem.className = "class name"
// olitem.id = "new id";

// add attribute 
// olitem.setAttribute('attributename', 'attibute-value');

// olitem.appendChild(document.createTextNode('javascript'));
// document.querySelector('ol').appendChild(olitem);
// console.log(olitem);


// same as above 

// let olitem2 = document.createElement('li');

// olitem2.className = 'classname2';
// olitem2.id = "id2"
// olitem2.setAttribute('attribute-title2', 'attribute-value2');
// olitem2.appendChild(document.createTextNode("C++"));
// document.querySelector('ol').appendChild(olitem2)
// console.log(olitem2);



// order list and link add

// let ulitem = document.createElement('li');
// let link = document.createElement('a');

// link.appendChild(document.createTextNode('Instagram'));
// link.setAttribute('href', 'https://www.instagram.com/ ');

// ulitem.appendChild(link);
// console.log(ulitem);
// document.querySelector('ul').appendChild(ulitem); 





//replacing element
// let newHeading = document.createElement('h1');
// newHeading.appendChild(document.createTextNode('Sidherth Sid'));

// newHeading.className = 'sample-class'

// let oldHeading = document.querySelector('h3');

// let parent = document.querySelector(".container")
// parent = oldHeading.parentElement;

// parent.replaceChild(newHeading, oldHeading);
// let val = document.getElementsByTagName('h1');
// val[0].style.background = 'red'
// val[0].style.color = 'white'

// let val = document.querySelectorAll(' li:nth-child(odd)')
// val.forEach(function(change) {
//     change.style.background = 'red';
// })

// console.log(val)
// console.log(newHeading);
// console.log(oldHeading);




//Remove Element
// let listItems = document.querySelectorAll(' li');
// listItems[3].style.background = 'red'
// let list = document.querySelector('ul');
// listItems[0].remove()
// list.removeChild(listItems[5]);

// list.classList.add('sexy');
// list.classList.add('sidhu');
// list.classList.remove('sexy');

// let val = list.hasAttribute('class');
// list.setAttribute('title', 'New Title')
// list.removeAttribute('title')


// console.log(val)
// console.log(list);
// console.log(listItems);




// Event of Javascript 

// function message() {
//     console.log('hello mouseover button')

// }

// document.getElementById('mybtn').style.color = 'red';
// document.getElementById('mybtn').style.background = 'black'
// document.getElementById('mybtn').style.transition = '.5s';

// document.getElementById('mybtn').addEventListener('mouseover', message)

// function message(e) {
//     document.getElementById('mybtn').style.color = 'white';
//     document.getElementById('mybtn').style.background = 'gray'
//     document.getElementById('mybtn').style.transition = '.5s';

//     let val = e;
//     val = e.target;
//     val = e.target.id;
//     val = e.timeStamp;
//     val = e.type;
//     console.log(val)

//     // console.log("Clicked")
// }

// document.querySelector('.container').addEventListener('mousemove', message)

// document.querySelector('.container').style.background = "red";

// function message(e) {
//     let val = e;
//     val = e.offsetX;
//     val = e.offsetY;
//     val = this;
//     this.style.background = `#${e.offsetX}`;



//     console.log(e.offsetX);
//     console.log(e.offsetY)
//     console.log(this);

// }


// event on form

// document.querySelector('#name').addEventListener('focus', test);

// document.querySelector('#name').addEventListener('keyup', test2)

// function test(e) {

//     this.style.background = 'skyblue'
//     console.log('Focused');
// }

// function test2() {

//     // console.log(this.value);
//     document.getElementById('sidhu').innerText = this.value;
// }





// REgular Expression 


// let re;
// let str;

// re = /hello/i; // i= case insensitive
// str = "HEllo World"

// //exec()  function - return array or null
// let result = re.exec(str);
// console.log(result);


// //test() function - return true or false
// result = re.test(str);
// console.log(result);


// // match function---  return array or null bt difference 
// //match function -- regular expresstion is in the function

// result = str.match(re);
// console.log(result);


// //search function
// result = str.search(re);
// console.log(result);


// //repalce function()

// let newstr = str.replace(re, "Sidhu");
// console.log(newstr)






// regular expression--- LIteral and meta charecters

// Literal charecters


// let re;
// let str;
// re = /hello/;
// re = /hello/i; //it is called Literal charecters
// str = "Hello World"




// console.log(re.exec(str));
// retest(re, str);

// function retest(re, str) {
//     if (re.exec(str)) {
//         console.log(`'${str}'  matches ' ${re.source}'`)
//         alert(`'${str}'  matches ' ${re.source}'`);
//         document.write(`'${str}'  matches ' ${re.source}'`)
//     } else {
//         console.log(`'${str}' Doesn't match '${re.source}'`)
//     }
// }





//meta charecter 
//^ must start with
//$ must end with


// let re;
// let str;
// re = /^hello/; //must start with hello
// re = /hello$/; // must ends with hello
// re = /^hello$/; // must start and ends with hello
// re = /h.llo/; //matches any one charecter int the str
// re = /h*llo/; //0 or more chrecters accepted in the str
// re = /he?llo/; // optional. it doesn't if there is no e in str{hllo(accepted)} bt it cant be nothing but e {hollo(does not accepted})
// re = /he?a?llo/;
// re = /hello\?/; // escaping;
// str = " hello hello"


// console.log(re.exec(str));
// retest(re, str);

// function retest(re, str) {
//     if (re.exec(str)) {
//         console.log(`'${str}'  matches ' ${re.source}'`)
//         alert(`'${str}'  matches ' ${re.source}'`);
//         document.write(`'${str}'  matches ' ${re.source}'`)
//     } else {
//         console.log(`'${str}' Doesn't match '${re.source}'`)
//     }
// }



//bangladeshsi phonenumber

// try {

//     let re = /^01[0-9]{9}$/;
//     re = /^\+8801[0-9]{9}$/;

//     let str = "01792113554"
//     str = "+8801792113554"

//     console.log(re.exec(str));
//     retest(re, str);

//     function retest(re, str) {
//         if (re.exec(str)) {
//             console.log(`'${str}'  matches ' ${re.source}'`)
//             alert(`'${str}'  matches ' ${re.source}'`);
//             document.write(`'${str}'  matches ' ${re.source}'`)
//         } else {
//             console.log(`'${str}' Doesn't match '${re.source}'`)
//         }
//     }

//     // if (str.exec(re)) {
//     //     document.write(" code has run")
//     // } else {
//     //     document.write("Doesn't Run")
//     // }
// } catch (error) {
//     console.log(error.type)
// }




// // Examples
// try {

//     let re;
//     let str;

//     //postal code

//     re = /^[0-9]{4}/;
//     str = "4444";
//     console.log(re.test(str));


//     //phone number
//     //01792113554,+8801792113554,8801792113554

//     re = /^(\+)?(88)?01[0-9]{9}$/

//     str = "01792113554";
//     str = "8801792113554"
//     str = "+8801792113554"
//     console.log(re.test(str));

//     // email address
//     //mridul15-1845@diu.edu.bd


//     //re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;

//     re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;




//     str = "mridul15-1845@diu.edu.bd"
//     console.log(re.test(str));

//     retest(re, str);

//     function retest(a, b) {
//         if (a.exec(b)) {
//             console.log(`'${b}'  matches ' ${a.source}'`)
//             document.write(`'${b}'  matches ' ${a.source}'`)
//             alert(`'${b}'  matches ' ${a.source}'`);

//         } else {
//             console.log(`'${b}' Doesn't match '${a.source}'`)
//         }
//     }





// } catch (error) {
//     console.log(error.type);
//     console.log(error.name);
// }






// // JSON

// //js object
// var student = {
//     name: "Sidhu",
//     age: 23,
//     hometown: "Khulna"
// };


// //JSON format
// // var student_JSON = {
// //     "name" :"Rahim",
// //     "age" :26,
// //     "hometown" : "Khulna"


// // }


// //js object convert into JSON format
// var student_Json = JSON.stringify(student);
// console.log(student_Json);

// //JSON convert into JS format 
// var student_new = JSON.parse(student_Json);
// console.log(student_new);


// // json datatype 

// //SCreenshot in pc




// usuing External JSON

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        //console.log(data);
        jsonData(data);
    }

};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsonData(json_obj) {

    // console.log(json_obj);
    var js_obj;
    js_obj = JSON.parse(json_obj);
    // console.log(js_obj );
    for (x in js_obj.persons) {
        //console.log(x);

        var persons = js_obj.persons;
        //console.log(persons[x]);
        for (y in persons[x]) {
            console.log(persons[x][y]);
        }
    }

}