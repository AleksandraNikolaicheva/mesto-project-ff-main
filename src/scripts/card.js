import {openImagePopup} from './modal.js';

const cardTemplate = document.querySelector('#card-template').content;
 
//Функция создания карточки
export function createCard(place, deleteFunction, likeFunction, openImagePopup) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardItem.querySelector('.card__delete-button');
  const cardImage = cardItem.querySelector('.card__image');
  const cardTitle = cardItem.querySelector('.card__title');
  const cardLikeButton = cardItem.querySelector('.card__like-button');
  cardImage.src = place.link;
  cardImage.alt = 'Фотография - ' + place.name;
  cardTitle.textContent = place.name;
  deleteButton.addEventListener('click', deleteFunction);
  cardLikeButton.addEventListener('click', likeFunction);
  cardImage.addEventListener('click', () => openImagePopup(place.link, place.name));
  return cardItem;
}
 
//Функция удаления карточки
export function deleteCard(evt) {
  const cardToRemove = evt.target.closest('.card');
  cardToRemove.remove();
}
 
//Функция лайка карточки
export function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

