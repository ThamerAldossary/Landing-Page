
//Global variables
var sections = document.getElementsByTagName('section');
var nav_links = document.getElementById("navbar__list");
scrollTopBtn = document.getElementById("topBtn");

//initialize the page
window.onload = (event) => {
        for (let item of sections) {
            populateNavLinks(item);      
    }    
    document.getElementsByClassName('menu__link')[0].classList.add('active');  //add active class to the first menu link element
    document.onscroll = highlightSectionInViewport;   // attach scroll  event to the DOM
    scrollTopBtn.onclick = scrollTopFunction;   // attach click event to Top btn
    }

// build the nav menu_links;
function populateNavLinks(item) {    
    let li = document.createElement("li");
    let a= document.createElement("a");
    a.href = item.id;
    a.appendChild(document.createTextNode(item.dataset.nav));
    a.classList.add("menu__link");
    a.onclick = toggleActiveClass;   
    li.appendChild(a);
    nav_links.appendChild(li);
    
   
}

// toggle active class of the nav links onclick
function toggleActiveClass(e) {
     e.preventDefault();
    let active = document.getElementsByClassName('menu__link active');
    for (let item of active) {
        item.classList.remove('active');
    }
    e.target.classList += ' active';
    scrollPage(e);
}

// toggle 'your-active-class' on sections when in viewport
function highlightSectionInViewport() {
    for (let item of sections) {
        let sectionID = item.id;        
        let position = Math.floor(item.getBoundingClientRect().top);
        if(position <= 150 && position >= -150  ) {
            item.classList.add('your-active-class');
        } else {
            item.classList.remove('your-active-class');
        }        
    }
}

// scroll to page sections when user clicks nav-bar menu links
function scrollPage(e) {
    e.preventDefault();
    let el_ID = e.target.getAttribute("href");
    el_ID = document.getElementById(el_ID);
    el_ID.scrollIntoView({behavior: "smooth"});
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function scrollFunction() {
  if ( document.documentElement.scrollTop > 350) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

//  scroll to the top of the document
function scrollTopFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}