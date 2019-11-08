document.addEventListener("DOMContentLoaded", init);

function fdiv_1() {
    activite.classList.remove("d-none")
    prix.classList.add("d-none")
    information.classList.add("d-none")
    contacte.classList.add("d-none")
    homepage.classList.add("d-none")
}

function fdiv_2() {
    prix.classList.remove("d-none")
    activite.classList.add("d-none")
    information.classList.add("d-none")
    contacte.classList.add("d-none")
    homepage.classList.add("d-none")
}

function fdiv_3() {
    information.classList.remove("d-none")
    activite.classList.add("d-none")
    prix.classList.add("d-none")
    contacte.classList.add("d-none")
    homepage.classList.add("d-none")
}

function fdiv_4() {
    contacte.classList.remove("d-none")
    activite.classList.add("d-none")
    prix.classList.add("d-none")
    information.classList.add("d-none")
    homepage.classList.add("d-none")

}

function fdiv_5() {
    homepage.classList.remove("d-none")
    activite.classList.add("d-none")
    prix.classList.add("d-none")
    information.classList.add("d-none")
    contacte.classList.add("d-none")
}

function fdiv_color(event) {
    cmdmenu.classList.remove('appuyer')
    cmdactivite.classList.remove('appuyer')
    cmdprix.classList.remove('appuyer')
    cmdinformation.classList.remove('appuyer')
    cmdcontacte.classList.remove('appuyer')
    button = event.target
    button.classList.add("appuyer")

}

function init() {
    cmdactivite.addEventListener("click", fdiv_1);
    cmdprix.addEventListener("click", fdiv_2);
    cmdinformation.addEventListener("click", fdiv_3);
    cmdcontacte.addEventListener("click", fdiv_4);
    cmdmenu.addEventListener("click", fdiv_5);
    cmdactivite.addEventListener("click", fdiv_color);
    cmdprix.addEventListener("click", fdiv_color);
    cmdinformation.addEventListener("click", fdiv_color);
    cmdcontacte.addEventListener("click", fdiv_color);
    cmdmenu.addEventListener("click", fdiv_color);
}