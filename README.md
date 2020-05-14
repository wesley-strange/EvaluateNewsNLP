# Project: Evaluate News Article with Natural Language Processing

The goal of this project was to practice with setting up Webpack, working with service workers, introduction to Sass styles, and creating requests to external APIs. Aylien API was the API of choice for this project.


## Format of the Landing Page

The landing page consists of a header, form, and a footer message.


## Header

The header contains the project name and author of the website.


## Form

The form is the main part of the website. The user can use the form to submit an article/document to the Aylient API to be analyzed for sentiment. The form accepts an URL in the form of "https://www.google.com" or "http://www.google.com". The form will not accept an address that does not contain "http://" or "https://" - an error message will be displayed instead. The URL is validated by a function called "validateURL".


## Footer

Thank you message to the user for visiting. You can put whatever you want here.


## Jest Testing

Built in some very minimal tests. This needs to be expanded on in future iterations to test the whole functionality. For example, I'm just testing that the functions are defined, since I don't know how to write better tests.


## Sass

I didn't really change the format of the CSS since I didn't see any way to make it better using Sass.


## Future enhancements

- Build in functionality to accept either URL or raw text to be analyzed by the API.
- Write more tests to test the full functionality of the website.