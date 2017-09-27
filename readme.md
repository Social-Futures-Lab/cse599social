# Simple Course Web Template

This is a simple, clean, responsive template for Allen School course webs.  
You can see what it looks like [here](http://www.cs.washington.edu/lab/simple-courseweb-template).

## Intended Audience

Any Allen School instructor or TA looking for a new course web design.  It is expected that you are comfortable hacking html and a little CSS.  Even though the template uses Javascript, jQuery and Bootstrap, you probably don't need to know very much about those things.

## Features

* Simple, clean, modern design.
* Responsive.  It should behave well on any screen size.
* Createcal integration.  There is a createcal template that should make it easy for createcal users to integrate calendars.
* Header/footer abstraction. Edit header and footer information in one place.  Javascript inserts it into each page.

## Step by Step

# Clone or copy this repo into your course web directory.
# Edit the course title, number, year/quarter, and URL, all in 'nav-bar.html'.  
# The default menu uses a set of common menu headings 'Schedule', 'Readings', etc.  You may want to change them.  Edit these in 'nav-bar.html'.
# Each menu item should normally have a corresponding subdirectory. If you changed the menus from the defaults, re-establish this correspondence by copying, renaming and deleting the existing subdirectories.
# If you use createcal, you may use the createcal template and additional readme in the schedule subdirectory to set up that integration.
# Add your course content.  There is a home index.html in the root of the repo, and each menu subdirectory also has an index.html. The page content area in each file is annotated with comments.  You should also edit the page title in each file as needed.

## Additional notes

* A responsive feature of the template is the top menu bar.  The menus automatically flip from horizontal to vertical orientation when the browser width is less than 768 pixels.  The page title and menus must fit inside 768 horizontal pixels, otherwise you will see a fairly ugly wrapping behavior before the menus flip.  If you see such wrapping issues, you may want to uncomment the css in the final two sections of css/main.css, and adjust widths there as needed.

## Credits

This template was derived with permission from Xi Wang's course web for CSE 551.