// let addItemArray=[
//     {itemCode:,}
// ];
let addItemArray=[]

function addItems() {
    // console.log('correct');
    let iCode = document.getElementById('itemCode').value;
    // console.log(iCode);

    let iName = document.getElementById('itemName').value;
    // console.log(iName);

    let itemCategory=document.getElementById('itemCategory').value;
    // console.log(itemCategory);

    let iPrice = document.getElementById('itemPrice').value;
    // console.log(iPrice);
    let iDescount = document.getElementById('itemDiscount').value;
    // console.log(iDescount);

    // new item(iCode,iName,iPrice,iDescount);
    // console.log(addItem);
    
    addItemArray.forEach(element => {
        element.add(new item(iCode,iName,iPrice,iDescount));
    });

    console.log(addItemArray);
    
    
}