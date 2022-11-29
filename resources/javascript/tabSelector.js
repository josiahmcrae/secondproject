

function tabSelected(index) {
    var cheese = document.getElementById("cheese");
    var cheeseTab = document.getElementById("cheeseTab");
    var hamburger = document.getElementById("hamburger");
    var hamburgerTab = document.getElementById("hamburgerTab");
    var combo = document.getElementById("combo");
    var comboTab = document.getElementById("comboTab");
    var pepperoni = document.getElementById("pepperoni");
    var peperoniTab = document.getElementById("pepperoniTab");

    cheese.classList.remove("selected");
    cheeseTab.classList.remove("tabSelected");
    hamburger.classList.remove("selected");
    hamburgerTab.classList.remove("tabSelected");
    combo.classList.remove("selected");
    comboTab.classList.remove("tabSelected");
    pepperoni.classList.remove("selected");
    peperoniTab.classList.remove("tabSelected");

    if (index == 1) {
        cheese.classList.add('selected');
        cheeseTab.classList.add("tabSelected");
    } else if (index == 2) {
        hamburger.classList.add('selected');
        hamburgerTab.classList.add("tabSelected");
    } else if (index == 3) {
        combo.classList.add("selected");
        comboTab.classList.add("tabSelected");
    } else {
        pepperoni.classList.add('selected');
        peperoniTab.classList.add("tabSelected");
    }
}