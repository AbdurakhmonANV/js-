const MenuEl = document.querySelector("#menu__components");
const OpenMenuEl = document.querySelector("#open_menu");
const CloseMenuEl = document.querySelector("#close_menu")

OpenMenuEl.addEventListener("click" , () => {
    MenuEl.classList.add("menu-openinng-list");
    CloseMenuEl.classList.add("open-menu");
    OpenMenuEl.classList.add("close-menu-none");
} );
CloseMenuEl.addEventListener("click" , () =>{
    MenuEl.style.margin = "0"
    CloseMenuEl.classList.add("close-menu-none");
    OpenMenuEl.classList.add("close-menu-block");
})



