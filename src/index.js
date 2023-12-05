// // @todo: Темплейт карточки

// const cardTemplate = document.querySelector('.places__list');
// const templateElem = document.querySelector('#card-template').content;

// // @todo: Функция создания карточки

// function createCard (item,removeCard) {
//     const cardElem = templateElem.querySelector('.places__item').cloneNode(true);
//     cardElem.querySelector('.card__image').src = item.link;
//     cardElem.querySelector('.card__image').alt = item.name;
//     cardElem.querySelector('.card__title').textContent = item.name;
//     const removeCardButton = cardElem.querySelector('.card__delete-button');
//     removeCardButton.addEventListener('click',removeCard);
//     return cardElem;
// }

// // @todo: Функция удаления карточки

// function removeCard(event) {
//     const deleteCard = event.target.closest('.places__item');
//     deleteCard.remove();
// }

// // @todo: Вывести карточки на страницe

// function addCard(item) {
//     cardTemplate.append(item);
// }

// initialCards.forEach(function(item) {
//     const createdCard = createCard(item,removeCard);
//     addCard(createdCard);
// })

import './pages/index.css';
import { addCards, addNewCard, popupAddNewCard } from './scripts/card.js';
import { openPopup, closePopup, openPopupByButton } from './scripts/modal.js';

addCards();

const popups = document.querySelectorAll('.popup');

const popupProfile = document.querySelector('.popup_type_edit');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
// const profileForm = document.forms.editProfile;
const profileForm = document.querySelector('popup__form');
const profileFormName = document.querySelector('.popup__input_type_name');
const profileFormDescription = document.querySelector('.popup__input_type_description');

function setProfileFormValues() {
  profileFormName.value = profileName.textContent;
  profileFormDescription.value = profileDescription.textContent;
}

function openProfilePopupByButton() {
  setProfileFormValues();
  openPopup(popupProfile);
}

editButton.addEventListener('click', openProfilePopupByButton);

function changeProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileFormName.value;
  profileDescription.textContent = profileFormDescription.value;
  closePopup(popupProfile);
}

profileForm.addEventListener('submit', changeProfile);
newPlace.addEventListener('submit', addNewCard);
openPopupByButton(addButton, popupAddNewCard);

// Закрыть при клике на темный фон
popups.forEach(function (popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')){
      closePopup(popup);
    }
  });
});