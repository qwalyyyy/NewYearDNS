import React from 'react';
import Modal from 'react-modal';

const GiftModal = ({ isOpen, onClose, gift }) => {
  if (!gift) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      <h2>{gift.name}</h2>
      <img src={gift.image} alt={gift.name} />
      <p>Цена: {gift.price} ₽</p>
      <a href={gift.link} target="_blank" rel="noopener noreferrer">
        Перейти к товару
      </a>
      <button onClick={onClose}>Закрыть</button>
    </Modal>
  );
};

export default GiftModal;
