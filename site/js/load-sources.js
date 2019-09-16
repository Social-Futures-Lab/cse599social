// This file receives a list of CSS and Javascript files defined in the HTML class that included it and loads them into the HTML document
// The basePath must be defined on the HTML page.

// Load the CSS files
if (cssSources.length) {
  for (var i = 0; i < cssSources.length; i++) {
    document.write("<link rel='stylesheet' type='text/css' href=\'" + basePath + cssSources[i] + "\'>");
  }
}

// Load the Javascript files
if (jsSources.length) {
  for (var i = 0; i < jsSources.length; i++) {
    document.write("<script src=\'" + basePath + jsSources[i] + "\'><\/script>");
  }
}