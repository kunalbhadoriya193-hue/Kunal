let total = 0;

function addItem() {
  const nameInput = document.getElementById("itemName");
  const priceInput = document.getElementById("itemPrice");
  const itemsList = document.getElementById("itemList");

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (name === "" || isNaN(price) || price <= 0) {
    alert("Please enter valid item name and price.");
    return;
  }

  
  const itemDiv = document.createElement("div");
  itemDiv.className = "item";
  itemDiv.innerHTML = `<span>${name}</span><span>₹${price.toFixed(2)}</span>`;
  itemsList.appendChild(itemDiv);

  
  total += price;
  document.getElementById("totalAmount").innerText = `₹${total.toFixed(2)}`;

  
  nameInput.value = "";
  priceInput.value = "";
  nameInput.focus();
}

document.getElementById("date-time").innerText = new Date().toLocaleString();