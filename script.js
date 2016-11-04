var content_js = document.getElementById("content_js");

var array = [];

array.push("this is a string");
array.push(123); //integer
array.push(45.98); //float
array.push(true); //boolean
array.push(1 + 2); //operation

var my_variable = {"cle 1" : 87, "cle 2" : "thing"};

array.push(my_variable);

array.unshift("another string <br/>");

var content;
for (var i = 0; i < array.length; i++) {
    if (typeof(array[i]) == "object") {
        content_js.innerHTML += Object.keys(array[i]) + "<br />";
        
        for(var thing in array[i]) { 
            content_js.innerHTML += " La cle: " + thing + " et sa valeur est " + array[i][thing] + "<br />";
        }
    } else {
        content_js.innerHTML += array[i] + "<hr />";
    }
}

var while_go = true;
var increment = 0;
var stop = Math.round(Math.random() * 100);

while (while_go) {
    increment++;
    if(increment == stop) {
        while_go = false;
    }
}

content_js.innerHTML += "<hr/> La boucle while a fait " + increment + " tours! <hr/>";

/* Testing conditions
alert(true || false); //true
alert(true || true); //true
alert(false || false); //false
 
alert(true && false); //false
alert(true && true); //true
alert(false && false); //false
*/
