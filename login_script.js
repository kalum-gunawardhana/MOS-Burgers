// console.log(document.getElementById("emailInputId").value);

let usernamesArray = [];
let passwordsArray = [];

// let users=[
//     {username:"user1",password:"pass@123"},
//     {username:"user2",password:"pass@456"}
// ];

function loginFun() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // console.log(email);
    // console.log(password);

    // let user=users.find(u=>u.username===username);

    if(!username || !password){
        alert("Please fill in both fields.");
        return;
    }

    // if(!validateUsername(username)){
    //     alert("Invalid username.");
    //     return;
    // }

    // if(!validatePassword(password)){
    //     alert("Invalid password.");
    //     return;
    // }

    usernamesArray.push(username);
    passwordsArray.push(password);

    // console.log(usernamesArray);
    // console.log(passwordsArray);

    alert("Sign-In Successful!");

    window.location.assign("cashierHome.html");

    document.getElementById("username").reset();
    document.getElementById("password").reset();
}