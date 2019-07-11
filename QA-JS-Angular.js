// TASKS FROM HUAWEI Interv. 2019 (FE DEV)

// TRUE or FALSE
/* 1 TRUE +
var foo = function foo() {
  console.log(foo === foo);
};
foo();
*/

/* 2 TRUE -
//console.log(Number(1) - 1 == 0);
if (Number(1) - 1 == 0) {
  console.log(true);
} else {
  console.log(false);
}
*/
// 3 AngularJS expression behave in same way as ng-bind directives? (false)?
/* 4  FALSE + 
console.log(true + false > 2 + true); */

/* 5 In AngularJS Using factory method, we first define a factory and then assign method to it ?  (true)?*/
/* 6  FALSE - 
function f() {
  return f;
}
console.log(new f() instanceof f); */

//SINGLE-CHOICE
/* 7 typeof?  FUNCTION +
function bar() {
  return foo;
  foo = 10;
  function foo() {}
  var foo = 11;
}
console.log(typeof bar()); */

/* 8  typeof?  Undefined -
var y = 1,
  x = (y = typeof x);
x;
console.log(x);
console.log(y); */

/* 9 typeof? String -
var x = [typeof x, typeof y][1];
console.log(typeof typeof x); */
/* 10 what is a value of f?  Number, 2 -
f = (function f() {
  return 1;
},
function g() {
  return 2;
})();
typeof f;
console.log(f); */

/* 11 Which of the following is defined by the ECMA specification?  (DataMethod?) ??? */
/* 12  typeof? ERROR - 
var f = function g() {
  return 23;
};
typeof g(); */

/* 13  Error + 
function f(f){return typeof f();})(function (){return 1;}); */

/* 14  1undefined - 
var x = 1;
if (function f() {}) {
  x += typeof f;
}
x;
console.log(x); */

/* 15 TRUE + 
var foo = function foo() {
  console.log(foo === foo);
};
foo(); */

/* 16 which character in JS code will be interpreted as XML markup? (&) +
If your JavaScript code contains the < or & characters, these characters are interpreted as XML markup.*/

/* 17 What will be done if more than one page requires a file of js code?  
- downloads that many time
- retrieved from the browser
- must be re executed
- none of the mentioned */

/* 18 What is the central concept of JS memory managment?  Reachability! -
-Reliability        -Reachability       -Efficiency     -Transparency 
-Надійність     -Доступність            -Ефективність   -Прозорість */

/* 19  TypeError + 
console.log([] + [] + foo.split()); */

/* 20  What is the output of the following code? with (function (x, undefined){})length  ???   Error ??  */

/* 21 In what way is the closure compiler efficiency ?
-Increases the size of the js files
-reducers the size of the js files
-reducers the execution time            -
-reducer the speed 
ANSWER: 
Answer: b
Explanation: The Closure Compiler is a tool for making JavaScript download and run faster. 
The Closure Compiler reduces the size of your JavaScript files and makes them more efficient, 
helping your application to load faster and reducing your bandwidth needs.  */

/* 22 What is the lifetime of the data stored through local Storage ?
a.permanent
b.temporary
c.both a and b at times
d.cannot store

a.permanent
Explanation: Data stored through localStorage is permanent. it does not expire and remains stored on the user’s computer 
until a web app deletes it or the user asks the browser (through some browser-specific UI) to delete it. This data is stored on the 
client side server and is used for faster access of data. */

/* 23 Identify the process done in the below code snippet ... 
o = { x: 1, y: { z: [false, null] } };
s = JSON.stringify(o);
p = JSON.parse(s); 

    a. object encapsulation
    b. object Serialization
    c. object abstraction
    d. object encoding  
 
    'b. object Serialization ' > Object serialization is the process of converting an object’s state to a string from which it can later be restored.
    */

/* 24 One of the main advantage of using src attribute is
A. It becomes self-cached
B. It makes the HTML file modular
C. It restricts manipulation in the HTML file
D. It simplifies the HTML files
ANSWER: Solution(By Examveda Team)
The main advantage of using the src attribute is that it simplifies your HTML files by allowing you to remove large blocks of JavaScript
code from them—that is, it helps keep content and behavior separate. */

/* 25 which api allows scripts in a document from one server to exchange messages with scripts?
a. cross-document messaging API
b. web application API
c. both a and b
d. none of this */

/* 26 The basic purpose of the toLocaleString() is to ?
a) return a localised object representation
b) return a parsed string
c) return a local time in the string format
d) return a localized string representation of the object  

ANSWER:  Answer: d
Explanation: .toLocaleString is a predefined function in javascript which is used to return a localized string representation 
of the object. For example the date.toLocaleString() is an inbuilt function in JavaScript which is used to convert a date and time to a string.*/

/* 27 Why the HTTP redirects significant?  Чому перенаправлення HTTP істотні? 
https://developer.mozilla.org/ru/docs/Web/HTTP/Redirections */

/* 28  ANSWER: 2    -
function f() {
  function f() {
    return 1;
  }
  return f();
  function f() {
    return 2;
  }
}
console.log(f());  */

/* 29 Where does the DNS reply go to in a single HTTP redirect?  +
A. Browser
B. Client
C. Server
D. DNS Server  ANSWER: A  The DNS reply goes to the Browser in a single HTTP redirect.  */

/* 30  ANSWER: 1  +  
function ans(x) {
  delete x;
  return x;
}
console.log(ans(1)); */

