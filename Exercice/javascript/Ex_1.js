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
function fdiv_4() {
    if(chk1.checked == true && chk2.checked == true){
        console.log("div4");
        div4.classList.add("div4")
        div4.innerHTML = "YES";
    }
    else {
        console.log("NO");
    }
}

function fdiv_5() {
    div5.classList.remove()
    div5.innerHTML = ""
}
function fdiv_6() {
    div6.txtName.value.substr(0,1)

}

function fdiv_6() {
    let x = div6
}

function init() {
    div1.addEventListener("click", fdiv_1);
    div2.addEventListener("click", fdiv_2);
    div3.addEventListener("mouseover", fdiv_3);
    div3.addEventListener("mouseleave", f_4);
    chk1.addEventListener("click", fdiv_4);
    chk2.addEventListener("click", fdiv_4);
    div5.addEventListener("click", fdiv_5);
    div6.addEventListener("keyup", fdiv_6);
}