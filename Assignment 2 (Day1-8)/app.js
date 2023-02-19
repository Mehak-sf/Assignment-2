var users = [
    {
        firstName: "Michael",
        middleName: "-",
        lastName: "Watson",
        email: "michael@gmail.com",
        phone: "9876543210",
        role: "Intern",
        address: "Frankwood Lane"
      },
      {
        firstName: "Joe",
        middleName: "Jane",
        lastName: "Bills",
        email: "joe@gmail.com",
        phone: "8897657890",
        role: "SDE",
        address: "Green Park"
      },
      {
        firstName: "John",
        middleName: "-",
        lastName: "Williams",
        email: "john@gmail.com",
        phone: "7567854560",
        role: "Web Developer",
        address: "Friends Street"
      }
  ];
  
  function showData() {
    console.log("showdata");
    var table = document.getElementById("user-table");
    var tbody = document.createElement("tbody");
    for (var i = 0; i < users.length; i++) {
      var tr = document.createElement("tr");
  
      // First name
      var td = document.createElement("td");
      td.innerHTML = users[i].firstName;
      tr.appendChild(td);
  
      // Middle name
      td = document.createElement("td");
      td.innerHTML = users[i].middleName;
      tr.appendChild(td);
  
      // Last name
      td = document.createElement("td");
      td.innerHTML = users[i].lastName;
      tr.appendChild(td);
  
      // Email
      td = document.createElement("td");
      td.innerHTML = users[i].email;
      tr.appendChild(td);
  
      // Phone
      td = document.createElement("td");
      td.innerHTML = users[i].phone;
      tr.appendChild(td);
  
      // Role
      td = document.createElement("td");
      td.innerHTML = users[i].role;
      tr.appendChild(td);
  
      // Address
      td = document.createElement("td");
      td.innerHTML = users[i].address;
      tr.appendChild(td);
  
      // Edit button
      td = document.createElement("td");
      var editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.setAttribute("id", "editbtn");
      editButton.addEventListener("click", makeEditable);
      td.appendChild(editButton);
  
      // Delete button
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener("click", deleteRow);
      td.appendChild(deleteButton);
  
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
  }
  
  function deleteRow(event) {
    var button = event.target;
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  function makeEditable(event) {
    var button = event.target;
    var row = button.parentNode.parentNode;
    var cells = row.querySelectorAll("td:not(:last-child)");
  
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var content = cell.innerText;
      cell.innerHTML = '<input type="text" value="' + content + '">';
    }
  
    button.innerHTML = "Save";
    button.setAttribute("id", "savebtn");
    button.removeEventListener("click", makeEditable);
    button.addEventListener("click", saveChanges);
  
    var cancelButton = document.createElement("button");
    cancelButton.setAttribute("id", "cancelbtn");
    cancelButton.innerHTML = "Cancel";
    cancelButton.addEventListener("click", cancelChanges);
  
    row.lastChild.appendChild(cancelButton);
  }
  
  function saveChanges(event) {
    var button = event.target;
    var row = button.parentNode.parentNode;
    var cells = row.querySelectorAll("td:not(:last-child)");
  
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var input = cell.firstChild;
      cell.innerHTML = input.value;
    }
  
    button.innerHTML = "Edit";
    button.setAttribute("id", "editbtn");
    button.removeEventListener("click", saveChanges);
    button.addEventListener("click", makeEditable);
  
    document.getElementById("cancelbtn").remove();
  }
  
  function cancelChanges(event) {
    var button = event.target;
    var row = button.parentNode.parentNode;
    var cells = row.querySelectorAll("td:not(:last-child)");
  
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var input = cell.firstChild;
      cell.innerHTML = input.defaultValue;
    }
  
    let editButton = document.getElementById("savebtn");
    editButton.innerHTML = "Edit";
    button.setAttribute("id", "editbtn");
    editButton.removeEventListener("click", saveChanges);
    editButton.addEventListener("click", makeEditable);
  
    button.remove();
  }
  