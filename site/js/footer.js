$(function(){    
    // Assuming the footer is in the parent directory, 
    // load it, modify img src, prepending "../", and
    // insert into the page footer.
    $("footer").load("../site/footer.html", "", function() {
        $("footer img").attr("src", function(i, href){
            return "../" + href;
        });
    });
});    


