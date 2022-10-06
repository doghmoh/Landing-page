$(document).ready(function() {
    var myflag = true;
    $("#poper").click(function() {
        if (myflag == true) {
            $(".navbar-nav").css("left", "0");
            myflag = false;
        } else if (myflag == false) {
            $(".navbar-nav").css("left", "-100%");
            myflag = true;
        }
    })
    $("#footer").load("002/Footer.html")

});