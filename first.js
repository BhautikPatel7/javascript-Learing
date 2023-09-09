var a = 10;
document.write(a);
console.log(a);
alert("hello");
alert("Hello! Are you Intrested to learning Java Script" +" " +10)
confirm("Are you intrested")
console.log("log is working")
prompt("I Am Starting","yes");
document.write("<h1>hello charms</h1>");
document.write("hello")
prompt("plese enter a name","my name");
confirm("do you want to login")
var x = document.getElementById("hy").innerHTML = "<h1> Have you Heard about Java Script</h1>";
console.log(x);
var x = document.getElementsByClassName("first")[0].innerHTML = "Hello Everyone";
alert(x);
var x = document.getElementsByClassName("first")[1].innerHTML = "Intresting langauge";
alert(x);
var x = 10;
var y = 30;
var z = x+y;
alert(z);
document.getElementById("res").innerHTML = z;
if (x == y) {
    alert("Its same value");
    document.getElementById("res").innerHTML = "Its value Is matching"
}
else{
    alert("you should amke the same value");
    document.getElementById("res").innerHTML = "Plese Make The value of x and Y same"
}
var z = x>y?"No":"Yes"
document.getElementById("res").innerHTML = z;
function add( x,Y) {
    x = prompt("enter a number");
    Y= prompt("enter a second num");
    document.write(x+Y);
}
add();
function greet(x){
    x = document.getElementById("name").value;
    document.write("hello"+x)
}
    
function cal(){
    var x = document.getElementById("firsttxt").value;
    var y = document.getElementById("secondtxt").value;
    
    // alert(x);
    // alert(y);
    var ope = document.getElementById("ope").value;
    //0alert(ope);
    if (ope == '+') {
        var res = parseInt(x)+parseInt(y);
    }
    if (ope == '-') {
        var res = parseInt(x)-parseInt(y);
    }
    if (ope == '*') {
        var res = parseInt(x)*parseInt(y);
    }
    if (ope == '/') {
        var res = parseInt(x)/parseInt(y);
    }
   // alert(res);
    document.getElementById("cal").value = res;
}

var resilt = prompt("enter your name");
document.write(resilt);

var house = [1,2,3,4,5,6,7];
var hh = new Array();

car[4] = 50;
document.write(house[4]);

for (var index =0; index< 10; index++) {
    document.writeln(index + "<br>")
   // const element = arvar[index];
    
}
var car = [1,2,3,4,5,6,7,8,9];
car.forEach(ffr);
function ffr(iteam,index,array){
    document.write(iteam+"<br>");
}