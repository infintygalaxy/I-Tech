// initialize a variable to keep track of user count
let userCount = 0;
// function to validate email using regex
const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
};
// function to register a new client
const register_new_client = () => {
    // get the values from input field
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let tbody = document.querySelector('#user-table');
    let newRow = document.createElement('tr');

    let userName = document.createElement('td');
    let userEmail = document.createElement('td');
    let userPassword = document.createElement('td');
    let serialNumber = document.createElement('td');
    let deleteData = document.createElement('td');
    let editData = document.createElement('td');

    userCount++; // increment user count for every new entry

    serialNumber.innerText = userCount;
    userName.innerText = name;
    userEmail.innerText = email;
    userPassword.innerText = password;
    deleteData.insertAdjacentHTML("beforeend", "<button onclick='deleteRow(this)'>Delete</button>");
    editData.insertAdjacentHTML("beforeend", "<button onclick='editRow(this)'>Edit</button>");

    // if the email is valid
    if (validateEmail(email)) {
        newRow.appendChild(serialNumber);
        newRow.appendChild(userName);
        newRow.appendChild(userEmail);
        newRow.appendChild(userPassword);
        newRow.appendChild(deleteData);
        newRow.appendChild(editData);
        tbody.appendChild(newRow);
        document.getElementById("user-form").reset();
        alert("Registation sucessful");
    } else {
        alert("Invalid email format. Please enter a valid email address.");
    }
    document.getElementById("user-form").reset();
};
// function to delete a row
const deleteRow = (btn) => {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
};
// function to edit a row
const editRow = (btn) => {
    let row = btn.parentNode.parentNode;
    let cells = row.querySelectorAll("td");

    let name = cells[1].textContent;
    let email = cells[2].textContent;
    let password = cells[3].textContent;

    document.getElementById('username').value = name;
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;

    row.parentNode.removeChild(row);
    userCount--; // decrement user count on delete
};
// function tcheck the login credentials
const loginTest = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const table = document.getElementById('user-table');
    const rows = table.rows;
    let found = false;

    for (let i = 1; i < rows.length; i++) { // Start at 1 to skip the header row
        const rowUsername = rows[i].cells[1].textContent;
        const rowPassword = rows[i].cells[3].textContent;

        if (username === rowUsername && password === rowPassword) {
            found = true;
            break;
        }
    }

    if (found) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// function to opens a new window for the login page
const login = () => {
    const newWindow = window.open("login.html", "", "width=400,height=600,right=" + (screen.width - 180) + ",top=" + (screen.height / 2 - 25));
}
// function to opens a new window for the registration page
const register = () => {
    const newWindow = window.open("registration.html", "", "width=450,height=600,left=" + (screen.width - 14) + ",top=" + (screen.height / 2 - 25));
}