/* 31 - 
Which property holds a DataTransfer object that contains information about the data being transferred and the formats in whichh it is available?
A. dataTransfer
B. transferData
C. dataExchange
D. exchangeData
Answer: Option A   The property, dataTransfer, holds a DataTransfer object that contains information about 
the data being transferred and the formats in which it is available.  */

/* 32  ANSWER: Undefined  -
function f(foo) {
  return typeof foo.bar;
}
console.log(f({ foo: { bar: 1 } })); */

/* 33 Obj / array / arguments / undef ??? ANSWER: Object! - 
function x() {
  return typeof arguments;
} 
console.log(x()); */

/* 34 Undef / Obj / Numer / Function  ??????????? 
var foo = {
  bar: function() {
    return this.baz;
  },
  baz: 1
} typeof(f = foo.bar)();  */

//Multiple choice

/* 35 on which of the following types of components can we create a custom directive in angular js ? 
  Custom Directives can be created on any types of components. The following list describes some examples,
  To render bulk html and svg tags based on the scope and additional functionalities, it can be written as a custom directive with scope values as input.
  To create a event listener on the particular element and add some functions based on that event.
  To operate a hidden functionality for a component. Eg: Transform the value of a input tag to Uppercase for display.
  There are lot more examples to add for custom directives. */

/* 36 Which property reports rotation aroundthree different mouse wheel axes?
a) ctrlKey
b) DeltaZ
c) alterY
d) DeltaX  */

/* 37 what is the main difference between localStorage and sessionStorage?

LocalStorage:
Web storage can be viewed simplistically as an improvement on cookies, providing much greater storage capacity. Available size is 5MB which considerably more space to work with than a typical 4KB cookie.
The data is not sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) - reducing the amount of traffic between client and server.
The data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site.
It works on same-origin policy. So, data stored will only be available on the same origin.

Cookies:
We can set the expiration time for each cookie
The 4K limit is for the entire cookie, including name, value, expiry date etc. To support most browsers, keep the name under 4000 bytes, and the overall cookie size under 4093 bytes.
The data is sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) - increasing the amount of traffic between client and server.

sessionStorage:
It is similar to localStorage.
Changes are only available per window (or tab in browsers like Chrome and Firefox). Changes made are saved and available for the current page, as well as future visits to the site on the same window. Once the window is closed, the storage is deleted
The data is available only inside the window/tab in which it was set.
The data is not persistent i.e. it will be lost once the window/tab is closed. Like localStorage, it works on same-origin policy. So, data stored will only be available on the same origin. */

/* 38 In how many modes can the closure compiler be run ?  
a. simple mode
b. advance mode
c. clear mode
b. all of the above 
ANSWER: Explanation: The Closure Compiler is a tool for making JavaScript download and run faster. 
There are totally 2 modes in which the closure compiler can be run namely:
Simple mode
Advanced mode.*/

/* 39 Which of the following are the unnecessary events currently ? ANSWER: A. DOMActivate B. DOMFocusIn C. DOMNodeInserted -
a.DOMActivate
b.DOMFocusIn
c.DOMNodeInserted
d.DOMClearln */

/* 40 What will happen when the data of the jQuery.cache is read from an element?
a) Unique number is retrieved as elem[jQuery.expando]
b) Data is read from jQuery.cache[id]
c) Unique number is retrieved as elem[jQuery.expando] & Data is read from jQuery.cache[id]
d) Data is cleared from jQuery.cache[id]

Answer: c
Explanation: jQuery.cache[id] is used to associate handlers and other data with elements. When the data is read from an element:
The element unique number is retrieved from id = elem[ jQuery.expando].
The data is read from jQuery.cache[id].
*/

/* 41 What is the purpose of destroying the functions and objects?
a) Consume unnecessary CPU cycles
b) Prevent the dropping of reference count to 0
c) Centralize the responsibility to clean up 
d) to reuse 
ANSWE: ALL or a,b,c
Explanation: The primary purpose of a destroy function is to centralize the responsibility for cleaning up anything that the object has done that will:
Prevent its reference count from dropping to 0 (for example, removing problematic event listeners and callbacks and unregistering from any services).
Consume unnecessary CPU cycles, such as intervals or animations.
*/

/* 42 Which two events will have the generated text for key events?
key / char / text / input ?
Explanation: For key events that generate printable characters, key and char will be equal to the generated text. 
Both key and char are onkeypress event which occurs when the user presses a key (on the keyboard). */

/* 43 what is the purpose of the timing property in the window.performance object?
a) Time of navigation event
b) Time of page load event
c) Time of navigation and page load event
d) Time of scrolling

Answer: c
Explanation: Each performance.timing attribute shows the time of a navigation event
(such as when the page was requested) or page load event (such as when the DOM began loading),
 measured in milliseconds. The legacy Performance.timing read-only property returns a PerformanceTiming object containing latency-related performance
 information. */

/* 44 list the ways to communicate between modules of your application using core Angularjs functionality ??
Common ways to communicate between modules of your application using core AngularJS functionality include:
Using services
Using events
By assigning models on $rootScope
Directly between controllers, using $parent, $$childHead, $$nextSibling, etc.
Directly between controllers, using ControllerAs, or other forms of inheritance   */

/* 45 Which of the following is true about ng-init directive?
ANSWER: 
ng-init directive initializes an AngularJS Application data.
ng-init directive is used to put values to the variables to be used in the application. */

/* when the scope is terminated, which 'destroy' events are failed ? */
