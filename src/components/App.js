import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isProfileOpen, setisProfileOpen] = useState(false);
    const [isPlaceOpen, setisPlaceOpen] = useState(false);
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);
    const [isImageOpen, setisImageOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({}); 
    const closeAllPopups = () => {        
        setisProfileOpen(false);
        setisPlaceOpen(false);
        setIsAvatarOpen(false);
        setisImageOpen(false);
        setSelectedCard({});
    }

    function handleProfileClick (isProfileOpen) {
        setisProfileOpen(isProfileOpen)
    };
    function handlePlaceClick (isPlaceOpen) {
        setisPlaceOpen(isPlaceOpen)
    };
    function handleAvatarClick (isAvatarOpen) {
        setIsAvatarOpen(isAvatarOpen)
    };
    function handleCardClick (selectedCard) {
        setSelectedCard(selectedCard);
    };

  return (
    <>
    <Header />
    <Main 
    onEditProfile = {handleProfileClick}
    onAddPlace = {handlePlaceClick}
    onEditAvatar = {handleAvatarClick}
    onImagePopup={() => setisImageOpen(true)}
    onCardClick={handleCardClick} />
    <Footer />
    
    <PopupWithForm
            name = 'profile'
            title = 'Редактировать профиль' 
            isOpen = {isProfileOpen}
            onClose = {closeAllPopups}
            textButton = 'Сохранить'>
              <input className="popup__field popup__field_type_name popup__field_type_name-profile" id="popup__field_type_name-profile" type="text" name="name" placeholder="Жак-Ив Кусто" defaultValue="" required minLength="2" maxLength="40"/>
              <span className="popup__field-error error-name error-height-top" id="popup__field_type_name-profile-error"></span>
              <input className="popup__field popup__field_type_job popup__field_type_job-profile" id="popup__field_type_job-profile" type="text" name="job" placeholder="Исследователь океана" defaultValue="" required minLength="2" maxLength="200"/>
              <span className="popup__field-error error-info error-height-bottom" id="popup__field_type_job-profile-error"></span>
        </PopupWithForm>

        <PopupWithForm
            name = 'card'
            title = 'Новое место'             
            isOpen = {isPlaceOpen}
            onClose = {closeAllPopups}
            textButton = 'Создать'>
              <input className="popup__field popup__field_type_name popup__field_name" id="popup__field_name" type="text" name="place" placeholder="Название" defaultValue="" required minLength="2" maxLength="30" />
              <span className="popup__field-error error-place error-height-top" id="popup__field_name-error"></span>
              <input className="popup__field popup__field_type_job popup__field_link" id="popup__field_link" type="url" name="link" placeholder="Ссылка на картинку" defaultValue="" required />
              <span className="popup__field-error error-link error-height-bottom" id="popup__field_link-error"></span>
        </PopupWithForm>

        <PopupWithForm 
            name = 'avatar'
            title = 'Обновить аватар'
            isOpen = {isAvatarOpen}
            onClose = {closeAllPopups}
            textButton = 'Сохранить'>
                    <input className="popup__field" id="avatar" type="url" name="popup__field_avatar" placeholder="Ссылка на каринку" defaultValue="" required />
              <span className="popup__field-error error-link error-height-top" id="avatar-error"></span>
        </PopupWithForm>

        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            isOpen={isImageOpen} 
        />
  
  
  {/* <div className="popup popup-dop">
      <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__header">Редактировать профиль</h2>
          <form className="popup__form" name="popup-form-profile" id="popup-form-profile" novalidate >
              <input className="popup__field popup__field_type_name popup__field_type_name-profile" id="popup__field_type_name-profile" type="text" name="name" placeholder="Жак-Ив Кусто" value="Жак-Ив Кусто" required minlength="2" maxlength="40"/>
              <span className="popup__field-error error-name error-height-top" id="popup__field_type_name-profile-error"></span>
              <input className="popup__field popup__field_type_job popup__field_type_job-profile" id="popup__field_type_job-profile" type="text" name="job" placeholder="Исследователь океана" value="Исследователь океана" required minlength="2" maxlength="200"/>
              <span className="popup__field-error error-info error-height-bottom" id="popup__field_type_job-profile-error"></span>
              <button type="submit" className="popup__submit" name="button">Сохранить</button>
          </form>
      </div>
  </div>
  <div className="popup popup-add">
      <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__header">Новое место</h2>
          <form className="popup__form" name="popup-add-form" id="popup-add-form" novalidate>
              <input className="popup__field popup__field_type_name popup__field_name" id="popup__field_name" type="text" name="place" placeholder="Название" defaultValue="" required minlength="2" maxlength="30" />
              <span className="popup__field-error error-place error-height-top" id="popup__field_name-error"></span>
              <input className="popup__field popup__field_type_job popup__field_link" id="popup__field_link" type="url" name="link" placeholder="Ссылка на картинку" defaultValue="" required />
              <span className="popup__field-error error-link error-height-bottom" id="popup__field_link-error"></span>
              <button type="submit" className="popup__submit" name="button" >Создать</button>
          </form>
      </div>
  </div>

  <div className="popup-image popup">
      <div className="popup__container-image">
        <div className="popup__opened-image">
          <img className="popup__image" alt="Описание места" src="#"/>
          <p className="popup__subtitle-image"></p>
        </div>
        <button className="popup__close" type="button" name="close-button"></button>
      </div>
  </div>

  <div className="popup popup-avatar">
      <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <form className="popup__form" novalidate name="popup-avatar-form" id="popup-avatar-form">
              <h2 className="popup__header">Обновить аватар</h2>
              <input className="popup__field" id="avatar" type="url" name="popup__field_avatar" placeholder="Ссылка на каринку" value="" required />
              <span className="popup__field-error error-link error-height-top" id="avatar-error"></span>                
              <button type="submit" className="popup__submit" name="button">Cохранить</button>
          </form>               
      </div>
  </div>

  <div className="popup popup-delete">
      <div className="popup__container popup__container-delete">
          <button type="button" className="popup__close"></button>
          <form className="popup__form">
              <h2 className="popup__header popup__header_avatar">Вы уверены?</h2>
              <button type="submit" className="popup__submit popup__submit-delete" name="button">Да</button>
          </form>               
      </div>
  </div> */}
  </>
  );
}

export default App;
