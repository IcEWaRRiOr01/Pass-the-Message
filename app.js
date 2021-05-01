document.querySelector("form").addEventListener("invalid", function( event ) {
    event.preventDefault();
}, true );


document.getElementById("submit").addEventListener("click", function() {
    if(document.getElementById("input").value == "") {
    document.getElementById("error").style.display = "block";
} else {
    document.getElementById("messageContent").innerHTML = document.getElementById("input").value;
    document.getElementById("error").style.display = "none";
}
});