$(function(){    
    // Load the footer, modify img src, prepend the base URL, and insert into the page footer.
    $("footer").load(basePath + "/site/footer.html", "", function() {
        $("footer img").attr("src", function(i, href){
            return basePath + "/" + href;
        });
    });
});