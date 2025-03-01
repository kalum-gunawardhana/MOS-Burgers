function login(event) {
    event.preventDefault();

    let username0 = document.getElementById('username').value;

    let password0 = document.getElementById('password').value;

    fetch("http://localhost:8080/user/login", {
        method: 'POST',

        headers: {
            'content-type': 'application/json'
        },

        body: JSON.stringify({
            username: username0,
            password: password0
        })

    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to login');
        }

        return response.text();
    }).then(data => {
        alert('Login successful');
        window.location.href = "cashierIterface.html";
    }).catch(error => {
        alert('Failed to login');
    });
}