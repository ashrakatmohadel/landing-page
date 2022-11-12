 # Project Description:
it's a landing page with five sections,
you can go to every section by the navigation bar,
the section you view in your screen will be highlighted.

# Explanation of The javascript code
## in the first behavior:
i made a dynamic function which runs over every section, and creates a list item for each one of them,
and for every list item inside it's inner HTML a link for the id of every section, and gave it the class menu__link in the styles.css,
then i put the list item inside the unordered list using .appenChild

## in the second behavior:
in the window
i gave the onscroll property a function , and used a forEach method for every section ,
inside the forEach a function with the parameter onPage, then using an if condition with the method 
.getBoundingClientRect() if the screen is on the section then the section will have the class .your-active-class
 if not then remove the .your-active-class class

## in the third behavior:
i gave an eventListener to the unorderedlist ,when clicking on it 'a function will happen ' with the parameter go ,
then i prevent the default from happing in the parameter and i put the if condition to if the click happened on the
list with the dataset i gave to it in the first behavior then it will go to it's section using getElementById(),
then by using the method scrollIntoView, sat it's behavior to smooth,
and finally by using setTimeout the browser will wait 800 milliseconds before going to the section