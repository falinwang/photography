# falinwang.github.io
Class: SI 539 Web Design

# Final Project Specification
## Required Minimum Content
1. Submit a (minimum four page) site.  *All of the pages must use a common header, footer, and navigation.*
2. The navigation must clearly display the current page.
3. Each page should contain a main section that can be reached using a *Jump to Content* option with the first tab on the page.
4. With the exception of a landing page, each page must have a minimum of two paragraphs of text or two pictures or a combination of picture and paragraph.  This is a minimum.

### To-Do:
- [x] All pages have header
- [x] All pages have footer
- [x] All pages gave navigation
- [x] Show current page at navigation
- [x] All pages contain a main section
- [x] All pages have “Skip to the Main content”
- [x] Each page has at least two paragraphs or pictures or a combination of a picture and a paragraph

## Required including documentation

### A description of where to find at least two uses of JavaScript and/or jQuery.

1. **Lightbox photo gallery using javascript and jQuery**
	1. Location: Work - Photography (works.html)
	2. Description: I use what I learned in class to display my photography with Lightbox that user can click on the small pictures and see the bigger image and the description under that picture.
	3. Sources: 
		- Assignment - Lightbox photo gallery. 
		- I use the starter code which teacher provided and follow the instructions and use the javascript and jQuery file provided by “[Lightbox by Lokesh Dhakar](https://lokeshdhakar.com/projects/lightbox2/) “
		- The file I used:
			- [lightbox-template.html](https://umich.instructure.com/courses/244017/files/9281693/download?verifier=66Kr6XbDJF24MXFPLVwShEltKR34p1NzRWSun1lN&wrap=1)
			- [style.css](https://umich.instructure.com/courses/244017/files/9281698/download?verifier=H7HFynFUefQutTHFxxPlmGnlPITv8eNMleLXSntf&wrap=1)
			* [lightbox-plus-jquery.js](https://github.com/lokesh/lightbox2/archive/master.zip)
			- [lightbox.css](https://github.com/lokesh/lightbox2/archive/master.zip)
	4. I changed the photo links and the color and border in css and then integrated the css into mine.
2. **Contact form and validation using javascript and jQuery**
	1. Location: Contact - Contact Form (contact.html)
	2. Involved files and sources:
		- contact.html
		- contactform.js
		- <script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
	3. Description: To provide user a contact form to send email to me, I add the contact form that can validate the input with Javascript and jQuery and then send email to me with the service provided by [[Formspree](https://formspree.io/)](https://formspree.io/).
	4. Source: 
		- Tutorial by Kevin Simper [Making and validating a working Contact Form with JavaScript - YouTube](https://www.youtube.com/watch?v=eg4e-FObyJ8&t=1136s)
	5. I follow the tutorial to add the jQuery and JavaScript. I changed the variables, items , the validation, and the prompts. And also changed the css.


# Process of Building

## Project with HTML and simple CSS
### Sep 21 - Second Commit
- Criteria:
1. Content: The site is well thought out and there are no glaring omissions in content. You must have at least four separate pages that are linked via the nav section.
2. Images: There are at least 10 images on your site. At least five of those images must be local and stored in a separate folder from the HTML.
3. CSS: The navigation section is styled and the css code is in a separate file AND separate folder from the HTML.
4. The site validates: The site must validate via validator.w3.org.
5. The site is succesfully hosted: There can not be any broken images or links.
6. Other: Make sure to check the grading protocols for possible deductions. https://umich.instructure.com/courses/244017/pages/grading-slash-attendance-slash-protocols?module_item_id=513709

## Project with Layout
### Oct 5 - Third Commit
- Criteria:
1. Use grid or flexbox for significant portions of one page on your site (e.g. layout is done with grid or images are displayed using flex).
2. Use FontAwesome on one page of your site.
3. Use Google fonts on one page of your site.
4. Use background image(s) on one page of your site.
5. Utilize best practices in accessibility (check on wave)
6. Validate your code and fix errors (check on w3)

- Changes:
- [x] Applied grid on `contact.html` and flexbox on `works.html`


## Project with Responsive Design
### Oct 26 - Fifth Commit
- Description:
> Using media queries, create three distinct layouts.  These new layouts can be based on viewport size, orientation, or device type.  It is important that the actual functionality is changed, not just size and/or colors.
> 
> Design at least three unique layouts
> 
> Write at least two media queries using the mobile-first paradigm to implement your designs
> Please make sure to follow the rubric below. You MUST have all of the portions complete to receive credit on this assignment. If you do not receive full credit you may resubmit up to two additional times as long as they are within 10 days of the original deadline.

- Criteria:

1. One view that is different in layout from previous version
2. Third view that is different from other two via layout and/or user preferences.
3. At least one media query rule is not based on width.
4. Site works successfully on actual mobile device, not just simulator. (Test it!!)


# Changes so far:
- [x] Change the default layout to mobile-first version
- [x] Add width based media query with (1) width < 680, (2) 680 - 1000 and (3) width > 1000
- [x] Add orientation media query (landscape)
- [x] Add Google embedded PDF version of Resume on `biography.html`
- [x] Add more photos on `works.html` and change the title
- [x] Change the background image layout on `index.html`
- [x] Position `About.html`
- [x] Add *current-page* with yellow color for user to locate the page
- [x] Add downloadable resume on `biography.html`
- [x] Position `about.html`
- [x] Add RWD 
- [x] Add pictures on `works.html`
- [x] Add "Back To Top" footer
- [x] Remove the big space under `contact.html`
- [x] Add lightbox on `works.html`
- [x] Add "Jump to Content" (Skip to the main content)
- [x] Add "Jump to Navigation" (Skip to navigation)


# To-Do:


