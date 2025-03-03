const foodMenuDiv = document.getElementById('food_menu');

function loadBurgers() {
    fetch('http://localhost:8080/item/getCategory/Burgers')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const foodMenuDiv = document.getElementById('foodMenuDiv');
            if (!foodMenuDiv) {
                console.error("Error: Food menu div not found!");
                return;
            }

            foodMenuDiv.innerHTML = '';

            if (data.length === 0) {
                foodMenuDiv.innerHTML = "<p>No items found in this category.</p>";
                return;
            }

            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('col-md-3', 'mb-3');

                card.innerHTML = `
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">${item.itemName}</h5>
                        <p class="card-text"><strong>Price:</strong> ${item.price} LKR</p>
                        <p class="card-text"><strong>Discount:</strong> ${item.discount}%</p>
                        <button class="btn btn-dark" onclick="addToOrder('${item.id}')">Add to Order</button>
                    </div>
                </div>
            `;

                foodMenuDiv.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching category items:', error);
            alert('Failed to load items. Please try again later.');
        });

}

function loadSubmarines() {
    fetch('http://localhost:8080/item/getCategory/Submarines')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const foodMenuDiv = document.getElementById('foodMenuDiv');
            if (!foodMenuDiv) {
                console.error("Error: Food menu div not found!");
                return;
            }

            foodMenuDiv.innerHTML = '';

            if (data.length === 0) {
                foodMenuDiv.innerHTML = "<p>No items found in this category.</p>";
                return;
            }

            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('col-md-3', 'mb-3');

                card.innerHTML = `
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">${item.itemName}</h5>
                        <p class="card-text"><strong>Price:</strong> ${item.price} LKR</p>
                        <p class="card-text"><strong>Discount:</strong> ${item.discount}%</p>
                        <button class="btn btn-dark" onclick="addToOrder('${item.id}')">Add to Order</button>
                    </div>
                </div>
            `;

                foodMenuDiv.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching category items:', error);
            alert('Failed to load items. Please try again later.');
        });

}

function loadFries() {
    fetch('http://localhost:8080/item/getCategory/Fries')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const foodMenuDiv = document.getElementById('foodMenuDiv');
            if (!foodMenuDiv) {
                console.error("Error: Food menu div not found!");
                return;
            }

            foodMenuDiv.innerHTML = '';

            if (data.length === 0) {
                foodMenuDiv.innerHTML = "<p>No items found in this category.</p>";
                return;
            }

            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('col-md-3', 'mb-3');

                card.innerHTML = `
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">${item.itemName}</h5>
                        <p class="card-text"><strong>Price:</strong> ${item.price} LKR</p>
                        <p class="card-text"><strong>Discount:</strong> ${item.discount}%</p>
                        <button class="btn btn-dark" onclick="addToOrder('${item.id}')">Add to Order</button>
                    </div>
                </div>
            `;

                foodMenuDiv.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching category items:', error);
            alert('Failed to load items. Please try again later.');
        });

}

function loadPasta() {
    fetch('http://localhost:8080/item/getCategory/Pasta')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const foodMenuDiv = document.getElementById('foodMenuDiv');
            if (!foodMenuDiv) {
                console.error("Error: Food menu div not found!");
                return;
            }

            foodMenuDiv.innerHTML = '';

            if (data.length === 0) {
                foodMenuDiv.innerHTML = "<p>No items found in this category.</p>";
                return;
            }

            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('col-md-3', 'mb-3');

                card.innerHTML = `
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">${item.itemName}</h5>
                        <p class="card-text"><strong>Price:</strong> ${item.price} LKR</p>
                        <p class="card-text"><strong>Discount:</strong> ${item.discount}%</p>
                        <button class="btn btn-dark" onclick="addToOrder('${item.id}')">Add to Order</button>
                    </div>
                </div>
            `;

                foodMenuDiv.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching category items:', error);
            alert('Failed to load items. Please try again later.');
        });

}

function loadChicken() {
    fetch('http://localhost:8080/item/getCategory/Chicken')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const foodMenuDiv = document.getElementById('foodMenuDiv');
            if (!foodMenuDiv) {
                console.error("Error: Food menu div not found!");
                return;
            }

            foodMenuDiv.innerHTML = '';

            if (data.length === 0) {
                foodMenuDiv.innerHTML = "<p>No items found in this category.</p>";
                return;
            }

            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('col-md-3', 'mb-3');

                card.innerHTML = `
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">${item.itemName}</h5>
                        <p class="card-text"><strong>Price:</strong> ${item.price} LKR</p>
                        <p class="card-text"><strong>Discount:</strong> ${item.discount}%</p>
                        <button class="btn btn-dark" onclick="addToOrder('${item.id}')">Add to Order</button>
                    </div>
                </div>
            `;

                foodMenuDiv.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching category items:', error);
            alert('Failed to load items. Please try again later.');
        });

}

