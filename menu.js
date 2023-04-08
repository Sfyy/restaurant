export function createMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("tab-content");

  // Create category containers
  const entreesDiv = document.createElement("div");
  entreesDiv.classList.add("category");
  const entreesHeading = document.createElement("h2");
  entreesHeading.textContent = "Entrees";
  entreesDiv.appendChild(entreesHeading);
  const entreesList = document.createElement("ul");
  entreesList.classList.add("menu-list");
  entreesDiv.appendChild(entreesList);

  const sidesDiv = document.createElement("div");
  sidesDiv.classList.add("category");
  const sidesHeading = document.createElement("h2");
  sidesHeading.textContent = "Sides";
  sidesDiv.appendChild(sidesHeading);
  const sidesList = document.createElement("ul");
  sidesList.classList.add("menu-list");
  sidesDiv.appendChild(sidesList);

  const dessertsDiv = document.createElement("div");
  dessertsDiv.classList.add("category");
  const dessertsHeading = document.createElement("h2");
  dessertsHeading.textContent = "Desserts";
  dessertsDiv.appendChild(dessertsHeading);
  const dessertsList = document.createElement("ul");
  dessertsList.classList.add("menu-list");
  dessertsDiv.appendChild(dessertsList);

  // Create menu items
  const hamburger = createMenuItem(
    "Hamburger",
    "$10",
    "burger.jpg",
    "Entrees",
    "Our classic hamburger is made with a juicy beef patty, fresh lettuce, ripe tomato, and our special sauce, all served on a toasted bun."
  );
  const steak = createMenuItem(
    "Steak",
    "$25",
    "steak.jpg",
    "Entrees",
    "Our steak is cooked to perfection and seasoned with our house blend of spices. Served with your choice of sides."
  );
  const salmon = createMenuItem(
    "Salmon",
    "$20",
    "salmon.jpg",
    "Entrees",
    "Our grilled salmon is served with a fresh salad of mixed greens, cherry tomatoes, and red onions, drizzled with a tangy vinaigrette."
  );
  const pizza = createMenuItem(
    "Pizza",
    "$15",
    "pizza.jpg",
    "Entrees",
    "Our pizza is made with homemade dough and topped with your choice of fresh ingredients. Perfect for sharing with friends and family!"
  );
  const taco = createMenuItem(
    "Taco",
    "$8",
    "taco.jpg",
    "Sides",
    "Our tacos are made with soft corn tortillas, filled with your choice of savory meats and fresh toppings. Served with a side of salsa."
  );
  const sushi = createMenuItem(
    "Sushi",
    "$18",
    "sushi.jpg",
    "Sides",
    "Our sushi is made with the freshest fish and vegetables, carefully rolled by our expert sushi chefs. Served with soy sauce and wasabi."
  );
  const chocolateCake = createMenuItem(
    "Chocolate Cake",
    "$7",
    "chocolate-cake.jpg",
    "Desserts",
    "Our chocolate cake is rich, moist, and chocolatey, with a velvety smooth frosting. Perfect for satisfying your sweet tooth!"
  );
  const iceCream = createMenuItem(
    "Ice Cream",
    "$5",
    "ice-cream.jpg",
    "Desserts",
    "Our ice cream is made in-house with the freshest cream and ingredients. Available in a variety of flavors, including vanilla, chocolate, and strawberry."
  );
  const cheesecake = createMenuItem(
    "Cheesecake",
    "$8",
    "cheesecake.jpg",
    "Desserts",
    "Our cheesecake is creamy and rich, with a buttery graham cracker crust. Topped with your choice of fresh fruit or chocolate sauce."
  );

  // Append menu items to category lists
  entreesList.appendChild(hamburger);
  entreesList.appendChild(steak);
  entreesList.appendChild(salmon);
  entreesList.appendChild(pizza);
  sidesList.appendChild(taco);
  sidesList.appendChild(sushi);
  dessertsList.appendChild(chocolateCake);
  dessertsList.appendChild(iceCream);
  dessertsList.appendChild(cheesecake);

  // Append category containers to menu div
  menuDiv.appendChild(entreesDiv);
  menuDiv.appendChild(sidesDiv);
  menuDiv.appendChild(dessertsDiv);

  return menuDiv;
}

export function createMenuItem(name, price, imageSrc, category, description) {
  if (!name || !price || !category) {
    return;
  }

  const menuItem = document.createElement("li");
  menuItem.classList.add("menu-item");

  if (imageSrc) {
    const itemImg = document.createElement("img");
    itemImg.src = imageSrc;
    itemImg.alt = name;
    itemImg.classList.add("menu-img");
    menuItem.appendChild(itemImg);
  }

  const itemName = document.createElement("div");
  itemName.textContent = name;
  itemName.classList.add("menu-name");
  menuItem.appendChild(itemName);

  const itemPrice = document.createElement("div");
  itemPrice.textContent = price;
  itemPrice.classList.add("menu-price");
  menuItem.appendChild(itemPrice);

  if (description) {
    const itemDescription = document.createElement("div");
    itemDescription.textContent = description;
    itemDescription.classList.add("menu-description");
    menuItem.appendChild(itemDescription);
  }

  return menuItem;
}
