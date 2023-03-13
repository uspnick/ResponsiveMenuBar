# ResponsiveMenuBar

The Responsive Menu Bar jQuery plugin works like a menu bar on news.google.com. The menu bar is dynamic, and if there are too many menu items to fit on the screen, additional items are hidden and displayed in a drop-down menu accessed by clicking on the "three vertical dots" icon.
This package was created with a participation of ChatGPT, ChatGPT suggested how to rename all objects in the code, including styles, variables, functions. 


![The menu.html in the browser](https://github.com/uspnick/ResponsiveMenuBar/blob/main/menu.html.png?raw=true)

## Getting Started

To use the ResponsiveMenuBar package, simply download the files and add them to your project. The files include the following:

The demo is available at https://responsivemenubar1.netlify.app/. Resize the menu bar to see it in action.

* jquery.ResponsiveMenuBar.js: The jquery plugin for the menu bar and popup menu.
* menu.html: The HTML code for the menu bar and popup menu.
```
  <body>
    <div class="rowContainer">
        <div id="header">
            <div class="menuContainer opacity0">
               <div class="menuLink" urlto="YourPage1.html">Your Menu 1</div>
               <div class="menuLink" urlto="YourPage2.html">Your Menu 2</div>
               ...
            </div>
            <div class="iconExileMenu displayNone">
            </div>
            <div class="exileMenuContainer displayNone">
            </div>
        </div>
        <iframe class="greyOut" frameborder="0" style="border: 0px; width:100%;" name="id_iframeElement" id="id_iframeElement" scrolling="auto" src="wait.html"> 
        </iframe>
    </div>
  </body>
```
* menu.css: The CSS code for the menu bar and popup menu.
* menu.js: The JavaScript code to init the ResponsiveMenuBar plugin
```
$(document).ready(function ()
{
    $(document).ResponsiveMenuBar({});
});
```

* 01 ... 08.html  - simple html files with titles to test menu.html
* common.js - for 01 ... 08.html to post 'iframeclick' message to the parent to translate a mouse click inside iframe.
* common.css -for 01 ... 08.html to set fonts



## Package Description:

This package is a responsive and customizable template for a single page application (SPA) that features a menu bar and an iframe to display content. The menu bar is responsive, and if there are too many menu items to fit on the screen, the excess items are hidden and displayed in a dropdown menu accessed by clicking on the "hamburger" icon. The menu items are customizable, and each item can be linked to a separate page or resource.

The package is composed of HTML, CSS, and JS files, and it includes the following features:

1. Responsive menu bar with dropdown menu for excess items
2. Active menu item highlighting
3. CSS animations for menu item selection
4. Grey out effect on iframe during page loading
5. Hidden menu item list inside the dropdown menu
6. Event listener for clicks on the iframe
7. Message 'iframeclick' passing from the iframe to the parent window to close the dropdown menu, the code is included in common.js (for 01 ... 08.html).
```
        window.addEventListener('click', function (e)
        {
            // Send a message to the parent window with the details of the click event
            window.parent.postMessage({
                type: 'iframeclick'
            }, '*');
        });

```

## User Guide:

To use this package, follow these steps:

* Download the package files from the source.
* Customize the menu items by editing the HTML code inside the div tag with the class attribute set to menuContainer.
* Link each menu item to the corresponding page or resource by editing the urlto attribute of the corresponding a tag.






## Contributing.

If you find any issues or have suggestions for improvement, feel free to create an issue or pull request on GitHub. Contributions are always welcome!


## License. 

The ResponsiveMenuBar package is released under the MIT License. Feel free to use it in your projects, commercial or non-commercial. Attribution is not required, but appreciated.

