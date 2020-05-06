# Stream Two Project - Personal Resume

This is a website I have created for my own personal resume. 
I chose to use my own idea to demonstrate my capaibiites of HTML/CSS/JavaScript in tandem with eachother.

The website contains a home page that includes content about myself.
Then there is an experience page which includes an employment history timeline with selectable options to expand for more information and a Google Maps API to show where I have worked. 
My portfolio page just includes the GitHub API which allows the user to search for any GitHub user and see the users information and a list of their repositories
And the contact page that provides my contact information and a functional email form using emailJS.
 
## UX

This website is created for my own personal resume, the website allows the user to research my personal and professional profile with the addition of downloading my CV.

As a user I would like to be able to open the wesbite and be greeted with information on who the personal resume is for.
I would also like to see a page that shows me the work experience of the owner of the website, included with details of the responsibilities included and the location it was based.
A portfolio would be nice to see, so I can examine what the site owner has accomplished so far.
And a contact page so I can get in touch with the website owner incase I have any further enquiries.

I initially designed this website with the idea of a desktop viewport however there are media queries that allow the website to respond, it can display on a maximum viewport of 1440px and a minimum viewport of 320px.

Please see the wireframes for each page with the initial design on desktop devices.

-[index.html wireframe](assets/wireframes/index.pdf)
-[experience.html wireframe](assets/wireframes/experience.pdf)
-[portfolio.html wireframe](assets/wireframes/portfolio.pdf)
-[contact.html wireframe](assets/wireframes/contact.pdf)


## Features

When I first had the idea for this website I did not want to overcomplicate it as it is a reflection of my own person so for the home page I just wanted to include a selfie image in a circle frame with a small section of content about me and my interests.

Then the experience page I wanted to include a small timeline of my employment history and a Google Maps API however, my mentor suggested I add the additional section that includes more information about each position I have worked in.

For the portfolio page I took inspiration from the Personal Resume Mini Project and decided to reflect this on my own personal resume website to showcase my GitHub user information and repositories.

And finally the contact page I wanted to build a functional contact form using emailJS which I have achieved.
 
### Existing Features

- Feature 1 - User can interact with the navigational items by hovering the cursor over them.
- Feature 2 - User can interact with social media icons in the footer by hovering the cursor over them.
- Feature 3 - User can interact with download CV link by hovering the cursor over the icon.
- Feature 4 - User can interact with the employment history timeline on experience.html, when an expand icon is selected, show relevant job description.
- Feature 5 - User can interact with Google Maps API, when the map is zoomed out enough, markers will also cluster together.
- Feature 6 - User can interact with the portfolio.html GitHub user search feature to search for any user information on GitHub.
- Feature 7 - User can interact with the contact form on contact.html which will send an email to my personal gmail account.

### Features Left to Implement

- Feature idea - I would like to improve the experience.html page so when a job from the employment history timeline is selected the relevant job description will slide into view and the Google Maps API updates to show the relevant location.
- Feature idea - I would like to improve the navigation bar on viewports lower than a desktop whereby it will collapse/expand when an icon is selected.

## Technologies Used

- HTML

- CSS

- JavaScript

- [jQuery](https://jquery.com/)
    - The project uses jQuery on experience.html, for the employment-information.js script. And on portfolio.html, for the github-information.js script.

- [Google Maps API](https://cloud.google.com/maps-platform/)
    - The project uses the Google Maps API on experience.html for the interactive Google Map.

- [GitHub API](https://developer.github.com/)
    - The project uses the GitHub API on portfolio.html for the GitHub user search and results.

- [EmailJS](https://www.emailjs.com/)

- [FontAwesome](https://fontawesome.com/)
    - The project uses **FontAwesome** to include the social media icons and download cv icon in the footer as well as on the experience.html employment history timeline.

- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google Fonts** to achieve fonts more relevant to the styling of the webpage.

## Testing

1. Navigational Bar
    1. Hover the cursor over any of the navigational links.
    2. The hover pseudo class will transition the text from light to bold.
    3. Once activated the page will load the relevant internal link in the same tab.

2. Social Media Icons
    1. Hover the cursor over any of the social media icons.
    2. The hover pseudo class will transition the icon from dark grey to light grey.
    3. Once activated the page will load the relevant external link in a separate tab.

3. Download CV Icon
    1. Hover the cursor over the download cv icon.
    2. The hover pseudo class will transition the icon from dark grey to light grey.
    3. Once activated the page will load the relevant external link in a separate tab.

4. Employment History Timeline Expand Options
    1. Latest employment role appears by default when experience.html is loaded
    2. Hover the cursor over any of the expanding icons.
    3. The hover pseudo class will scale the icon up.
    4. Once activated the employment-information.js script is called.
    5. Relevant job description appears in the middle of the page.

5. Portfolio GitHub API
    1. Text in user search bar defaults to "Boofy360" as my personal profile.
    2. Entering any new text will load the loading-gear.gif until a result is found, if no result found return message.
    3. Once result is found display user data and repo data.

6. EmailJS Contact Form
    1. Attempting to submit the form without any content will result in a prompt to fill the missing field.
    2. Fill in form and press the "Send Message" button.
    3. Form inputs will clear to confirm the message has been sent.

## Deployment
This site is hosted using GitHub pages, I have deployed the site directly from the master branch. Now it has been deployed this site will update automatically following any new commits to the master.

To run locally, you can clone this repository directly into the editor of your choice by pasting git clone https://github.com/Boofy360/personal-resume into your terminal. 
To cut ties with this GitHub repository, type git remote rm origin into the terminal.

## Credits

### Content

- All of the content has been written by me.

### Media

- All photos were taken by myself.
- The gif file for my loading gear graphic was created using the [loading.io](https://loading.io/) free web service.

### Acknowledgements

- My mid point review session with my mentor gave me the idea to include the job description alongside the employment history timeline, utilising jQuery methods to achieve this.
- In my final point review my mentor gave me some tips on the positioning of some elements on my webpage.
- The tutor support team were there for assistance in troubleshooting an issue I was having with the emailJS form not working correctly.
- I reference [W3Schools](https://www.w3schools.com/) as the online library that I used for basic troubleshooting.
- The CSS code has been validated using the [CSS W3C Markup Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input)
- The HTML code has been validated using the [HTML W3C Markup Validation Service](https://validator.w3.org/#validate_by_input)
- I acknowledge the inspiration for the employment history timeline came from the video lesson [Putting It All Together | Mini Project with Bootstrap 4](https://courses.codeinstitute.net/courses/course-v1:codeinstitute+FE+2017_T3/courseware/616289d66b5641a3808cc43e53842695/a3bcedac97ea4678953a75f07ffd6931/?activate_block_id=block-v1%3Acodeinstitute%2BFE%2B2017_T3%2Btype%40sequential%2Bblock%40a3bcedac97ea4678953a75f07ffd6931*/)
- I acknowledge the code for the Google Maps API came from the video lesson [Putting it all together](https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/3b2af8636ea54a4d9dc45126f7498633/)
- I acknowledge the code for the GitHub API came from the video lesson [Putting it all together](https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/4febf19198924d8fbad095e5f4151f61/?activate_block_id=block-v1%3ACodeInstitute%2BIFD101%2B2017_T3%2Btype%40sequential%2Bblock%404febf19198924d8fbad095e5f4151f61)
- I acknowledge the inspiration for the emailJS contact form came from the video lesson [Putting it all together](https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/?activate_block_id=block-v1%3ACodeInstitute%2BIFD101%2B2017_T3%2Btype%40sequential%2Bblock%40e4710f80cdf34bffbd607bc102482d5c)