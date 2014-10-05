document.getElementById("addPhoneNum").onclick = addField;
document.getElementById("submit").onclick = fieldIncrementer;
   
function addField() {
    var list = document.getElementById("phoneList");
    var listItem = list.getElementsByTagName("div");
    var clone = listItem[0].cloneNode(true);
    list.appendChild(clone);
}

function fieldIncrementer(){
    var list = document.getElementById("phoneList");
    var divs = list.getElementsByClassName("form-group");
    var labels = list.getElementsByTagName("label");
    var inputs = list.getElementsByTagName("input");
    var selects = list.getElementsByTagName("select");
    for (var i = 0; i < divs.length; i++ ){
        divs[i].attributes.id.value += i;
        labels[i].attributes.for.value += i;
        inputs[i].attributes.name.value += i;
        inputs[i].attributes.id.value += i;
        selects[i].attributes.name.value += i;
        console.log(divs[i]);
        console.log(labels[i]);
        console.log(inputs[i]);
        console.log(selects[i]);
        document.forms[0].submit();
    }
}