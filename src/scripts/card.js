import { initialCards } from './cards.js';
import { closePopup, openImagePopup } from './modal.js';

export const popupAddNewCard = document.querySelector('.popup_type_new-card');
// export const cardsSection = document.querySelector('.places__list');
// const cardTemplate = document.querySelector('#card-template').content;
export const cardTemplate = document.querySelector('.places__list');
const templateElem = document.querySelector('#card-template').content;
const newPlaceForm = document.forms.newPlace;
const placeName = newPlaceForm.querySelector('.popup__input_type_card-name');
const placeLink = newPlaceForm.querySelector('.popup__input_type_url');
 
//Функция создания карточки
// function createCard(place, deleteFunction, likeFunction,openImagePopup) {
//   const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
//   const deleteButton = cardItem.querySelector('.card__delete-button');
//   const cardImage = cardItem.querySelector('.card__image');
//   const cardTitle = cardItem.querySelector('.card__title');
//   const cardLikeButton = cardItem.querySelector('.card__like-button');
//   cardImage.src = place.link;
//   cardImage.alt = 'Фотография - ' + place.name;
//   cardTitle.textContent = place.name;
//   deleteButton.addEventListener('click', deleteFunction);
//   cardLikeButton.addEventListener('click', likeFunction);
//   cardImage.addEventListener('click', function () {
//     openImagePopup(place.link, place.name);
//   });
//   return cardItem;
// }

function createCard (item,removeCard,likeFunction,openImagePopup) {
    const cardElem = templateElem.querySelector('.places__item').cloneNode(true);
    const removeCardButton = cardElem.querySelector('.card__delete-button');
    const cardLikeButton = cardItem.querySelector('.card__like-button');
    cardElem.querySelector('.card__image').src = item.link;
    cardElem.querySelector('.card__image').alt = item.name;
    cardElem.querySelector('.card__title').textContent = item.name;
    removeCardButton.addEventListener('click',removeCard);
    cardLikeButton.addEventListener('click', likeFunction);
    openImagePopup(item.link, item.name);
    return cardElem;
}

//Функция удаления карточки
// function deleteCard(evt) {
//   const cardToRemove = evt.target.closest('.card');
//   cardToRemove.remove();
// }

function removeCard(event) {
    const deleteCard = event.target.closest('.places__item');
    deleteCard.remove();
}
 
//Функция лайка карточки
export function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

//Вывод карточки на страницу
// export function addCards() {
//   initialCards.forEach(function (place) {
//     const card = createCard(place, deleteCard, likeCard,openImagePopup);
//     cardsSection.appendChild(card);
//   });
// }
 export function addCard(item) {
    cardTemplate.append(item);
}

initialCards.forEach(function(item) {
    const createdCard = createCard(item,removeCard);
    addCard(createdCard);
})
 
//Добавление новой карточки
export function addNewCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: placeName.value,
    link: placeLink.value,
  };
 
  const newPlaceCard = createCard(newCard, deleteCard, likeCard,openImagePopup);
  cardTemplate.insertBefore(newPlaceCard, cardTemplate.firstChild);
  newPlaceForm.reset();
  closePopup(popupAddNewCard);
}