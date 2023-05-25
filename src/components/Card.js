import React from "react";

function Card({ card, onCardClick, onImagePopup }) {
  return (
    <article className="element">
      <img
        className="element__img"
        src={card.link}
        alt={card.name}
        onClick={() => {
          onCardClick(card);
          onImagePopup();
        }}
      />
      <button type="button" className="element__button_trash"></button>
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
          <button type="button" className="element__button"></button>
          <h3 className="element__number-like">{card.likes.length}</h3>
        </div>
      </div>
    </article>
  );
}

export default Card;
