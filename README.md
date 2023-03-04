# ResponsiveMenuBar

This package was created with the active participation of ChatGPT. I provided the specs and after generating the HTML, CSS, JS by ChatGPT, I was fixing the issues and sending back an updated version to ChatGPT to get comments. This cycle was then repeated until it was done. At the final stage, ChatGPT suggested how to rename all objects in the code, including styles, variables, functions, and then ChatGPT created the description below. 


Getting Started


To use the ResponsiveMenuBar package, simply download the files and add them to your project. The files include the following:

menu.html: The HTML code for the menu bar and popup menu.

menu.css: The CSS code for the menu bar and popup menu.

menu.js: The JavaScript code for the menu bar and popup menu.

jquery-3.5.1.min.js: The jQuery library required for the JavaScript code to work.

01.html ... 08.html  - empty files with titles to test menu.html

common.js - is used in 01.html ... 08.html to post Message to the parent to tarnslate a mouse click inside iframe.

common.css - is used in 01.html ... 08.html to set fonts




Package Description:

This package is a responsive and customizable template for a single page application (SPA) that features a menu bar and an iframe to display content. The menu bar is responsive, and if there are too many menu items to fit on the screen, the excess items are hidden and displayed in a dropdown menu accessed by clicking on the "hamburger" icon. The menu items are customizable, and each item can be linked to a separate page or resource.

The package is composed of HTML, CSS, and JS files, and it includes the following features:

Responsive menu bar with dropdown menu for excess items
Active menu item highlighting
CSS animations for menu item selection
Grey out effect on iframe during page loading
Hidden menu item list inside the dropdown menu
Event listener for clicks on the iframe
Message passing between the iframe and parent window to close the dropdown menu
User Guide:

To use this package, follow these steps:

Download the package files from the source.
Customize the menu items by editing the HTML code inside the div tag with the class attribute set to menuContainer.
Link each menu item to the corresponding page or resource by editing the urlto attribute of the corresponding a tag.
Customize the page to be displayed in the iframe by editing the src attribute of the iframe tag with the id attribute set to id_iframeElement.
Optionally, customize the CSS styles by editing the CSS code inside the <style> tag in the head of the HTML file.
Optionally, customize the JS functions by editing the JS code in the corresponding .js files.
Host the HTML file and the associated files on a web server or locally on a computer, and access the HTML file in a web browser.
To add new menu items, follow these steps:

Add a new a tag inside the div tag with the class attribute set to menuContainer.
Set the href attribute of the new a tag to # to prevent the browser from navigating to a new page.
Set the urlto attribute of the new a tag to the URL or resource to be linked to the new menu item.
Set the text content of the new a tag to the label to be displayed for the new menu item.
Optionally, customize the CSS styles of the new menu item by editing the CSS code inside the <style> tag in the head of the HTML file.
To remove menu items, simply delete the corresponding a tag from the div tag with the class attribute set to menuContainer.

To customize the styles, edit the CSS code inside the <style> tag in the head of the HTML file. You can change the font family, font size, background color, and other visual aspects of the menu bar and the iframe.

To customize the JS functions, edit the JS code in the corresponding .js files. You can add new functionality, modify existing functionality, or remove functionality as needed.

Overall, this package provides a flexible and customizable template for a single page application with a menu bar and an iframe to display content. It can be easily customized to fit different use cases and requirements.


Customization.

The ResponsiveMenuBar package is highly customizable. You can change the colors, fonts, and other styles in the CSS code to match your website's design. You can also add or remove links from the menu bar by editing the HTML code.

If you want to modify the JavaScript code, make sure to have a good understanding of JavaScript before doing so. The code is heavily commented, but it can be complex for beginners.


Contributing.

If you find any issues or have suggestions for improvement, feel free to create an issue or pull request on GitHub. Contributions are always welcome!


License. 

The ResponsiveMenuBar package is released under the MIT License. Feel free to use it in your projects, commercial or non-commercial. Attribution is not required, but appreciated.

