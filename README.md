# Cgenerator
A cli tool that generates Html,Css and Javascript code for commonly used components like NAVBARS, FOOTERS, HEADERS,CARDS, CAROUSELS ....

#INSTALLATION
-ensure you have node installed in your computer
run npm install sitegen-cli
- check your dependencies, you should have sitegen-cli version 1.00

#GENERATING NAVBARS
  sitegen --nav dark   --this generates two files html.txt and main.css
 --html.txt has the html code for your dark navbar. Copy this code in your html file and remember to link the main.css stylesheet generated.
 
 sitegen --nav flex-end  -- This is for a navbar that has some of its contents pushed to the right. Run the command which generates the html.txt and main.css.
 paste the html code in your html file and remember to link the main.css stylesheet.
 
 sitegen --nav drop-down   -- Generates a navbar with a dropdown. Generates 3 files. html.txt, main.css, main.js . Paste the html code in your html file, link to the  main.css stylesheet and add 
 script tag pointing to the path of the main.js file generated.
