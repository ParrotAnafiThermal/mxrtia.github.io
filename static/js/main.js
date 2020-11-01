window.onload = function () {
    initialize_intro()
}

function initialize_intro() {
    var intro = document.createElement("DIV");
    intro.setAttribute('id', 'intro');
    intro.setAttribute('align', 'left');

    var header_p = document.createElement("P");
    header_p.innerText = "To jest aplikacja webowa służąca do analizy danych zapisanych na serwerze (przeglądanie obrazów z drona)."

    var next_button_p = document.createElement("P");
    var next_button = document.createElement("BUTTON");
    next_button.setAttribute("onClick", "introExit()");
    next_button.innerHTML = "Druga strona";
    next_button_p.appendChild(next_button); 

    intro.appendChild(header_p)
    intro.appendChild(next_button_p);

    var parent = document.getElementById("mainDiv");
    parent.appendChild(intro);
}


function introExit() {
    var intro = document.getElementById("intro");
    intro.parentNode.removeChild(intro);
    initialize_form()
}


function initialize_form() {
    var form = document.createElement("DIV");
    form.setAttribute('id', 'form');
    form.setAttribute('align', 'left');
    
    var header_p = document.createElement("P");
    header_p.innerText = "To jest druga strona."
    form.appendChild(header_p);

    var next = document.createElement("BUTTON");
    next.setAttribute("onClick", "saveForm()");
    next.innerHTML = "Koniec"

    form.appendChild(next);

    var parent = document.getElementById("mainDiv");
    parent.appendChild(form);
}

function init_choice(text, group_name, parent) {
    var p = document.createElement("P");
    var label = document.createElement("TEXT");
    label.textContent = text;
    
    var radio1_p = document.createElement("P");
    var radio1 = document.createElement("INPUT");
    radio1.setAttribute("type", "radio");
    radio1.setAttribute("name", group_name);
    radio1.setAttribute("value", "tak");
    var radio1_label = document.createElement("LABEL");
    radio1_label.textContent = "Tak";
    
    var radio2_p = document.createElement("P");
    var radio2 = document.createElement("INPUT");
    radio2.setAttribute("type", "radio");
    radio2.setAttribute("name", group_name);
    radio2.setAttribute("value", "nie");
    var radio2_label = document.createElement("LABEL");
    radio2_label.textContent = "Nie";

    radio1_p.appendChild(radio1);
    radio1_p.appendChild(radio1_label);
    radio2_p.appendChild(radio2);
    radio2_p.appendChild(radio2_label);
    p.appendChild(label);
    p.appendChild(radio1_p);
    p.appendChild(radio2_p);

    parent.appendChild(p);
}

function initialize_subDiv() {
    var div = document.createElement("div");
    div.setAttribute('id', 'subDiv')
    div.setAttribute('align', 'left');
    insertNextButton(div)

    var parent = document.getElementById("mainDiv")
    if (parent != null) {
        parent.appendChild(div);   
    } else {
        console.error("Parent not found.")
    }

}


function isNumber(e) {
    var ch = String.fromCharCode(e.which);

    if(!(/[0-9]/.test(ch))) {
        e.preventDefault();
    }
}

function saveForm() {

    var form = document.getElementById("form");
    form.parentNode.removeChild(form);
}

function appendChild(parent, element) {
    try {
        parent.appendChild(element);
    }
    catch (e){
        if (parent == null) {
            throw "Parent not found!"
        }
        else {
            throw "Element not found"
        }
    }
}

function normalizeNumber(number) {
    return (number < 10) ? '0' + number.toString() : number.toString();
}


