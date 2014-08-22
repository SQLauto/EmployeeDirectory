var PhoneNumAdd =
{
    init: function () {
        var link = document.getElementById("addPhoneNum");
        link.addEventListener("click", PhoneNumAdd.addField, false)
    },
    addField: function () {
        var list = document.getElementById("phoneList");
        var listItem = list.getElementsByTagName("div");
        var addButton = document.getElementById("addPhoneNum");
        var clone = listItem[0].cloneNode(true);
        list.insertBefore(clone, addButton);
        console.log(list);
        console.log(listItem);
    }
}
PhoneNumAdd.init();