import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onImagePopup}) {
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        api.getNeededAll()
          .then(([dataForUserInfo, dataForInitialCards]) => {
            // const [dataForUserInfo, dataForInitialCards] = result;
            setCurrentUser(dataForUserInfo);;
            setCards(dataForInitialCards);
          })
          .catch(err => console.log(err))
        }, []);
    return (
        <main className="content">
      <section className="profile">
          <button className="profile__avatar-hover" onClick={onEditAvatar}>
              <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
          </button>  
          <div className="profile__info">
              <div className="profile__container">
                  <h1 className="profile__title">{currentUser.name}</h1>
                  <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
              </div>
              <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements" > 
         {
          cards.map((card) => {
             return(<Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onImagePopup={onImagePopup}
              />
            )}
          )}
      </section>
      console.log(cards)
  </main>
    );
  }
  
  export default Main;