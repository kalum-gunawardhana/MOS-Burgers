const items = [
    { itemCode: "B1001", itemName: "Classic Burger (Large)", price: 750, discount: 1 },
    { itemCode: "B1002", itemName: "Classic Burger (Regular)", price: 1500, discount: 15 },
    { itemCode: "B1003", itemName: "Turkey Burger", price: 1600, discount: 1 },
    { itemCode: "B1004", itemName: "Chicken Burger (Large) ", price: 1400, discount: 1 },
    { itemCode: "B1005", itemName: "Chicken Burger (Regular)", price: 800, discount: 20 },
    { itemCode: "B1006", itemName: "Cheese Burger (Large) ", price: 1000, discount: 1 },
    { itemCode: "B1007", itemName: "Cheese Burger (Regular)", price: 600, discount: 1 },
    { itemCode: "B1008", itemName: "Bacon Burger ", price: 650, discount: 15 },
    { itemCode: "B1009", itemName: "Shawarma Burger ", price: 800, discount: 1 },
    { itemCode: "B1010", itemName: "Olive Burger ", price: 1800, discount: 1 },
    { itemCode: "B1011", itemName: "Double-Cheese Burger ", price: 1250, discount: 20 },
    { itemCode: "B1012", itemName: "Crispy Chicken Burger (Regular) ", price: 1200, discount: 1 },
    { itemCode: "B1013", itemName: "Crispy Chicken Burger (Large) ", price: 1600, discount: 10 },
    { itemCode: "B1014", itemName: "Paneer Burger", price: 900, discount: 1 },

    { itemCode: "B1015", itemName: "Crispy Chicken Submarine (Large)", price: 2000, discount: 1 },
    { itemCode: "B1016", itemName: "Crispy Chicken Submarine (Regular)", price: 1500, discount: 1 },
    { itemCode: "B1017", itemName: "Chicken Submarine (Large)", price: 1800, discount: 3 },
    { itemCode: "B1018", itemName: "Chicken Submarine (Regular)", price: 1400, discount: 1 },
    { itemCode: "B1019", itemName: "Grinder Submarine ", price: 2300, discount: 1 },
    { itemCode: "B1020", itemName: "Cheese Submarine ", price: 2200, discount: 1 },
    { itemCode: "B1021", itemName: "Double Cheese n Chicken Submarine", price: 1900, discount: 16 },
    { itemCode: "B1022", itemName: "Special Horgie Submarine ", price: 2800, discount: 1 },
    { itemCode: "B1023", itemName: "MOS Special Submarine", price: 3000, discount: 1 },

    { itemCode: "B1024", itemName: "Steak Fries (Large)", price: 1200, discount: 1 },
    { itemCode: "B1025", itemName: "Steak Fries (Medium) ", price: 600, discount: 1 },
    { itemCode: "B1026", itemName: "French Fries (Large) ", price: 800, discount: 1 },
    { itemCode: "B1027", itemName: "French Fries (Medium)", price: 650, discount: 1 },
    { itemCode: "B1028", itemName: "French Fries (Small)", price: 450, discount: 1 },
    { itemCode: "B1029", itemName: "Sweet Potato Fries (Large) ", price: 600, discount: 1 },

    { itemCode: "B1030", itemName: "Chicken n Cheese Pasta ", price: 1600, discount: 15 },
    { itemCode: "B1031", itemName: "Chicken Penne Pasta", price: 1700, discount: 1 },
    { itemCode: "B1032", itemName: "Ground Turkey Pasta Bake ", price: 2900, discount: 10 },
    { itemCode: "B1033", itemName: "Creamy Shrimp Pasta  ", price: 2000, discount: 1 },
    { itemCode: "B1034", itemName: "Lemon Butter Pasta", price: 1950, discount: 1 },
    { itemCode: "B1035", itemName: "Tagliatelle Pasta ", price: 2400, discount: 1 },
    { itemCode: "B1036", itemName: "Baked Ravioli", price: 2000, discount: 1 },

    { itemCode: "B1037", itemName: "Fried Chicken (Small)", price: 1200, discount: 1 },
    { itemCode: "B1038", itemName: "Fried Chicken (Regular) ", price: 2300, discount: 10 },
    { itemCode: "B1039", itemName: "Hot Wings (Large)", price: 3100, discount: 5 },
    { itemCode: "B1040", itemName: "Hot Wings (Large)", price: 3100, discount: 5 },
    { itemCode: "B1041", itemName: "Devilled Chicken (Large) ", price: 900, discount: 1 },
    { itemCode: "B1042", itemName: "BBQ Chicken (Regular)", price: 2100, discount: 1 },

    { itemCode: "B1043", itemName: "Pepsi (330ml)", price: 990, discount: 5 },
    { itemCode: "B1044", itemName: "Coca-Cola (330ml)", price: 1230, discount: 1 },
    { itemCode: "B1045", itemName: "Sprite (330ml) ", price: 1500, discount: 3 },
    { itemCode: "B1046", itemName: "Mirinda (330ml)", price: 850, discount: 7 },
];

