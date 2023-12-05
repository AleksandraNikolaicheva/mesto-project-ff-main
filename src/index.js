import './pages/index.css';
import { addCards, addNewCard, popupAddNewCard, newPlaceForm } from './scripts/card.js';
import { openPopup, closePopup, openPopupByButton } from './scripts/modal.js';

addCards();

const popups = document.querySelectorAll('.popup');

const popupProfile = document.querySelector('.popup_type_edit');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileForm = document.querySelector("form[name=edit-profile]");
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
newPlaceForm.addEventListener('submit', addNewCard);
openPopupByButton(addButton, popupAddNewCard);

// Закрыть при клике на темный фон
popups.forEach(function (popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')){
      closePopup(popup);
    }
  });
});