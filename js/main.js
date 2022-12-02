const menuList = document.getElementById("menu-list")

menu?.forEach(({img, oldPrice, price, title, id}) => {
    const tempDiv = document.createElement('div');
    tempDiv.classList.add("box");
    tempDiv.dataset.id = id;
    tempDiv.innerHTML = `
        <img src="${img}" alt="">
        <h3>${title}</h3>
        <div class="price">${price} <span>${oldPrice}</span></div>
        <button class="btn" onclick="addToCard(${id})">Додати до кошику</button>
    `;

    menuList?.insertAdjacentElement("beforeend", tempDiv)
})

const productsList = document.getElementById("products-list")

products?.forEach(({img, oldPrice, price, title, id, stars}) => {
    const tempDiv = document.createElement('div');
    tempDiv.classList.add("box");
    tempDiv.dataset.id = id;
    tempDiv.innerHTML = `
        <div class="icons">
            <button onclick="addToCard(${id})" class="fas fa-shopping-cart"></button>
            <button id="icon-${id}" class="fas fa-heart" onclick="likeProduct(${id})"></button>
        </div>
        <div class="image">
            <img src="${img}" alt="">
        </div>
        <div class="content">
            <h3>${title}</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">${price} <span>${oldPrice}</span></div>
        </div>
    `;

    productsList?.insertAdjacentElement("beforeend", tempDiv)
})

const reviewsList = document.getElementById("reviews-list")

reviews?.forEach(({img, id, stars, desc, name}) => {
    const tempDiv = document.createElement('div');
    tempDiv.classList.add("box");
    tempDiv.dataset.id = id;
    tempDiv.innerHTML = `
        <img src="images/quote-img.png" alt="" class="quote">
        <p class="review-message">${desc}</p>
        <img src="${img}" class="user" alt="">
        <h3>${name}</h3>
        <div class="stars">
            
        </div>
    `;

    Array.from({length: 5}).map((_, i) => {
        const star = document.createElement("i")

        if (i + 1 <= stars) {
            star.classList.add("fas", "fa-star")
        } else if (i + 0.5 === stars) {
            star.classList.add("fas", "fa-star-half-alt")
        } else {
            star.classList.add("far", "fa-star")
        }

        tempDiv.querySelector(".stars").appendChild(star)
    })

    reviewsList?.insertAdjacentElement("beforeend", tempDiv)
})

const blogsList = document.getElementById("blogs-list")

blogs?.forEach(({img, id, desc, title, author}) => {
    const tempDiv = document.createElement('div');
    tempDiv.classList.add("box");
    tempDiv.dataset.id = id;
    tempDiv.innerHTML = `
            <div class="image">
                <img src="${img}" alt="">
            </div>
            <div class="content">
                <a href="#" class="title">${title}</a>
                <span>${author}</span>
                <p>${desc}</p>
                <a href="#" class="btn">Читати більше</a>
            </div>
    `;

    blogsList?.insertAdjacentElement("beforeend", tempDiv)
})

function submitHandler() {
    setTimeout(() => {
        document.getElementById("open-modal").classList.add("modal-window-open");
    }, 300)
}

document.querySelector(".modal-close").addEventListener("click", () => {
    document.getElementById("open-modal").classList.remove("modal-window-open");
})

function likeProduct(id) {
    document.getElementById(`icon-${id}`)?.classList.toggle("liked")
}