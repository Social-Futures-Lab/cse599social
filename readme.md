# Simple Course Web Template

This is a simple, clean, responsive template for Allen School course webs.  
You can see what it looks like [here](http://courses.cs.washington.edu/simple-courseweb-template).

## Intended Audience

Any Allen School instructor or TA looking for a new course web design.  It is expected that you are comfortable hacking html and a little CSS.  Even though the template uses Javascript, jQuery and Bootstrap, you probably don't need to know very much about those things.

## Features

* Simple, clean, modern design.
* Responsive.  It should behave well on any screen size.
* Createcal integration.  There is a createcal template that should make it easy for createcal users to integrate calendars.
* Header/footer abstraction. Edit header and footer information in one place.  Javascript inserts it into each page.

## Step by Step

1. Clone, fork or download this repo into your course web directory.
2. Edit the course title, number, year/quarter, and URL, all in 'site/nav-bar.html'.  
3. The default menu uses a set of common menu headings 'Schedule', 'Readings', etc.  You may want to change them.  Edit these in 'site/nav-bar.html'.
4. Each menu item should normally have a corresponding subdirectory. If you changed the menus from the defaults, re-establish this correspondence by copying, renaming and deleting the existing subdirectories.
5. If you use createcal, you may use the createcal templates and additional readme in the site/createcal subdirectory to set up that integration.
6. Add your course content.  There is a home index.html in the root of the repo, and each menu subdirectory also has an index.html. The page content area in each file is annotated with comments.  You should also edit the page title in each file as needed.

## Additional notes

### How To Avoid Wrapping in the Navigation Bar
A responsive feature of the template is the top menu bar.  The menus automatically flip from horizontal to vertical orientation when the browser width is less than 768 pixels.  The page title and menus must fit inside 768 horizontal pixels, otherwise you will see a fairly ugly wrapping behavior before the menus flip.  If you see such wrapping issues, you may want to uncomment the css in the final two sections of css/main.css, and adjust widths there as needed.

### Problems Loading from Local Disk
It should work out of the box when using a web server.  It generally doesn't work if you open files directly from your local disk.  The main problem is that we are using javascript to load header and footer content.  Some browsers (notably Chrome and IE, and maybe others) will decline to do this for security reasons.  Firefox will currently load the home page, but not other pages.

### Improving your HTML with Bootstrap
We are loading Bootstrap in this template.  Bootstrap offers a large menu of responsive styling and interactive elements.  If you are inclined to learn just a little more about Bootstrap you may be able to dramatically improve the look and usability of your site.  Much of the benefit can be had quite simply by adding a few bootstrap classes to your html.  To learn more see https://getbootstrap.com/docs/3.3.

## Credits

This template was derived with permission from Xi Wang's course web for CSE 551.

## Feedback

This is a work in progress.  We are happy to receive your feedback.  Open a Gitlab issue, submit a merge request, or send an email (support@cs.washington.edu).