const foodMenuDiv = document.getElementById('food_menu');

// items.forEach(item => {
//     const card = document.createElement('div');
//     card.classList.add('col-md-2');
//     card.innerHTML = `
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">${item.itemName}</h5>
//         <p class="card-text">Price: ${item.price} LKR</p>
//         <p class="card-text">Discount: ${item.discount}(%)</p>
//         <button class="btn btn-dark" onclick="addToOrder(${item.itemCode})">Add to Order</button>
//       </div>
//     </div>`;
//     foodMenuDiv.appendChild(card);
// });

function loadBurgers() {
    items.forEach(item => {
        if (item.itemCode >= "B1001" && item.itemCode <= "B1014") {
            const card = document.createElement('div');
            card.classList.add('col-md-2');
            card.innerHTML = `
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.itemName}</h5>
                <p class="card-text">Price: ${item.price} LKR</p>
                <p class="card-text">Discount: ${item.discount}(%)</p>
                <button class="btn btn-dark" onclick="addToOrder('${item.itemCode}')">Add to Order</button>
            </div>
            </div>`;
            foodMenuDiv.appendChild(card);
        }
    });
}

function loadSubmarines() {
    items.forEach(item => {
        if (item.itemCode >= "B1015" && item.itemCode <= "B1023") {
            const card = document.createElement('div');
            card.classList.add('col-md-2');
            card.innerHTML = `
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.itemName}</h5>
                <p class="card-text">Price: ${item.price} LKR</p>
                <p class="card-text">Discount: ${item.discount}(%)</p>
                <button class="btn btn-dark" onclick="addToOrder('${item.itemCode}')">Add to Order</button>
            </div>
            </div>`;
            foodMenuDiv.appendChild(card);
        }
    });
}

function loadFries() {
    items.forEach(item => {
        if (item.itemCode >= "B1024" && item.itemCode <= "B1029") {
            const card = document.createElement('div');
            card.classList.add('col-md-2');
            card.innerHTML = `
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.itemName}</h5>
                <p class="card-text">Price: ${item.price} LKR</p>
                <p class="card-text">Discount: ${item.discount}(%)</p>
                <button class="btn btn-dark" onclick="addToOrder('${item.itemCode}')">Add to Order</button>
            </div>
            </div>`;
            foodMenuDiv.appendChild(card);
        }
    });
}

function loadPasta() {
    items.forEach(item => {
        if (item.itemCode >= "B1030" && item.itemCode <= "B1036") {
            const card = document.createElement('div');
            card.classList.add('col-md-2');
            card.innerHTML = `
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.itemName}</h5>
                <p class="card-text">Price: ${item.price} LKR</p>
                <p class="card-text">Discount: ${item.discount}(%)</p>
                <button class="btn btn-dark" onclick="addToOrder('${item.itemCode}')">Add to Order</button>
            </div>
            </div>`;
            foodMenuDiv.appendChild(card);
        }
    });
}

function loadChicken() {
    items.forEach(item => {
        if (item.itemCode >= "B1037" && item.itemCode <= "B1042") {
            const card = document.createElement('div');
            card.classList.add('col-md-2');
            card.innerHTML = `
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.itemName}</h5>
                <p class="card-text">Price: ${item.price} LKR</p>
                <p class="card-text">Discount: ${item.discount}(%)</p>
                <button class="btn btn-dark" onclick="addToOrder('${item.itemCode}')">Add to Order</button>
            </div>
            </div>`;
            foodMenuDiv.appendChild(card);
        }
    });
}

