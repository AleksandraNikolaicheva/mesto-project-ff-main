import './pages/index.css';
import { initialCards } from './scripts//cards.js';
import { openPopup, closePopup, openPopupByButton,openImagePopup } from './scripts/modal.js';
import { createCard,deleteCard, likeCard} from './scripts/card.js';

const popupAddNewCard = document.querySelector('.popup_type_new-card');
const cardsSection = document.querySelector('.places__list');
const newPlaceForm = document.querySelector("form[name=new-place]");
const placeName = document.querySelector('.popup__input_type_card-name');
const placeLink = document.querySelector('.popup__input_type_url');

const popups = document.querySelectorAll('.popup');

const popupProfile = document.querySelector('.popup_type_edit');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileForm = document.querySelector("form[name=edit-profile]");
const profileFormName = document.querySelector('.popup__input_type_name');
const profileFormDescription = document.querySelector('.popup__input_type_description');


//Вывод карточки на страницу
function addCards() {
  initialCards.forEach(function (place) {
    const card = createCard(place, deleteCard, likeCard,openImagePopup);
    cardsSection.appendChild(card);
  });
}
 
//Добавление новой карточки
function addNewCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: placeName.value,
    link: placeLink.value,
  };
 
  const newPlaceCard = createCard(newCard, deleteCard, likeCard,openImagePopup);
  cardsSection.insertBefore(newPlaceCard, cardsSection.append(newCard));
  newPlaceForm.reset();
  closePopup(popupAddNewCard);
}

addCards();

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