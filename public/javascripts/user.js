console.log("hi")

$(function(){
    console.log("hi")
//    login function. Sends username and password to verification. Server redirects if successful, returns Incorrect message if not.
    $("#join").click( function (evt) {
        console.log(this)
        $.post("/addUser", {name:$("#name")[0].value, email: $('#email')[0].value, locationString:$("#locationString")[0].value, html:$("#html").is(':checked')}, function(data) {
            console.log(data)
            //$("#page").append(data)
        })
    })

    $("#loginjade").keypress(function(e) {
        console.log(this)
        $.post("/addUser", {name:$("#name")[0].value, email: $('#email')[0].value, locationString:$("#locationString")[0].value, html:$("#html").is(':checked')}, function(data) {
            console.log(data)
            //$("#page").append(data)
        })
    });
})