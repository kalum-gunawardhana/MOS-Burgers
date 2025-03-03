function allItems() {
    fetch('http://localhost:8080/item/all')
        .then(response => response.json())
        .then(data => {
            let itemsTableBody = document.querySelector('#itemsTable tbody');

            if (!itemsTableBody) {
                console.error("Error: Table body not found!");
                return;
            }

            itemsTableBody.innerHTML = '';

            data.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.itemName}</td>
                    <td>Rs.${item.price.toFixed(2)}</td>
                    <td>
                        <button class="btn btn-primary" onclick="editItem(${index})">View</button>
                        <button class="btn btn-danger" onclick="deleteItem(${index})">Delete</button>
                        <button class="btn btn-success" onclick="updateItem(${index})">Update</button>
                    </td>
                `;
                itemsTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching items:', error));
}

document.addEventListener("DOMContentLoaded", function () {
    allItems();
});

function addItem() {
    const itemData = {
        itemName: document.getElementById('name').value,
        price: parseFloat(document.getElementById('price').value),
        discount: 1.0,
        category: document.getElementById('category').value
    };

    fetch('http://localhost:8080/item/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add item');
            }
            return response.text();
        })
        .then(data => {
            alert('Item added successfully!');
            document.getElementById('burgerForm').reset();
            allItems();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error adding item');
        });
}

function editItem(id) {
    let newId = id + 1;

    fetch(`http://localhost:8080/item/get/${newId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Item not found");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("name").value = data.itemName;
            document.getElementById("price").value = data.price;
            document.getElementById("category").value = data.category;
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error fetching item");
        });
}

function updateItem(id) {
    let newId = id + 1;

    const itemData = {
        itemName: document.getElementById("name").value,
        price: parseFloat(document.getElementById("price").value),
        discount: 1.0,
        category: document.getElementById("category").value
    };

    fetch(`http://localhost:8080/item/update/${newId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itemData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to update item");
            }
            return response.text();
        })
        .then(data => {
            alert("Item updated successfully!");
            document.getElementById("burgerForm").reset();
            document.getElementById("burgerForm").onsubmit = addItem;
            allItems();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error updating item");
        });
}

function deleteItem(id) {
    let newId = id + 1;

    fetch(`http://localhost:8080/item/delete/${newId}`, {
        method: "DELETE"
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to delete item");
            }
            return response.text();
        })
        .then(data => {
            alert("Item deleted successfully!");
            allItems();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error deleting item");
        });
}