// let listItems = document.querySelectorAll("#list li");
// let storedListItems = [];

// // store list items
// for (let i = 0; i < listItems.length; i++) {
//     storedListItems.push(listItems[i].innerHTML);
// }

// // on click, replace li with text field
// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].onclick = function() {

//     }
// }

let list = document.getElementById("list").getElementsByTagName("li");
// console.log(list);

// throw new Error("Force exit.");

// on click, replace li with text field
for (let i = 0; i < list.length; i++) {
    let currentItem = list[i];
    currentItem.onclick = function() {
        toggleTextField(currentItem, list);
    }
}

function toggleTextField(item, list) {
    untoggleTextField(list);
    console.log(item.innerHTML);
    let inputTextField = document.createElement("input");
    inputTextField.value = item.innerHTML;
    item.replaceWith(inputTextField);
}

function untoggleTextField(list) {
    let textFields = document.getElementById("list").getElementsByTagName("input");
    // let listItem = document.createElement("li");
    // console.log(textField);
    // textField.replaceWith();
    if (textFields.length > 0) {
        // console.log(textField);
        let listItem = document.createElement("li");
        listItem.innerHTML = textFields[0].value;
        listItem.onclick = function() {
            toggleTextField(listItem, list);
        }
        textFields[0].replaceWith(listItem);
    }
    textFields = [];
}