function loadBeverages() {
    fetch('http://localhost:8080/item/getCategory/Beverages')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const foodMenuDiv = document.getElementById('foodMenuDiv');
            if (!foodMenuDiv) {
                console.error("Error: Food menu div not found!");
                return;
            }

            foodMenuDiv.innerHTML = '';

            if (data.length === 0) {
                foodMenuDiv.innerHTML = "<p>No items found in this category.</p>";
                return;
            }

            data.forEach(item => {

                const card = document.createElement('div');
                card.classList.add('col-md-3', 'mb-3');

                card.innerHTML = `
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">${item.itemName}</h5>
                        <p class="card-text"><strong>Price:</strong> ${item.price} LKR</p>
                        <p class="card-text"><strong>Discount:</strong> ${item.discount}%</p>
                        <button class="btn btn-dark" onclick="addToOrder('${item.id}')">Add to Order</button>
                    </div>
                </div>
            `;

                foodMenuDiv.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching category items:', error);
            alert('Failed to load items. Please try again later.');
        });

}

let addOrderArray = [];

// Add to order function
function addToOrder(itemCode) {
    fetch(`http://localhost:8080/item/get/${itemCode}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const existingItem = addOrderArray.find(item => item.itemCode == data.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.total = existingItem.price * existingItem.quantity;
            } else {

                addOrderArray.push({
                    itemCode: data.id,
                    itemName: data.itemName,
                    price: data.price,
                    quantity: 1,
                    total: data.price
                });
            }

            updateOrderTable();

        })
        .catch(error => {
            console.error('Error fetching item:', error);
            alert('Failed to add item to order. Please try again later.');
        });
}

let totalAmount = 0;

function updateOrderTable() {
    const tableBody = document.getElementById('tbodyId');
    tableBody.innerHTML = '';
    totalAmount = 0;

    addOrderArray.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.itemName}</td>
            <td>${item.price.toFixed(2)} LKR</td>
            <td>${item.quantity}</td>
            <td>${item.total.toFixed(2)} LKR</td>
            <td><button class="btn btn-danger" onclick="removeFromOrder('${item.itemCode}')">Remove</button></td>
        `;
        tableBody.appendChild(row);
        totalAmount += item.total;
    });

    // Safely update the total amount
    const totalAmountElement = document.getElementById('totalAmount');
    if (totalAmountElement) {
        totalAmountElement.innerText = `Total: ${totalAmount.toFixed(2)} LKR`;
    }
}

// Order remove function
function removeFromOrder(itemCode) {
    const index = addOrderArray.findIndex(item => item.itemCode == itemCode);
    if (index !== -1) {
        addOrderArray.splice(index, 1);
        updateOrderTable();
    }
}

// Calculator amount function
function calTotalAmou() {
    let tm = document.getElementById('totalAmount');
    if (tm) {
        tm.innerHTML = `Total: ${totalAmount.toFixed(2)} LKR`;
    }
}

// Function to place an order
async function placeOrder() {
    const customerId = parseInt(document.getElementById("customerId").value);

    if (!customerId || addOrderArray.length === 0) {
        alert("Please enter a valid Customer ID and add at least one item.");
        return;
    }

    const orderData = {
        customerId: customerId,
        totalPrice: totalAmount,
        orderItems: addOrderArray
    };
    console.log(orderData.orderItems);

    try {
        const response = await fetch("http://localhost:8080/order/placeOrder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Order Placed Successfully:", result);

        // Reset after placing order
        addOrderArray = [];
        totalAmount = 0;
        alert("Order placed successfully!");

    } catch (error) {
        console.error("Failed to place order:", error);
    }
}

//----------------generate Receipt funtions----------------
function generateReceipt() {
    // Get the table body and rows
    const tableBody = document.getElementById('tbodyId');
    const rows = tableBody.getElementsByTagName('tr');

    if (rows.length === 0) {
        alert('No items in the order. Please add items to generate a receipt.');
        return;
    }

    // Initialize receipt content
    let receiptContent = `\t\t\t*** <b>MOS Burger POS System  Receipt</b> ***\n\n`;
    let totalAmount = 0;

    // Loop through each row to gather details
    for (let row of rows) {
        const itemName = row.cells[0].textContent; // Item Name
        const price = parseFloat(row.cells[1].textContent); // Price
        const quantity = parseInt(row.cells[2].textContent); // Quantity
        const total = parseFloat(row.cells[3].textContent); // Total for the item

        totalAmount += total;

        receiptContent += `\t\t${itemName} - ${quantity} x ${price.toFixed(2)} LKR = ${total.toFixed(2)} LKR\n\n`;
    }

    // Add total amount to the receipt
    receiptContent += `\n\n\n\t\t\t\t----------------------------------------------------------\n\n`;
    receiptContent += `\t\t\t\t\tTotal Amount: ${totalAmount.toFixed(2)} LKR\n\n`;
    receiptContent += `\t\t\t\t----------------------------------------------------------\n\n`;
    receiptContent += `\t\t\t\t\tThank you for dining with us!`;

    // Display receipt in a new window
    const receiptWindow = window.open('', 'Receipt', 'width=700,height=600');
    receiptWindow.document.write(`
        <pre style="font-family: Arial, sans-serif; font-size: 18px;">
        ${receiptContent}
        </pre>
    `);
    receiptWindow.document.close();
}