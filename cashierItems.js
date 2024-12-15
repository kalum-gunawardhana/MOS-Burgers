document.addEventListener('DOMContentLoaded', () => {
    const burgerForm = document.getElementById('burgerForm');
    const burgerTableBody = document.querySelector('#burgerTable tbody');

    let burgers = []; // Array to store burger data

    // Function to render burgers in the table
    function renderTable() {
        burgerTableBody.innerHTML = ''; // Clear existing rows

        burgers.forEach((burger, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${burger.name}</td>
                <td>Rs.${burger.price.toFixed(2)}</td>
                <td>${burger.description}</td>
                <td>
                    <button class="btn-edit" onclick="editBurger(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteBurger(${index})">Delete</button>
                </td>
            `;

            burgerTableBody.appendChild(row);
        });
    }

    // Add burger
    burgerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('burgerName').value;
        const price = parseFloat(document.getElementById('price').value);
        const description = document.getElementById('description').value;

        burgers.push({ name, price, description });

        burgerForm.reset();
        renderTable();
    });

    // Delete burger
    window.deleteBurger = (index) => {
        burgers.splice(index, 1); // Remove burger from the array
        renderTable(); // Re-render the table
    };

    // Edit burger
    window.editBurger = (index) => {
        const burger = burgers[index];

        document.getElementById('burgerName').value = burger.name;
        document.getElementById('price').value = burger.price;
        document.getElementById('description').value = burger.description;

        // Remove the burger to update after editing
        burgers.splice(index, 1);
        renderTable();
    };
});
