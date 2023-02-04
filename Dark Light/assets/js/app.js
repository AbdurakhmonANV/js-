const darkButtun = document.getElementById("dark-buttun");
const lightButton = document.getElementById("light_button");


darkButtun.addEventListener("click", (e) => {
  document.body.style.background = "black";
  localStorage.setItem("theme" ,"dark");
let theme = localStorage.getItem("theme")


if (theme === "dark"){
  document.body.style.background = "black";


}
else{
  document.body.style.background = "white";

}
})


if ( localStorage.getItem("theme")=== "dark"){
  document.body.style.background = "black";

}
else{
  document.body.style.background = "white";

}
 

lightButton.addEventListener("click", (e) => {

  document.body.style.background = "white";
  localStorage.setItem("theme", "white");


});












const themeControllerEl = document.querySelector(".them__controller");
const circleEl = document.querySelector(".circle");



const leftMoon =document.querySelector(".left_moon")

const sunIconEl = document.querySelector("#sun");
const moonIconEl = document.querySelector("#moon");

function styleEl(sun, moon) {
  sunIconEl.style.display = sun;
  moonIconEl.style.display = moon;
}



themeControllerEl.addEventListener('click', () => {
  circleEl.classList.toggle("active");
  let theme = localStorage.getItem("theme");

  if (circleEl.classList.contains("active") ) {
    styleEl("none", "block");
    document.body.style.background = "black";
    localStorage.setItem("theme" ,"dark");
   
    theme.classList.remove("active");
    



  } else {
    styleEl("block", "none");
    document.body.style.background = "white";

      localStorage.setItem("theme", "white");


  }
})

