const popupImage = document.querySelector('.popup_type_image');
const popupImageImage = popupImage.querySelector('.popup__image');
const popupImageCaption = popupImage.querySelector('.popup__caption');

export function openPopup(popup) {
  popup.classList.add('popup_is-animated');
  setTimeout(() => {
    popup.classList.add("popup_is-opened");
  }, 10);
  document.addEventListener('keydown', closeByEsc);
}
 
export function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEsc);
}

// Закрытие Esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
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