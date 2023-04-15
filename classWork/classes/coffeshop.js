class CoffeeShop {
  constructor(name, menu) {
    (this.name = name), (this.menu = menu);
    this.orders = [];
    this.prices = [];
  }

  addOrder(ordersName) {
    let answer = "This item is currently unavailable!";
    const menuItem = this.menu.find(
      (menuItemName) => menuItemName.name === ordersName
    );
    if (menuItem) {
      const isThereMenuItem = this.orders.some(
        (menuItemName) => menuItemName.name === ordersName
      );
      if (!isThereMenuItem) {
        this.orders.push(menuItem);
        answer = "Order added";
      }
    }
    return answer;
  }

  fulFillOrder() {
    if (this.orders.length === 0) {
      return "All orders have been fulfilled!";
    } else {
      const item = this.orders.map((item) => item.name);
      return `The ${item} is ready!`;
    }
  }

  listOrder() {
    return this.orders.map((elem) => elem.name);
  }

  dueAmount() {
    let answer =
      this.orders
        .map((item) => item.price)
        .reduce((acc, price) => {
          return acc + price;
        }) || "no new orders taken, expect a zero payable ";
    return answer;
  }

  cheapestItem() {
    let firstItem = this.menu[0];
    let cheapestItem = firstItem.price;
    let cheapestItemName = firstItem.name;
    for (let i = 0; i < this.menu.length; i++) {
      const menuItem = this.menu[i];
      if (cheapestItem > menuItem.price) {
        cheapestItem = menuItem.price;
        cheapestItemName = menuItem.name;
      }
    }
    return cheapestItemName;
  }

  drinksOnly() {
    return this.menu
      .filter((menuItem) => menuItem.type === "drink")
      .map((item) => item.name);
  }

  foodsOnly() {
    return this.menu
      .filter((menuItem) => menuItem.type === "food")
      .map((item) => item.name);
  }
}

const menues = [
  {
    name: "coffee",
    type: "drink",
    price: 100,
  },
  {
    name: "milk",
    type: "drink",
    price: 120,
  },
  {
    name: "cacao",
    type: "drink",
    price: 150,
  },
  {
    name: "hotChocolate",
    type: "drink",
    price: 200,
  },
  {
    name: "Mars",
    type: "food",
    price: 250,
  },
  {
    name: "Snickers",
    type: "food",
    price: 250,
  },
];

const firstorder = new CoffeeShop("Ijevan", menues);
console.log(firstorder.addOrder("Snickers"));
console.log(firstorder.addOrder("hotChocolate"));
console.log(firstorder.addOrder("Mars"));
console.log(firstorder.addOrder("hhh"));
console.log(firstorder.listOrder());
console.log(firstorder.dueAmount());
console.log(firstorder.fulFillOrder());
console.log(firstorder.foodsOnly());
console.log(firstorder.drinksOnly());
console.log(firstorder.cheapestItem());
