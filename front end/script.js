let billItems = [];

function addToBill() {
  let price = parseInt(document.getElementById("price").value);
  let dish = document.getElementById("dish").value;
  let table = document.getElementById("table").value;
  let item = { dish, price, table };
  billItems.push(item);
  updateBill();
}

function updateBill() {
  let billItemsList = document.getElementById("billItems");
  billItemsList.innerHTML = "";
  let totalAmount = 0;
  billItems.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = `${item.dish} - ${item.price} Rupees - ${item.table}`;
    billItemsList.appendChild(listItem);
    totalAmount += item.price;
  });
  document.getElementById("totalAmount").textContent = totalAmount;
}
