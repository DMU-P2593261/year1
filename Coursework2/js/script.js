/*
The code for the burger menu was taken from a tutorial on YouTube which can be found here: https://youtu.be/gXkqy0b4M5g
The code was not directly copy and pasted but was typed by hand to help myself further understand the code and know what was happening as each line was added.
Some of the code has been edited to fit the theme of my website such as a change in animation speed, colouring and the pixel width that it takes to activate the mobile view.
JavaScript is definitely not my strongest point in coding but I understand this to a degree. The video was very clear in explaining how everything worked.

*/

/*Main Function*/
const burgerAnimation = () => { /*creates a function which is equal to an anonymous function*/
  const burger = document.querySelector('.burgerMenu'); /*creates a function which is equal to the burgerMenu class*/
  const nav = document.querySelector('.nav-links'); /*creates a function which is equal to the nav-links class*/
  const navLinks = document.querySelectorAll('.nav-links li');



burger.addEventListener('click',()=>{ /*creates an on-click eventListener for the burger function*/
  /*Burger Menu Toggle*/
  nav.classList.toggle('burgerOpen'); /*calls the burgerOpen class provided within the CSS stylesheet, the toggle classList allows the burger menu to be closed with the same button*/


  /*Link Animation*/
    navLinks.forEach((link, index)=>{ /*index feature allows for an easier method of delaying the animation process between each nav link*/
      if(link.style.animation){ /*this code says that if the links contain an animation, it must not animate and if it does not have an animation or has not animated then it must animate */
        link.style.animation = '' /**/
      } else {
        link.style.animation = `navLinkAnimation 0.5s ease forwards ${index / 5 + 0.5}s`; /**/
      }
    });


      //Burger Animation
      burger.classList.toggle('toggle'); /**/
  });
}


/*Function Invoker*/
burgerAnimation(); /*this invokes the burgerAnimation function*/
