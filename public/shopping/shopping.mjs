const PRODUCTS = [
    {
        name: "Shoes",
        description: "A cool shoe product",
        imageSrc: "https://placehold.co/200x200",
        price: 100,
        numInCart: 2
    },
    {
        name: "Chips",
        description: "Delicious.",
        imageSrc: "https://placehold.co/200x200",
        price: 5,
        numInCart: 1
    },
    {
        name: "Cookies",
        description: "Delicious.",
        imageSrc: "https://placehold.co/200x200",
        price: 3,
        numInCart: 0
    }
];

function renderProductCard(product) {
    const article = document.createElement("article");
    article.innerHTML = `
        <img src="${product.imageSrc}" alt="${product.name}" />
        <div class="product-details">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
            <div>
                <button class="buy-button">Add to cart</button>
                <span class="num-in-cart">${product.numInCart} in cart</span>
            </div>
        </div>
    `;
    article.querySelector(".buy-button").addEventListener("click", () => {
        product.numInCart++;
        rerenderAllProducts();
        rerenderCart();
    });
    return article;
}

function rerenderAllProducts() {
    const container = document.querySelector(".product-list");
    const articles = container.querySelectorAll("article");
    articles.forEach(article => article.remove());
    for (let product of PRODUCTS) {
        if (shouldProductBeVisible(product)) {
            const card = renderProductCard(product);
            container.appendChild(card);
        }
    }
}

function rerenderCart() {
    const cart = document.querySelector(".cart-items");
    cart.innerHTML = "";
    for (let product of PRODUCTS) {
        if (product.numInCart > 0) {
            const p = document.createElement("p");
            p.textContent = `${product.name} x${product.numInCart}`;
            const button = document.createElement("button");
            button.className = "remove-button";
            button.textContent = "Remove";
            button.addEventListener("click", () => {
                product.numInCart--;
                rerenderAllProducts();
                rerenderCart();
            });
            cart.appendChild(p);
            cart.appendChild(button);
        }
    }
}

function shouldProductBeVisible(product) {
    const minVal = parseFloat(document.getElementById("minPrice").value);
    const maxVal = parseFloat(document.getElementById("maxPrice").value);
    if (!isNaN(minVal) && product.price < minVal) return false;
    if (!isNaN(maxVal) && product.price > maxVal) return false;
    return true;
}

document.getElementById("minPrice").addEventListener("change", rerenderAllProducts);
document.getElementById("maxPrice").addEventListener("change", rerenderAllProducts);

rerenderAllProducts();
rerenderCart();