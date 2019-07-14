var APP_EMGINE_API_URL = "http://shecode1.appspot.com/update";

$(document).ready(function(){
    $.get(APP_EMGINE_API_URL, function(result) {
        console.log(1);
        console.log(result);
        document.getElementById("view-count").innerHTML = result.data;
    })
});