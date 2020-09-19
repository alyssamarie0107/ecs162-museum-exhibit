# ecs162-museum-exhibit

# Museum Exhibit

The Manetti Shrem museum is closed as part of the campus shut-down, but we can build a Web site that shows something from its current main exhibit, on the work of the artist Stephan Kaltenbach, so people can still get an idea of what is inside. In the process, we'll learn about CSS for responsive pages that look nice in a variety of screen sizes, practice working with a designer, and do our first bit of Javascript.

Emily, our designer, has given us three mock-ups for how the Web page should appear, on three different viewport widths (phone, tablet, desktop). You can find them all on this folder on Google Docs, as well as a video of how the Web page should behave when the user clicks on the arrows, a text file describing the specific fonts and colors used, and a folder containing the images.

Your implementation should be responsive. For instance, while the user might have to scroll down to see the whole Web page in your implementation, they should never have to scroll right. Among other things, the text in the header should always be fully visible, never cut off on the right, and the text at the bottom should remain centered, and the black header bar should always fill the width of the viewport. Many elements, including the header, footer, main region, paragraphs and the images themselves, should not have fixed widths, but should depend on the width of the body or of their containing element. The size of the font should depend on the device.

You can use the emulator in Chrome developer tools to check the appearance of your implementation of the mobile design on various phones.

The left and right buttons should switch between the images of different artworks, and the user can also switch between them by clicking on the dots underneath. The three buttons at the top right are dummies, they don't have to do anything.

You are required to implement the layout using Flexbox ("display: flexbox"), or a mixture of Flexbox and Grid ("display: grid"). You may not use CSS properties such as float and column, CSS modules such as JQuery, layout libraries such as Bootstrap, or UI libraries such as React. Use media querires to switch between mobile, tablet and desktop.

Exceptions: to get the arrow buttons and captions to lie on top of the images, the most straightforward way is to use position. Go ahead! Also, feel free to use position when getting the images to change (if you want to do it that way). For an example of how to use position to overlay text on an image, as well as how to put an app onto Glitch, check out the this meme generator app on Glitch.

You are required to keep the HTML in one file, the CSS in another, and the Javascript in a third. These three files should be in a directory called "public". Put the images in a sibling directory called "assets", so that your directory structure looks like this:

-- Assignment 1
------ public
------ assets

I suggest you start by implementing the mobile phone design. Begin by printing out the mockup, and sketching in what belongs to the Web elements "header", "main", etc. Not everyone has to assign the same elements to every part of the picture (ie. is there a "nav" element inside the "header"? Before it? Not at all?). It's also helpful to give every HTML element to which you assign CSS a different background color during development (and put them back to the correct colors when you're done). Once you have the mobile design working, use media queries to get it to switch to the tablet and laptop designs.

To hand in your assignment, you will put it onto a server using Glitch. Your TA will grade it by visiting the Web page you create on Glitch. Go to the meme generator app on Glitch, and clone it by clicking the "remix this" button at the bottom. Change the name of the cloned app to "Your Name Museum Exhibit" (where "Your Name" is your name). Do not replace the random three-word name that Glitch gives your new project. Immediately make your project code private by clicking on the project name and then "Make this project private" in the drop-down.

Replace the files index.html, style.css in the "public" directory of the app, replacing them with your .html and .css files. Your HTML file should be named "index.html", otherwise it won't work; rename it if necessary. Upload your .js file. The four images are already in the "assets" directory of the cloned project, you don't need to upload them, also reset.css is in /public. Click the "Show me" button to see your Web page on the server and make sure it is all OK. Figure out what the URL of your new app is, and check that going to that URL indeed brings up your museum Web page, all the images are there, the buttons still work, etc. Then, hand in the URL on Canvas.

Important: Get your Web app up on Glitch before the deadline, and then DO NOT TOUCH it. We will check the timestamp of your last edit to make sure you submitted on time.

Useful links:
reset.css - link to before your CSS file, see mini-lecture 4.
W3C HTML validator - use to check the syntax of your HTML file, see mini-lecture 3.
CSS validator
