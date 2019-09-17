$(function(){    
    // Load the nav bar make modifications, and insert it into the page header.
    $("header").load(basePath + "/site/nav-bar.html", "", function() {
        
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
        
        // Prepend the base URL to each href unless it's an absolute URL
        $(".navbar-nav a[href]").attr("href", function(i, href) {
            if ((href.startsWith('http') === true) || (href.startsWith('/') === true)) {
                return href;
            }
            return basePath + '/' + href;
        });
        
    });
});