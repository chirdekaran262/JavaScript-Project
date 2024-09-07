function updateAndUpdate() {
    console.log("Updating List...")
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc])
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    update();
}
function update() {
    console.log("Updating List...")
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);

    }

    //populate the table
    let tablebody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `<tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
            </tr>`

    });
    tablebody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", updateAndUpdate);
update();
function deleted(itemindex) {
    console.log("Delete", itemindex);
    itemJsonArrayStr = localStorage.getItem('itemJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(itemindex, 1)
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    update();
}
function clearstrorage() {
    if (confirm("Do you really want clear the list? ")) {
        console.log("Clearing the storage ")
        localStorage.clear()
        update();
    }
}