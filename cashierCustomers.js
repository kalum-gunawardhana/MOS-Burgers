document.addEventListener('DOMContentLoaded', () => {
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
});
