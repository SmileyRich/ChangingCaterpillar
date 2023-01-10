$(function() {  
    $('#restore').hide();
    $("#transform").on('click', function() {
        $("h1").text("The Butterfly");
        $("p").html("This is a <strong>butterfly</strong> in its natural habitat:");
        $("img").attr("src", "https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png", width="400");
        var newUL = $("<ul>");
        $("ul").insertAfter($("a"));
        
        
        newUL.append("<li>Butterflies are insects from the order Lepidoptera, which also includes moths.</li>");
        newUL.append("<li>Butterfly fossils date to the Paleocene, about 56 million years ago.</li>");
        newUL.append("<li>Butterflies use their antennae to sense the air for wind and scents.</li>");
        newUL.append("<li>Butterflies have appeared in art from 3500 years ago in ancient Egypt.</li>");
        $("main").append(newUL);
        
        $("a").attr("href", "https://en.wikipedia.org/wiki/Butterfly");
        $("a").text("Butterfly");
        newUL.addClass("result");
        $("#p1").addClass("butterfly");
        $("#restore").insertAfter($("ul"));
        
        

    $('#restore').show();
    $("#transform").hide();
    });

    $("#restore").on('click', function() {
        location.reload(true); 
    }); 

});