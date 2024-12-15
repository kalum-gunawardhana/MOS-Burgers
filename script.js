const cashierUsername = "cashier";
const cashierPassword = "cashier123";

const adminUsername = "admin";
const adminPassword = "admin123";

function login(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    // console.log(username);

    let password = document.getElementById('password').value;
    // console.log(password);

    if (username === cashierUsername && password === cashierPassword) {
        alert('Login Successful');
        window.location.href = 'cashierIterface.html';
    } else if (username === adminUsername && password === adminPassword) {
        alert('Login Successful');
        window.location.href = 'admin.html';
    } else {
        alert('Invalid Username or Password');
    } 
}