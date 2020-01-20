const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navSection = document.querySelectorAll("nav a");
navSection[0].textContent = siteContent["nav"]["nav-item-1"];
navSection[1].textContent = siteContent["nav"]["nav-item-2"];
navSection[2].textContent = siteContent["nav"]["nav-item-3"];
navSection[3].textContent = siteContent["nav"]["nav-item-4"];
navSection[4].textContent = siteContent["nav"]["nav-item-5"];
navSection[5].textContent = siteContent["nav"]["nav-item-6"];

//task3
navSection.forEach( element =>{
  element.style.color= "green"
});

var newString = siteContent.cta.h1.split(' ').join('\n');
const cta_h1 = document.querySelector('.cta-text h1');
cta_h1.innerText=newString;


const circleImg = document.querySelector("#cta-img");
circleImg.setAttribute("src", siteContent["cta"]["img-src"]);

const theButton = document.querySelector(".cta-text button");
theButton.textContent = siteContent["cta"]["button"];

const h4Section = document.querySelectorAll("h4");
h4Section[0].textContent = siteContent["main-content"]["features-h4"];
h4Section[1].textContent = siteContent["main-content"]["about-h4"];
h4Section[2].textContent = siteContent["main-content"]["services-h4"];
h4Section[3].textContent = siteContent["main-content"]["vision-h4"];

const mainPs = document.querySelectorAll("p");
mainPs[0].textContent = siteContent["main-content"]["features-content"];
mainPs[1].textContent = siteContent["main-content"]["about-content"];
mainPs[2].textContent = siteContent["main-content"]["services-content"];
mainPs[3].textContent = siteContent["main-content"]["vision-content"];

const middlePic = document.querySelector(".middle-img");
middlePic.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const footerSection = document.querySelector(".contact h4");
footerSection.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

const footerPart = document.querySelector("footer p");
console.log(footerPart);
footerPart.textContent = siteContent["footer"]["copyright"];

//task 3

// const firstPart = document.createElement("a");
// firstPart.textContent = "Year 2019";

// const parentElement = document.querySelector("header");

// parentElement.prepend(firstPart);

const newContent = document.createElement("a");
console.log(newContent);
newContent.textContent = "year 2019";

const parentEl = document.querySelector("nav");
parentEl.append(newContent);

const secondContent = document.createElement("a");
secondContent.textContent = "November";

const otherParent = document.querySelector("nav");
otherParent.prepend(secondContent);