let list = document.getElementById("list").getElementsByTagName("li");
// console.log(list);

// on click, replace li with text field
for (let i = 0; i < list.length; i++) {
    let currentItem = list[i];
    currentItem.onclick = function() {
        toggleTextField(currentItem, list);
    }
}

function toggleTextField(item, list) {
    untoggleTextField(list);
    // console.log(item.innerHTML);
    let inputTextField = document.createElement("li");
    inputTextField.innerHTML = `<input value=${item.innerHTML}>`;
    inputTextField.addEventListener('keyup', ({key}) => {
        if (key === 'Enter') {
            // console.log(inputTextField.value);
            untoggleTextField(list);
        }
    })

    item.replaceWith(inputTextField);
}

function untoggleTextField(list) {
    let textField;

    for (let i = 0; i < list.length; i++) {
        let currentItem = list[i];
        let textFields = currentItem.getElementsByTagName("input");
        if (textFields.length > 0) {
            // console.log(textFields[0].value);

            let listItem = document.createElement("li");
            listItem.innerHTML = textFields[0].value;
            listItem.onclick = function() {
                toggleTextField(listItem, list);
            }
            textFields[0].replaceWith(listItem);
        }
    }
}