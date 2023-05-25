import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  };

  function handleProfileClick(isEditProfilePopupOpen) {
    setIsEditProfilePopupOpen(isEditProfilePopupOpen);
  }
  function handlePlaceClick(isAddPlacePopupOpen) {
    setIsAddPlacePopupOpen(isAddPlacePopupOpen);
  }
  function handleAvatarClick(isEditAvatarPopupOpen) {
    setIsEditAvatarPopupOpen(isEditAvatarPopupOpen);
  }
  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleProfileClick}
        onAddPlace={handlePlaceClick}
        onEditAvatar={handleAvatarClick}
        onImagePopup={() => setIsImagePopupOpen(true)}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        textButton="Сохранить"
      >
        <input
          className="popup__field popup__field_type_name popup__field_type_name-profile"
          id="popup__field_type_name-profile"
          type="text"
          name="name"
          placeholder="Жак-Ив Кусто"
          defaultValue=""
          required
          minLength="2"
          maxLength="40"
        />
        <span
          className="popup__field-error error-name error-height-top"
          id="popup__field_type_name-profile-error"
        ></span>
        <input
          className="popup__field popup__field_type_job popup__field_type_job-profile"
          id="popup__field_type_job-profile"
          type="text"
          name="job"
          placeholder="Исследователь океана"
          defaultValue=""
          required
          minLength="2"
          maxLength="200"
        />
        <span
          className="popup__field-error error-info error-height-bottom"
          id="popup__field_type_job-profile-error"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name="card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        textButton="Создать"
      >
        <input
          className="popup__field popup__field_type_name popup__field_name"
          id="popup__field_name"
          type="text"
          name="place"
          placeholder="Название"
          defaultValue=""
          required
          minLength="2"
          maxLength="30"
        />
        <span
          className="popup__field-error error-place error-height-top"
          id="popup__field_name-error"
        ></span>
        <input
          className="popup__field popup__field_type_job popup__field_link"
          id="popup__field_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          defaultValue=""
          required
        />
        <span
          className="popup__field-error error-link error-height-bottom"
          id="popup__field_link-error"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        textButton="Сохранить"
      >
        <input
          className="popup__field"
          id="avatar"
          type="url"
          name="popup__field_avatar"
          placeholder="Ссылка на каринку"
          defaultValue=""
          required
        />
        <span
          className="popup__field-error error-link error-height-top"
          id="avatar-error"
        ></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
      />
    </>
  );
}

export default App;
