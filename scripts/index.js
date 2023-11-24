// @todo: Темплейт карточки

const cardTemplate = document.querySelector('.places__list');
const templateElem = document.querySelector('#card-template').content;

// @todo: Функция создания карточки

function createCard (item,removeCard) {
    const cardElem = templateElem.querySelector('.places__item').cloneNode(true);
    cardElem.querySelector('.card__image').src = item.link;
    cardElem.querySelector('.card__image').alt = item.name;
    cardElem.querySelector('.card__title').textContent = item.name;
    const removeCardButton = cardElem.querySelector('.card__delete-button');
    removeCardButton.addEventListener('click',removeCard);
    return cardElem;
}

// @todo: Функция удаления карточки

function removeCard(event) {
    const deleteCard = event.target.closest('.places__item');
    deleteCard.remove();
}

// @todo: Вывести карточки на страницу

function addCard(item) {
    cardTemplate.append(item);
}

initialCards.forEach(function(item) {
    const createdCard = createCard(item,removeCard);
    addCard(createdCard);
})