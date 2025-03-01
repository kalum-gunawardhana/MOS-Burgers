/*document.addEventListener('DOMContentLoaded', () => {
    const customerForm = document.getElementById('customerForm');
    const customerTableBody = document.querySelector('#customerTable tbody');

    let customers = [];

    function renderTable() {
        customerTableBody.innerHTML = '';

        customers.forEach((customer, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>
                    <button class="btn-edit" onclick="editCustomer(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteCustomer(${index})">Delete</button>
                </td>
            `;
            customerTableBody.appendChild(row);
        });
    }

    customerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        customers.push({ name, email, phone });

        customerForm.reset();
        renderTable();
    });

    window.deleteCustomer = (index) => {
        customers.splice(index, 1);
        renderTable();
    };

    window.editCustomer = (index) => {
        const customer = customers[index];

        document.getElementById('name').value = customer.name;
        document.getElementById('email').value = customer.email;
        document.getElementById('phone').value = customer.phone;

        customers.splice(index, 1);
        renderTable();
    };
});*/

document.getElementById("customerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    addCustomer();
});

document.addEventListener("DOMContentLoaded", loadCustomers);

function addCustomer() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();

    if (!name || !email || !phone) {
        alert('All fields are required!');
        return;
    }

    fetch("http://localhost:8080/customer/add", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to add customer');
        }
        return response.text();
    }).then(data => {
        alert('Customer added successfully');
        document.getElementById("customerForm").reset();
        loadCustomers();
    }).catch(error => {
        alert('Failed to add customer');
    });
}

function loadCustomers() {
    fetch("http://localhost:8080/customer/all")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch customers');
            }
            return response.json();
        })
        .then(data => {
            const customerTableBody = document.querySelector('#customerTable tbody');
            customerTableBody.innerHTML = '';

            data.forEach((customer) => {
                const row = document.createElement('tr');

                row.innerHTML = `
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>
                    <button class="btn-edit" onclick="editCustomer(${customer.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteCustomer(${customer.id})">Delete</button>
                </td>
            `;

                customerTableBody.appendChild(row);
            });
        })
        .catch(error => {
            alert("Failed to load customers. Please try again.");
        });
}

function editCustomer(customerId) {
    // Fetch existing customer data
    fetch(`http://localhost:8080/customer/${customerId}`)
        .then(response => response.json())
        .then(customer => {
            // Fill the form fields with customer data
            document.getElementById('name').value = customer.name;
            document.getElementById('email').value = customer.email;
            document.getElementById('phone').value = customer.phone;

            // Change form submit behavior to update instead of adding a new customer
            let form = document.getElementById("customerForm");
            form.onsubmit = function (event) {
                event.preventDefault(); // Prevent refresh
                updateCustomer(customerId);
            };
        })
        .catch(error => {
            alert("Failed to fetch customer data!");
            console.error(error);
        });
}

function updateCustomer(customerId) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();

    if (!name || !email || !phone) {
        alert('All fields are required!');
        return;
    }

    fetch(`http://localhost:8080/customer/update/${customerId}`, {
        method: 'PUT', // Use PUT for updates
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to update customer');
        }
        return response.text();
    }).then(data => {
        alert('Customer updated successfully');
        document.getElementById("customerForm").reset(); // Clear form
        document.getElementById("customerForm").onsubmit = addCustomer; // Restore original submit behavior
        loadCustomers(); // Reload customer list
    }).catch(error => {
        alert('Failed to update customer');
    });
}

function deleteCustomer(customerId) {
    if (!confirm("Are you sure you want to delete this customer?")) {
        return; // Exit if user cancels
    }

    fetch(`http://localhost:8080/customer/delete/${customerId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete customer');
        }
        return response.text();
    })
    .then(data => {
        alert('Customer deleted successfully');
        loadCustomers(); // Reload customer list after deletion
    })
    .catch(error => {
        alert('Failed to delete customer');
        console.error(error);
    });
}