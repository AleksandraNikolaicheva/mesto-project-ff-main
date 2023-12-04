let escCallback;

export const popupImage = document.querySelector('.popup_type_image');
const popupImageImage = popupImage.querySelector('.popup__image');
const popupImageCaption = popupImage.querySelector('.popup__caption');

export function openPopup(popup) {
  popup.classList.add('popup_is-animated');
  setTimeout(() => {
    popup.classList.add("popup_is-opened");
  }, 10);
  escCallback = function (evt) {
    closePopupEsc(evt, popup);
  };
  document.addEventListener('keydown', escCallback);
}
 
export function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', escCallback);
}

// Закрытие Esc
function closePopupEsc(evt, popup) {
  if (evt.key === 'Escape') {
    closePopup(popup);
  }
}
 
export function openPopupByButton(button, popup) {
  button.addEventListener('click', function () {
    openPopup(popup);
  });
}

//открытие изображения
export function openImagePopup(link, alt) {
  popupImageImage.src = link;
  popupImageImage.alt = alt;
  popupImageCaption.textContent = alt;
  openPopup(popupImage);
}