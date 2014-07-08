# iX Celebrates Birthdays

We at iExperience take birthdays very seriously—but in good fun. Every time one of our students (and maybe even staff!) has a birthday, we toss a huge picture of them on our birthdays site [iExperience.github.io/birthdays](http://iexperience.github.io/birthdays/) and make them a custom page to show them we love them. 

### Developing

###### Index page

To create a new person page, first edit `index.html` with a picture of them. The code should look something like: 

    <div class="col-sm-4 col-sm-offset-4">
    <!-- <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6"> -->
      <a href="people/person.html">
        <div class="birthday-person">
          <img src="images/person.jpg" alt="">
          <div class="overlay"></div>
          <div class="text">PERSON</div>
        </div>
      </a>
    </div>

Note that whenever there is `person`, you should put the name of the person you're creating the page for, i.e. "Alice". The HTML in comments is for making the page responsive—Twitter Bootstrap (already included on the page) makes it easy to control layout on mobile and desktop. Documentation at [getbootstrap.com/css/#grid](http://getbootstrap.com/css/#grid).  

###### Person page HTML

Then create an appropriately named HTML file in `/people`. To make it easy, you can copy the `_template.html` file into it and edit from there. **Add a class to `<body>` so that you can style this page individually.** Then markup away.

###### Person page CSS

Similarly, create an appropriately named CSS file in `/stylesheets/people`. All of your styles should be prefixed with that name. Check `zack.css` for examples.

### Testing

To test you code, navigate to the directory **above** the `birthdays` folder (that is, when you `ls`, `birthdays` should be among the folders listed). From there, run `python -m SimpleHTTPServer`. Then you should be able to see your code by navigating to `http://localhost:8000/birthdays`. Note that just opening the `index.html` file in a web browser **will not work**.

### Good Coding Practices

Please have meaningful commit messages. Please don't break previous code by editing the `main.css` or `index.html` files, unless you really know what you're doing. Scope your code to only change your page by prefixing all of your CSS selectors and HTML classes.
