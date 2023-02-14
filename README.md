# Landing Page Project

## Table of Contents

1. **Autor** : John Samir Habib  

2. **Goal of the Project** : To practice on manipulating DOM with JavaScript Dynamically and how to create functions and use event hanlders to build our project to perform effectively and we learn also how to write markdown files. 

3. **Technology used in the Project** :  
    - HTML  
    - CSS  
    - Javacript [ECMAScript 6] 
4. **Description of  the Project** : The Project is a simple Landing Page which when Initialized do the follownig :  
    - Add anchors links in navbar depending on the count of the exist sections in HTML File.

    - If user clicked an anchor this anchor will only has the "active" state and the matched section will scroll smoothly into the viewport and only too has "active" state.

    - If user scrolled the window the code will check: Which section is in viewport? The section in viewport will only has the "active" state and the matched anchor will only too has "active" state.
    - If user clicked "Top" button he/she will go to the top of the page.
5. **Features of the Project** :  
   - It uses virtual DOM using fragment which reduce the reflows and repaints operation and optimize the perfomance.
   - It has a good look and supports scroll smoothly.
   - It has "Top" button to go to the top of the page.
   - It works correctly on all devices [pc, tablet and mobile phone].
6. **Stages of Building The Project** :  
    - **Analayzing the Project**:   
      - Depending on expected user behavior we found there three places he/she will take action on and take the first time the Project will be initialize so until now we have the three following four situations: 

        - Initialize the Project for first Time
        - The user clicks an anchor Or
        - The user scrolls the window  
        - The user clicks the "Top" button  
    - **Building the Project**:
        - We created the method "buildNavbar" and add it on "load" the page to build the navbar with anchors equal to the exist sections in HTML and add "click" listener and initialize the first anchor with "active" state. (First and second Situations).

        - We added an event listener on "scroll" the window with callback function which will check: Which section is in viewport? The  section in viewport will only has the "active" state and the matched anchor will only too has "active" state and if the top of page >= 30px The "Top" button will be shown and if not it will be hidden.(Third situation)  
         - We added an event listener on "click" the "Top" button takes the user to the top of the page.  
7. **References**:  
  - Udacity videos and text lessons on classroom
  - www.w3schools.com
  - www.javascripttutorial.net
  - www.programiz.com

     



