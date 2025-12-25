// Inventory array
let inventory = [];

// Find product index
function findProductIndex(productName) {
  const name = productName.toLowerCase();
  return inventory.findIndex(
    product => product.name === name
  );
}

// Add product
function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(name + " quantity updated");
  } else {
    inventory.push({ name, quantity: product.quantity });
    console.log(name + " added to inventory");
  }
}

// Remove product
function removeProduct(productName, quantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(name + " not found");
    return;
  }

  const product = inventory[index];

  if (product.quantity < quantity) {
    console.log(
      "Not enough " + name + " available, remaining pieces: " + product.quantity
    );
    return;
  }

  product.quantity -= quantity;

  if (product.quantity === 0) {
    inventory.splice(index, 1);
  }

  console.log(
    "Remaining " + name + " pieces: " + product.quantity
  );
}
