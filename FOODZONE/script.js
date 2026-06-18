let foods = [
    {
        name: "Cheese Pizza",
        category: "Pizza",
        price: 199,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    },
    {
        name: "Veg Burger",
        category: "Burger",
        price: 99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
        name: "Cold Coffee",
        category: "Drinks",
        price: 89,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
        name: "Farmhouse Pizza",
        category: "Pizza",
        price: 249,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },
    {
        name: "Cheese Burger",
        category: "Burger",
        price: 129,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
        name: "Lemon Mojito",
        category: "Drinks",
        price: 79,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e"
    }
];

let cart = [];
let total = 0;

let foodContainer = document.getElementById("foodContainer");
let cartList = document.getElementById("cartList");
let totalAmount = document.getElementById("total");
let searchBox = document.getElementById("searchBox");

function displayFoods(foodArray) {
    foodContainer.innerHTML = "";

    for (let i = 0; i < foodArray.length; i++) {
        foodContainer.innerHTML += `
            <div class="card">
                <img src="${foodArray[i].image}">
                <h3>${foodArray[i].name}</h3>
                <p>Category: ${foodArray[i].category}</p>
                <h4>₹${foodArray[i].price}</h4>
                <button onclick="addToCart(${i})">Add to Cart</button>
            </div>
        `;
    }
}

function addToCart(index) {
    cart.push(foods[index]);
    total = total + foods[index].price;
    updateCart();
}

function updateCart() {
    cartList.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        cartList.innerHTML += `
            <li>
                ${cart[i].name} - ₹${cart[i].price}
                <button onclick="removeFromCart(${i})">Remove</button>
            </li>
        `;
    }

    totalAmount.textContent = total;
}

function removeFromCart(index) {
    total = total - cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function filterFood(category) {
    if (category == "all") {
        displayFoods(foods);
    } else {
        let filtered = foods.filter(function(food) {
            return food.category == category;
        });

        displayFoods(filtered);
    }
}

searchBox.addEventListener("keyup", function() {
    let value = searchBox.value.toLowerCase();

    let searchedFoods = foods.filter(function(food) {
        return food.name.toLowerCase().includes(value);
    });

    displayFoods(searchedFoods);
});

function toggleTheme() {
    document.body.classList.toggle("dark");
}

window.onload = function() {
    displayFoods(foods);
};