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
* NEW (Sep 2019) Multi-level subdirectory support. You can now nest your site pages into multiple levels of subdirectories and the header, footer, and styling will work properly.

## Step by Step

1. Clone, fork or download this repo into your course web directory.
2. Edit the course title, number, year/quarter, and URL, all in 'site/nav-bar.html'.  
3. The default menu uses a set of common menu headings 'Schedule', 'Readings', etc.  You may want to change them.  Edit these in 'site/nav-bar.html'.
4. Each menu item should normally have a corresponding subdirectory. If you changed the menus from the defaults, re-establish this correspondence by copying, renaming and deleting the existing subdirectories.
5. If you use createcal, you may use the createcal templates in the site/createcal subdirectory, and additional createcal integration instructions below.
6. Add your course content. You can use the site/template.html file or any of the other index.html files provided in each menu subdirectory as a template for your pages. To use them, do the following:
  * Rename the file as needed and place it in the desired directory.
  * Edit the page title (what shows up at the top of the browser tab).
  * Edit the content title (the main page heading, e.g. 'Assignments').
  * Edit your main page content (this area is annoted with comments).

### Createcal Integration

Files in the directory site/createcal/, and site/css/calendar.css are designed to help you to use this template with createcal.  To integrate with the createcal calendar, follow these steps:

1. Copy files `site/createcal/*.template`into `<course_web>/calendar/htmlTemplates/`, replacing the original createcal files there.
2. Run `createcal` as normal to rebuild the createcal html files in calendar/*.html.
3. In this example, we are replacing the schedule page with the createcal calendar.  Remove or rename schedule/index.html, then recreate it as a symlink to calendar/calendar.html
  * `cd <course_web>/schedule`
  * `ln -s ../calendar/calendar.html index.html`
4. Repeat step 3 for other createcal files you use, eg. hwlist, sectionlist, etc.

Now you may update/regenerate the calendars as normal.

You may also edit the templates if you desire to change the titles, style, or layout.  For example the titles in these createcal templates use createcal placeholders, and thus are designed to work for any course.  However, if you desire different titles simply modify them in the files calendar/htmpTemplates/*.template and run createcal again.

## Additional notes

### How To Avoid Wrapping in the Navigation Bar
A responsive feature of the template is the top menu bar.  The menus automatically flip from horizontal to vertical orientation when the browser width is less than 768 pixels.  The page title and menus must fit inside 768 horizontal pixels, otherwise you will see a fairly ugly wrapping behavior before the menus flip.  If you see such wrapping issues, you may want to uncomment the css in the final two sections of css/main.css, and adjust widths there as needed.

### Including additional CSS/Javascript, or changing filepaths
If you want to load additional CSS or JavaScript files, or load them from a location other than the /site directory, you can add/edit the paths to the desired files in the 'cssSources' and 'jsSources' arrays in each *.html file. Be sure to enclose each path in quotes and have a comma after each line. Adding the files to these arrays ensures they are loaded dynamically from the base course web URL (e.g. courses.cs.washington.edu/cse999/19au) such that you can nest your HTML files multiple subdirectories deep and not have to include a relative URL for every CSS/JS file. If you want to load a file from outside of your course web directory, simply use standard HTML syntax between the page's `<head>` tags: `<script src='/path/to/file.js'></script>` for JavaScript and `<link rel='stylesheet' type='text/css' href='/path/to/file.css'>` for CSS.

### Problems Loading from Local Disk
It should work out of the box when using a web server.  It generally doesn't work if you open files directly from your local disk.  The main problem is that we are using javascript to load header and footer content.  Some browsers (notably Chrome and IE, and maybe others) will decline to do this for security reasons.  Firefox will currently load the home page, but not other pages.

### Improving your HTML with Bootstrap
We are loading Bootstrap in this template.  Bootstrap offers a large menu of responsive styling and interactive elements.  If you are inclined to learn just a little more about Bootstrap you may be able to dramatically improve the look and usability of your site.  Much of the benefit can be had quite simply by adding a few bootstrap classes to your html.  To learn more see https://getbootstrap.com/docs/3.3.

## Credits

This template was derived with permission from Xi Wang's course web for CSE 551.

## Feedback

This is a work in progress.  We are happy to receive your feedback.  Open a Gitlab issue, submit a merge request, or send an email (support@cs.washington.edu).