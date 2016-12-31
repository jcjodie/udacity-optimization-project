## Website Performance Optimization project
-Download the Website Optimization Project files.
-Open the index.html file in your browser.
-Click "Cam's Pizzaria or open the views/pizza.html file in your browser.

#My Task:
Make changes and test those changes using the tools available to determine if they are a performance gain or loss.

Changes I made for Part 1:

minified CSS and saved as cleanCSS/style.css
used inline CSS in index.html

In index.html: cleanCSS/print.css - added media=”print”

compressed profilepic.jpg and changed to profilepic.png

added: <script async src="http://www.google-analytics.com/analytics.js"></script>

Changes I made for Part 2:
pizza.html:
compressed pizza.png to pizza-min.png and also used provided pizzeria-min.jpg instead of pizzeria.jpg

main.js:
removed documentQuerySelectorAll from for loop on ChangePizzaSizes function
removed determineDx from the for loop under changePizzaSizes
changed documentQuerySelector to:
var randomPizzas = document.getElementsByClassName('randomPizzaContainer');
changed pizza sizes to %
changed # of pizzas to 50

added: requestAnimationFrame(updatePositions); 
changed documentQuerySelector to:
var items = document.getElementsByClassName('mover'); and moved it outside function
moved outside the for loop:
var pizzaLength = items.length;
var scroll = document.body.scrollTop / 1250;

styles.css:
added to save scrolling pizzas on their own layers:
transform: translateZ(0);
  will-change: transform;
  transform: translate3d(0,0,0);
  backface-visibility: hidden;
