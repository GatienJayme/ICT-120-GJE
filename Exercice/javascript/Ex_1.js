document.addEventListener("DOMContentLoaded",init);
function fdiv_1() {
    div1.classList.add("div1")
}
function fdiv_2() {
    div2.classList.add("div2")
}
function fdiv_3() {
    div3.classList.add("div3")
}
function f_4() {
    div3.classList.remove("div3")
}
function init() {
    div1.addEventListener("click", fdiv_1);
    div2.addEventListener("click", fdiv_2);
    div3.addEventListener("mouseover", fdiv_3);
    div3.addEventListener("mouseleave", f_4);
}
