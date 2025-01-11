function addItem(itemName, preparationTime) {
  const customerName = document.getElementById("customer-name").value;

  // Check if the customer name is empty
  if (!customerName.trim()) {
    alert("Please enter a customer name before adding an item.");
    return; // Exit the function if the name is empty
  }

  const orderList = document.getElementById("orders-list");
  const completionTime = calculateCompletionTime(preparationTime);

  // Create table cells
  const customerCell = document.createElement("div");
  customerCell.className = "order-cell";
  customerCell.textContent = customerName;

  const itemCell = document.createElement("div");
  itemCell.className = "order-cell";
  itemCell.textContent = itemName;

  const completionTimeCell = document.createElement("div");
  completionTimeCell.className = "order-cell";
  completionTimeCell.textContent = completionTime;

  // Create a table row and append cells
  const orderRow = document.createElement("div");
  orderRow.className = "order-row";
  orderRow.appendChild(customerCell);
  orderRow.appendChild(itemCell);
  orderRow.appendChild(completionTimeCell);

  // Append the table row to the order table
  const orderTable = document.querySelector(".order-table");
  orderTable.appendChild(orderRow);
}

function calculateCompletionTime(preparationTime) {
  const now = new Date();
  const completionTime = new Date(now.getTime() + preparationTime * 60000); // Convert minutes to milliseconds
  const hours = completionTime.getHours();
  const minutes = completionTime.getMinutes();
  return `${hours}:${minutes}`;
}
// ... (existing JavaScript code) ...

function removeName() {
  const customerNameInput = document.getElementById("customer-name");
  customerNameInput.value = ""; // Clear the input content
}

// ... (existing JavaScript code) ...
function removeLastRow() {
  const orderTable = document.querySelector(".order-table");
  const rows = orderTable.querySelectorAll(".order-row");

  // Check if there are rows to remove
  if (rows.length > 1) {
    // Remove the last row
    orderTable.removeChild(rows[rows.length - 1]);
  }
}

// ... (existing JavaScript code) ...
