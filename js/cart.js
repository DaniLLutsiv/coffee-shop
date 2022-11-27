const CARD_KEY = "v1_card";
const cardList = document.getElementById("card");

function renderCard() {
    const list = getCardList();
    cardList.innerHTML = "";

    if (!list.length) {
        cardList.innerHTML = "<p class='empty-cart'>Корзина порожня</p>";
    } else {
        cardList.innerHTML = "<a href=\"#contact\" class=\"btn\">Замовити зараз</a>";
        list?.forEach(({id, quantity}) => {
            const item = [...products, ...menu].flat().find((item) => item.id === id);

            if (!item) {
                return;
            }

            const tempDiv = document.createElement('div');
            tempDiv.classList.add("cart-item");
            tempDiv.innerHTML = `
                <span class="fas fa-times" onclick="removeFromCard(${id})"></span>
                <img src="${item.img}" alt="">
                <div class="content">
                    <h3>${item.title} (${quantity})</h3>
                    <div class="price">${item.price.toFixed(2)}/${(item.price * quantity).toFixed(2)}</div>
                </div>
            `;

            cardList?.insertAdjacentElement("afterbegin", tempDiv)
        })
    }
}

document.addEventListener('DOMContentLoaded', function () {
    renderCard()

    const data = getCardList()
    const length = data.reduce((acc, {quantity}) => acc + quantity, 0)
    document.getElementById("cart-btn").dataset.content = length
});

function getCardList() {
    try {
        const list = localStorage.getItem(CARD_KEY);

        if (!list) {
            localStorage.setItem(CARD_KEY, JSON.stringify([]))
            return []
        }

        return JSON.parse(list)
    } catch (e) {
        localStorage.removeItem(CARD_KEY);
        return []
    }
}

function setCardList(data) {
    try {
        localStorage.setItem(CARD_KEY, JSON.stringify(data));
        renderCard()

        const length = data.reduce((acc, {quantity}) => acc + quantity, 0)
        document.getElementById("cart-btn").dataset.content = length
    } catch (e) {
        console.error(e)
    }
}

function addToCard(id) {
    try {
        const card = getCardList();
        const item = card.find((item) => item.id === id);

        if (item) {
            item.quantity += 1
        } else {
            card.push({
                id,
                quantity: 1,
            })
        }

        setCardList(card);
    } catch (e) {
        console.error(4)
    }
}

function removeFromCard(id) {
    try {
        const list = getCardList().filter((item) => item.id !== id);
        setCardList(list);
    } catch (e) {
        console.error(4)
    }
}
