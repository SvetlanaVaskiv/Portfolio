const body = document.createElement("body");
const section = document.createElement("section");
section.className = "resume";
const aside = document.createElement("aside");
const figure = document.createElement("figure");
const img = document.createElement("img");

img.src = "/image/photo_ava.jpg";
img.className = "ava";
document.body.prepend(section);
section.appendChild(aside);
aside.appendChild(figure);
figure.appendChild(img);
