$(function(){    
    // Assuming the nav bar is in the parent directory, 
    // load it, make modifications, and
    // insert it into the page header.
    $("header").load("../site/nav-bar.html", "", function() {
        
        // Attempt to set the "active" class on the currently selected item.
        // This toggles the menu item's background color.
        // It is looking for a part of the URL that matches a non-empty href string
        // of a menu item.  If a match is found, that item is considered active.
        var thishref = $(location).attr('href');
        var tokens = thishref.split("/");
        $(".navbar-nav a[href]").each(function(){
            $(this).parent().removeClass('active');
            var href = $(this).attr('href');
            if ((href !== '') && ($.inArray(href,tokens) > 0)) {
                $(this).parent().addClass('active');
            }           
        });
        
        // Prepend '../' to each href unless the href starts with http or /.
        $(".navbar-nav a[href]").attr("href", function(i, href) {
            if ((href.startsWith('http') === true) || (href.startsWith('/') === true)) {
                return href;
            }
            return "../" + href;
        });
        
    });
});