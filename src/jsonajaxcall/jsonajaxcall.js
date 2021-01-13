
var jsonP = {
    name: "Asif",
    email: "akdfj@gmail.com",
    age: "30",
    skils: ["JS, Java, HTML, CSS"]
}
var resP = JSON.stringify(json); //to make the object (as string) as JSON data format
//console.log(res); // thats the thing backend dev sends to you

var json = {
    "name": "Asif",
    "email": "akdfj@gmail.com",
    "age": "30",
    "skils": ["JS, Java, HTML, CSS"]
}
var received = JSON.parse(res);
console.log(received); //check the cosole to see string has become JS object
//parsing the recived string. if you want to use the res, you first need to parse it, So it will become an object so that you can manipulate it like obj.

//******Adding recieved data to DOM********
var btnSnd = document.getElementById("snd");
var ul = document.getElementById("list");
//console.log(ul);
btnSnd.addEventListener("click",function(){
    var ajaxCall = new XMLHttpRequest(); 
    // creating new obj. For each ajax call, a new xmlhttp request must be created. 
    //console.log(ajaxCall); 
    //consoling new object ajaxcall and see the object capabilities e.g., properties/method to use.
    ajaxCall.onreadystatechange = function(){
    if(this.readyState === 4){
    //console.log(this.readyState); */
        var res = JSON.parse(this.responseText);
        //The read-only XMLHttpRequest property responseText returns the text received from a server following a request being sent.
        res.forEach(function(e) {
            //console.log(e);
            var li = document.createElement("li");
            li.innerText = e.text;
            //console.log(li);
            ul.append(li);
        })
    }
}
ajaxCall.open("GET", "https://type.fit/api/quotes"); 
//requesting some data from api that returns random quotes
//HTTP methods e.g., GET, POST(faster), (secured dand slower, user to send larg amount of data)
ajaxCall.send(); //final step to send the call
})

/* ***onreadystatechange 
special property of xmlhttpreq object that source the function where we process the resposne 
from server */

/* ***this.readyState
While handling an asynchronous request, the value of responseText always has the current content received from the server, 
even if it's incomplete because the data has not been completely received yet.
You know the entire content has been received when the value of readyState becomes XMLHttpRequest.DONE (4), and status 
becomes 200 ("OK").
console.log(this.readyState); */