function loadBeverages() {
    items.forEach(item => {
        if (item.itemCode >= "B1043" && item.itemCode <= "B1046") {
            const card = document.createElement('div');
            card.classList.add('col-md-2');
            card.innerHTML = `
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.itemName}</h5>
                <p class="card-text">Price: ${item.price} LKR</p>
                <p class="card-text">Discount: ${item.discount}(%)</p>
                <button class="btn btn-dark" onclick="addToOrder('${item.itemCode}')">Add to Order</button>
            </div>
            </div>`;
            foodMenuDiv.appendChild(card);
        }
    });
}

let addOrderArray = [];

function addToOrder(itemCode) {
    let tbody = document.getElementById('tbodyId');

    for (let i = 0; i < items.length; i++) {
        if (itemCode === items[i].itemCode) {
            let itemFound = false;

            for (let j = 0; j < addOrderArray.length; j++) {
                if (addOrderArray[j].itemCode === itemCode) {
                    addOrderArray[j].quantity++;
                    itemFound = true;
                    break;
                }
            }

            if (!itemFound) {
                addOrderArray.push({
                    itemCode: items[i].itemCode,
                    itemName: items[i].itemName,
                    price: items[i].price,
                    discount: items[i].discount,
                    quantity: 1
                });
            }
            break;
        }
    }
    // console.log(addOrderArray);
    updateOrderTable();
}

let totalOrderArray = [];
let totalAmouts = 0;

function updateOrderTable() {
    let tbody = document.getElementById('tbodyId');
    tbody.innerHTML = '';

    totalAmouts = 0;

    addOrderArray.forEach((item) => {
        const totalPrice = item.price * item.quantity;
        totalAmouts += totalPrice;

        tbody.innerHTML += `
            <tr>
                <td>${item.itemName}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>${totalPrice.toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger" onclick="removeFromOrder('${item.itemCode}')">Remove</button>
                </td>
            </tr>
        `;
    });
    calTotalAmou();
}

function removeFromOrder(itemCode) {
    addOrderArray = addOrderArray.filter(item => item.itemCode !== itemCode);
    updateOrderTable();
}

function calTotalAmou() {
    let tm = document.getElementById('total-amount');
    tm.innerHTML = totalAmouts.toFixed(2);
}

function calTotAmo() {
    let em=document.getElementById('enter-amount').value;
    let gr=document.getElementById('total-amounts');
    // console.log(em);
    let netAmo=em-totalAmouts;
    gr.innerHTML=netAmo;
}
//----------------generateReceipt()----------------
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
//----------add customers form----------
// let int1;
// let int2;

// function addCustomer() {
//     (async () => {
//         const { value: formValues } = await Swal.fire({
//           title: "Add Customer Form",
//           html: `
//             <input id="swal-input1" class="swal2-input" placeholder="Customer Name">
//             <input id="swal-input2" class="swal2-input" placeholder="Customer Phone Number">
//           `,
//           focusConfirm: false,
//           preConfirm: () => {
//             return [
//                 int1=document.getElementById("swal-input1").value,
//                 int2=document.getElementById("swal-input2").value
//             ];
//           }
//         });
//         if (formValues) {
//           Swal.fire(JSON.stringify(formValues));
//         }
//       })()
// }

// let code;
// let names;
// let price;
// let discount;

// function addItems() {
//     (async () => {
//         const { value: formValues } = await Swal.fire({
//             title: "Add Items Form",
//             html: `
//                 <input id="swal-code" class="swal2-input" placeholder="Item Code">
//                 <input id="swal-name" class="swal2-input" placeholder="Item Name">
//                 <input id="swal-price" class="swal2-input" placeholder="Item Price">
//                 <input id="swal-discount" class="swal2-input" placeholder="Item Discount">
//             `,
//             focusConfirm: false,
//             preConfirm: () => {
//                 // Capture the form values from input fields
//                 code = document.getElementById("swal-code").value;
//                 names = document.getElementById("swal-name").value;
//                 price = document.getElementById("swal-price").value;
//                 discount = document.getElementById("swal-discount").value;

//                 // Add the new item to the items array
//                 items.push({
//                     itemCode: code,
//                     itemName: names,
//                     price: price,
//                     discount: discount
//                 });
//                 // Return the captured values
//                 return [code, names, price, discount];
//             }
//         });
        
//         // Show the confirmation alert with the form values
//         if (formValues) {
//             Swal.fire(`Item Added: ${JSON.stringify(formValues)}`);
//         }
//     })();
// }