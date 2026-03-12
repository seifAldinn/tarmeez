let products = JSON.parse(localStorage.getItem("products")) || [];
let editingIndex = null;

function addProduct(){
    let name = document.getElementById("name").value.trim();
    let price = document.getElementById("price").value.trim();

    if (!name || !price) {
        alert("Please fill in all fields!");
        return;
    }

    if (isNaN(price) || price <= 0) {
        alert("Price must be a valid positive number!");
        return;
    }

    let product = {
        name: name,
        price: parseFloat(price)
    };

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    
    displayProducts();
}




function displayProducts(){
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    if (products.length === 0) {
        table.innerHTML = '<tr><td colspan="3" style="text-align:center;">No products added yet</td></tr>';
        return;
    }

    products.forEach((product, index) => {
        table.innerHTML += `
        <tr>
            <td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>
                <button onclick="editProduct(${index})" style="margin-right:5px; background-color:#ffc107; border:none; border-radius:4px; color:black;">Edit</button>
                <button onclick="deleteProduct(${index})" style="background-color:#dc3545; border:none; border-radius:4px; color:white;">Delete</button>
            </td>
        </tr>
        `;
    });
}

displayProducts();







    if (confirm("Are you sure you want to delete this product?")) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        displayProducts();
    }




function editProduct(index){

let newName = prompt("Enter new name");
let newPrice = prompt("Enter new price");

products[index].name = newName;
    editingIndex = index;
    document.getElementById("editName").value = products[index].name;
    document.getElementById("editPrice").value = products[index].price;
    document.getElementById("editModal").style.display = "block";
}

function saveEdit(){
    let name = document.getElementById("editName").value.trim();
    let price = document.getElementById("editPrice").value.trim();

    if (!name || !price) {
        alert("Please fill in all fields!");
        return;
    }

    if (isNaN(price) || price <= 0) {
        alert("Price must be a valid positive number!");
        return;
    }

    products[editingIndex].name = name;
    products[editingIndex].price = parseFloat(price);

    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
    cancelEdit();
}

function cancelEdit(){
    document.getElementById("editModal").style.display = "none";
    editingIndex = null;}